import { Module } from '@nestjs/common';
import { ImageGeneratorController } from './image-generator.controller';
import { ImageGeneratorService } from './image-generator.service';

@Module({
  controllers: [ImageGeneratorController],
  providers: [ImageGeneratorService]
})
export class ImageGeneratorModule {}
