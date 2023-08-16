import { Test, TestingModule } from '@nestjs/testing';
import { ChatCompletionModelController } from './chat-completion-model.controller';

describe('ChatCompletionModelController', () => {
  let controller: ChatCompletionModelController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ChatCompletionModelController],
    }).compile();

    controller = module.get<ChatCompletionModelController>(ChatCompletionModelController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
