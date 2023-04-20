import { Injectable } from '@nestjs/common';
import { Configuration, OpenAIApi,CreateCompletionRequest} from "openai";

@Injectable()
export class ImageGeneratorService {
    private readonly openAiApi:OpenAIApi
    constructor(){
        const configuration = new Configuration({
            organization: process.env.ORGANIZATION_ID,
            apiKey: process.env.OPENAI_API_KEY,
        });
        
        this.openAiApi = new OpenAIApi(configuration);
    }

    async generateImage(prompt:string){
        const response = await this.openAiApi.createImage({
            prompt,
            n: 1,
            size: "1024x1024",
          });
          const image_url = response.data.data[0].url;

          return image_url
    }
}
