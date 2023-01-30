import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { Configuration, OpenAIApi,CreateCompletionRequest} from "openai";
import { AwsParameterStoreService } from 'src/aws-parameter-store/aws-parameter-store.service';
import { GetAiModelAnswer } from './model/get-ai-model-answer';



@Injectable()
export class ChatGptAiService {

    private openAiApi:OpenAIApi|undefined

    constructor(private readonly parameterStoreService:AwsParameterStoreService){
    }

    private async getOpenAiAPi():Promise<OpenAIApi>{
        if(!this.openAiApi){
            const openaiApiKey = await this.parameterStoreService.getParameter("chatgpt/openai-api-key",true)
            const openAiOrgId = await this.parameterStoreService.getParameter("chatgpt/org-id")

            if(!openaiApiKey.Parameter){
                throw new InternalServerErrorException("OpenAI API Key could not be retrieved")
            }

            if(!openaiApiKey.Parameter){
                throw new InternalServerErrorException("OpenAI Org ID could not be retrieved")
            }

            const configuration = new Configuration({
                organization: openAiOrgId.Parameter.Value,
                apiKey: openaiApiKey.Parameter.Value,
            });
        
            this.openAiApi = new OpenAIApi(configuration);
        }

        return this.openAiApi
    }
    async listModels(){
        const openAiAPi = await this.getOpenAiAPi()
        const models = await openAiAPi.listModels()
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
            const openAiAPi = await this.getOpenAiAPi()
            const response = await openAiAPi.createCompletion(params)

            const {data} = response
            if(data.choices.length){
                return data.choices
            }
            return response.data

        } catch (error) {
            
        }
    }
}
