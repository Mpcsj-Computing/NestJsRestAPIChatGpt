import { Module } from '@nestjs/common';
import { AwsParameterStoreModule } from 'src/aws-parameter-store/aws-parameter-store.module';
import { ChatGptAiController } from './chat-gpt-ai.controller';
import { ChatGptAiService } from './chat-gpt-ai.service';

@Module({
  imports:[AwsParameterStoreModule],
  controllers: [ChatGptAiController],
  providers: [ChatGptAiService]
})
export class ChatGptAiModule {}
