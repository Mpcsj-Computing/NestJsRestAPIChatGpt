import { Injectable } from '@nestjs/common';
import { isProduction } from 'src/app.utils';
import * as AWS from "aws-sdk"


/**
 *  accessKeyId:"AKIAQP7CVG6AC5XRNICG",
 *  secretAccessKey:"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"
*/

@Injectable()
export class AwsParameterStoreService {
    private readonly ssmClient:AWS.SSM

    private readonly environment:string
    constructor(){
        const ssmParams = {
            region:"us-east-1",
        }
        this.ssmClient = new AWS.SSM(ssmParams)

        this.environment = isProduction()?"/prod":"/dev"
        console.log({
            ssmParams
        })
        console.log("environment >> ",this.environment)
    }


    /**
     * Read parameter from SSM Parameter Store
     * @param parameterKey: Key name to be read from Parameter Store:
    */
    async getParameter(parameterKey:string,isSecureString:boolean = false){
        return this.ssmClient.getParameter({
            Name:`${this.environment}/${parameterKey}`,
            WithDecryption:isSecureString
            
        }).promise()
    }
}
