import { Body, Controller, Post, ValidationPipe } from '@nestjs/common';
import { ChatCompletionApiService } from './chat-completion-api.service';
import { CreateDreamChatDto } from './dto/create-dream-chat.dto';

@Controller('chat')
export class ChatCompletionApiController {
  constructor(private readonly service: ChatCompletionApiService) {}

  @Post()
  createDreamChat(@Body() body: CreateDreamChatDto) {
    return this.service.getAiModelAnswer(body);
  }
}
