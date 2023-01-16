import { Module } from '@nestjs/common';
import { AwsParameterStoreModule } from 'src/aws-parameter-store/aws-parameter-store.module';
import { ChatGptAiController } from './chat-gpt-ai.controller';
import { ChatGptAiService } from './chat-gpt-ai.service';

@Module({
  controllers: [ChatGptAiController],
  providers: [ChatGptAiService],
  imports:[AwsParameterStoreModule]
})
export class ChatGptAiModule {}
