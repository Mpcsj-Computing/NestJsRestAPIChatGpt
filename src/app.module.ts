import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ChatGptAiModule } from './chat-gpt-ai/chat-gpt-ai.module';
import { ConfigModule } from '@nestjs/config';
import { AwsParameterStoreModule } from './aws-parameter-store/aws-parameter-store.module';

@Module({
  imports: [ChatGptAiModule,ConfigModule.forRoot(), AwsParameterStoreModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
