import { Module } from '@nestjs/common';
import { ChatCompletionModelService } from './chat-completion-model.service';
import { ChatCompletionModelController } from './chat-completion-model.controller';

@Module({
  providers: [ChatCompletionModelService],
  controllers: [ChatCompletionModelController]
})
export class ChatCompletionModelModule {}
