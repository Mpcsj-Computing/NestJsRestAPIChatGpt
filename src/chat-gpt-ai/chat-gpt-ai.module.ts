import { Module } from '@nestjs/common';
import { ChatGptAiController } from './chat-gpt-ai.controller';
import { ChatGptAiService } from './chat-gpt-ai.service';

@Module({
  controllers: [ChatGptAiController],
  providers: [ChatGptAiService]
})
export class ChatGptAiModule {}
