import { Injectable } from '@nestjs/common';
import { Configuration, OpenAIApi,CreateCompletionRequest} from "openai";
import { GetAiModelAnswer } from './model/get-ai-model-answer';



@Injectable()
export class ChatGptAiService {

    private readonly openAiApi:OpenAIApi

    constructor(){
        const configuration = new Configuration({
            organization: process.env.ORGANIZATION_ID,
            apiKey: process.env.OPENAI_API_KEY,
        });
        
        this.openAiApi = new OpenAIApi(configuration);

    }

    async listModels(){
        const models = await this.openAiApi.listModels()
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
            const response = await this.openAiApi.createCompletion(params)

            const {data} = response
            if(data.choices.length){
                return data.choices
            }
            return response.data

        } catch (error) {
            
        }
    }
}
