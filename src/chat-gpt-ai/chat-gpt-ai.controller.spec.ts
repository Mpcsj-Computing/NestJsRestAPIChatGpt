import { Test, TestingModule } from '@nestjs/testing';
import { ChatGptAiController } from './chat-gpt-ai.controller';

describe('ChatGptAiController', () => {
  let controller: ChatGptAiController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ChatGptAiController],
    }).compile();

    controller = module.get<ChatGptAiController>(ChatGptAiController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
