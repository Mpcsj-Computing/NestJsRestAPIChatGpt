import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ChatGptAiModule } from './chat-gpt-ai/chat-gpt-ai.module';
import { ConfigModule } from '@nestjs/config';
import { ImageGeneratorModule } from './image-generator/image-generator.module';

@Module({
  imports: [ChatGptAiModule,ConfigModule.forRoot(), ImageGeneratorModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
