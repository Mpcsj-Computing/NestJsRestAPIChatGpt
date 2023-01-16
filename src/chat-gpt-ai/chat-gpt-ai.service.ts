import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { Configuration, OpenAIApi,CreateCompletionRequest} from "openai";
import { AwsParameterStoreService } from 'src/aws-parameter-store/aws-parameter-store.service';
import { GetAiModelAnswer } from './model/get-ai-model-answer';



@Injectable()
export class ChatGptAiService {

    private openAiApi:OpenAIApi|undefined

    constructor(private readonly parameterStoreService:AwsParameterStoreService){
        // this.testParameterStoreIntegration()

    }

    async getOpenAiApi():Promise<OpenAIApi>{
        if(!this.openAiApi){
            const apiKey = await this.parameterStoreService.getParameter("chatgpt/api-key",true)
            const organizationId = await this.parameterStoreService.getParameter("chatgpt/org-id")
            
            if(!apiKey.Parameter){
                throw new InternalServerErrorException(`API Key for OpenAI not found!`)
            }

            if(!organizationId.Parameter){
                throw new InternalServerErrorException(`Org ID for OpenAI not found!`)
            }


            const configuration = new Configuration({
                organization: organizationId.Parameter.Value,
                apiKey: apiKey.Parameter.Value,
            });

            this.openAiApi = new OpenAIApi(configuration)
        }

        return this.openAiApi
    }


    async listModels(){
        const openAiApi = await this.getOpenAiApi()
        const models = await openAiApi.listModels()
        return models.data
    }

    async getModelAnswer(input:GetAiModelAnswer){
        try {
            
            const params:CreateCompletionRequest ={
                prompt:input.question,
                model:input.getModelId(),
                temperature:input.getTemperature(),
                max_tokens:input.getMaxTokens()
            }

            console.log("params >> ",params)
            const openAiApi = await this.getOpenAiApi()
            const response = await openAiApi.createCompletion(params)

            const {data} = response
            if(data.choices.length){
                return data.choices
            }
            return response.data

        } catch (error) {
            
        }
    }
}
