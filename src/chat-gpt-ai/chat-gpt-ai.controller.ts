import { Body, Controller, Get, Post, UsePipes, ValidationPipe } from '@nestjs/common';
import { ChatGptAiService } from './chat-gpt-ai.service';
import { GetAiModelAnswer } from './model/get-ai-model-answer';

@Controller('chat-gpt-ai')
export class ChatGptAiController {
    constructor(private readonly service:ChatGptAiService){}


    @Post("/message")
    @UsePipes(ValidationPipe)
    getModelAnswer(@Body() data: GetAiModelAnswer){
        return this.service.getModelAnswer(data)
    }

    @Get("/model")
    listModels(){
        return this.service.listModels()
    }

}
