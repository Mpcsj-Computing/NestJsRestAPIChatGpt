import { Module } from '@nestjs/common';
import { ChatCompletionApiService } from './chat-completion-api.service';
import { ChatCompletionApiController } from './chat-completion-api.controller';
import { ChatGPTService } from './chat-gpt.service';

@Module({
  providers: [ChatCompletionApiService, ChatGPTService],
  controllers: [ChatCompletionApiController],
})
export class ChatCompletionApiModule {}
