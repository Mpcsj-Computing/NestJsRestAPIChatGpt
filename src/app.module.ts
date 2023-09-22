import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { ChatCompletionApiModule } from './chat-completion-api/chat-completion-api.module';

@Module({
  imports: [ConfigModule.forRoot(), ChatCompletionApiModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
