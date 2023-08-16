import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ChatGptAiModule } from './chat-gpt-ai/chat-gpt-ai.module';
import { ConfigModule } from '@nestjs/config';
import { ChatCompletionModelModule } from './chat-completion-model/chat-completion-model.module';

@Module({
  imports: [ChatGptAiModule,ConfigModule.forRoot(), ChatCompletionModelModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
