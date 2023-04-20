import { Test, TestingModule } from '@nestjs/testing';
import { ImageGeneratorController } from './image-generator.controller';

describe('ImageGeneratorController', () => {
  let controller: ImageGeneratorController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ImageGeneratorController],
    }).compile();

    controller = module.get<ImageGeneratorController>(ImageGeneratorController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
