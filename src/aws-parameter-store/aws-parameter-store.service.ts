import { Injectable } from '@nestjs/common';
import * as AWS from "aws-sdk"
import {isProdution} from "../app.utils"

@Injectable()
export class AwsParameterStoreService {
    private readonly ssmClient:AWS.SSM
    private currentEnv:string
    constructor(){
        this.ssmClient = new AWS.SSM({
            region:"us-west-2"
        })

        this.currentEnv = isProdution()?"/prod":"/dev"
    }

    async getParameter(parameterKey:string,isSecure:boolean = false){
        return this.ssmClient.getParameter({
            Name:`${this.currentEnv}/${parameterKey}`,
            WithDecryption:isSecure
        }).promise()
    }
}
