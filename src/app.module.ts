import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ChatGptAiModule } from './chat-gpt-ai/chat-gpt-ai.module';
import { ConfigModule } from '@nestjs/config';
import { ChatCompletionApiModule } from './chat-completion-api/chat-completion-api.module';

@Module({
  imports: [ChatGptAiModule,ConfigModule.forRoot(), ChatCompletionApiModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
