// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

import {
    Kafka,
    logLevel
} from "kafkajs"

import { KafkaClient, GetBootstrapBrokersCommand } from "@aws-sdk/client-kafka";
import { GetSecretValueCommand, SecretsManagerClient } from "@aws-sdk/client-secrets-manager";
import { aclCrudOnEvent, aclCrudIsComplete } from "./acl-crud.mjs";
import { topicCrudOnEvent,  topicCrudIsComplete } from "./topic-crud.mjs";

// Handler functions
export const onEventHandler = async (event) => {

    console.log(event);

    const logLevelProp = event.ResourceProperties.logLevel == 'DEBUG' ? logLevel.DEBUG : logLevel.INFO;

    const clientSecretManager = new SecretsManagerClient();

    const responseSecretManager = await clientSecretManager.send(
        new GetSecretValueCommand({
            SecretId: event.ResourceProperties.secretArn,
        }),
    );
    
    const secret = JSON.parse(responseSecretManager.SecretString);
    

    //Cleaning the private key and cert and put them in PEM format
    //This is to avoid having malformed certificate and keys passed by the user
    //Error can be like "error:0480006C:PEM routines::no start line"
    
    let cleanedString = removeSpacesAndNewlines(secret.cert);
    
    const regexCert = /(?<=BEGINCERTIFICATE-----)(.*?)(?=-----ENDCERTIFICATE-----)/gs;
    const matchCert = cleanedString.match(regexCert);
    
    cleanedString = matchCert[0].trim(); // Trim any leading/trailing spaces
    const pemCertificate = formatToPEM(cleanedString, '-----BEGIN CERTIFICATE-----', '-----END CERTIFICATE-----');

    let cleanedStringKey = removeSpacesAndNewlines(secret.key);
    
    const regexKey = /(?<=BEGINRSAPRIVATEKEY-----)(.*?)(?=-----ENDRSAPRIVATEKEY-----)/gs;
    const matchKey = cleanedStringKey.match(regexKey);

    cleanedString = matchKey[0].trim(); // Trim any leading/trailing spaces
    const privateKey = formatToPEM(cleanedString, '-----BEGIN RSA PRIVATE KEY-----', '-----END RSA PRIVATE KEY-----');


    //console.log(JSON.parse(responseSecretManager.SecretString).cert);

    const client = new KafkaClient();
    const input = {
        ClusterArn: event.ResourceProperties.mskClusterArn,
    };

    const command = new GetBootstrapBrokersCommand(input);
    const response = await client.send(command);

    console.log(response);
    const brokerUrls = response.BootstrapBrokerStringTls.split(',');

    let clusterName = event.ResourceProperties.mskClusterArn.split('/')[1];

    const kafka = new Kafka({
        clientId: `client-CR-${clusterName}`,
        brokers: brokerUrls,
        ssl: {
            rejectUnauthorized: true,
            key: privateKey,
            cert: pemCertificate
        },
        logLevel: logLevelProp,
    });

    const admin = kafka.admin();

    console.info('======Recieved Event=======');

    // If the principal is set to REPLACE-WITH-BOOTSTRAP, 
    // we need to replace it with the broker FQDN prefix with a wildcard

    if (event.ResourceProperties.principal === "REPLACE-WITH-BOOTSTRAP") {
        const pattern = /^[^.]+\.(.+)$/;
        const match = brokerUrls[0].match(pattern);

        event.ResourceProperties.principal = '*.' + match[1];

    }

    switch(event.ResourceType) {
        case "Custom::MskAcl":
            console.log("Event for ACL receive");
            response = await aclCrudOnEvent(event, admin);
            console.log(response);
            return response;
        case "Custom::MskTopic":
            console.log("Event for Topic receive");
            response = await topicCrudOnEvent(event, admin);
            console.log(response);
            return response;
        default:
            console.log("Unknown Resource Type");
            throw new Error(`invalid resource type: ${event.ResourceType}`);
    }

    
}


function formatToPEM(certData, begin, end) {
    
    const maxLength = 64;

    let pemCert = begin + '\n';
    for (let i = 0; i < certData.length; i += maxLength) {
        pemCert += certData.substring(i, i + maxLength) + '\n';
    }
    pemCert += end;

    return pemCert;
}

function removeSpacesAndNewlines(inputString) {
    // Using regular expressions to remove spaces and newline characters
    return inputString.replace(/[\s\n]/g, '');
}


export const isCompleteHandler = async (event) => {

    switch(event.ResourceType) {
        case "Custom::MskAcl":
            console.log("ACL Event isComplete");
            response = await aclCrudIsComplete(event);
            console.log(response);
            return response;

        case "Custom::MskTopic":
            console.log("Topic Event isComplete");
            response = await topicCrudIsComplete(event);
            console.log(response);
            return response;
        default:
            console.log("Unknown Resource Type");
            throw new Error(`invalid resource type: ${event.ResourceType}`);
    }


}