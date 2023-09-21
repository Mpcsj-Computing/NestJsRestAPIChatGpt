import { Test, TestingModule } from '@nestjs/testing';
import { ChatCompletionApiController } from './chat-completion-api.controller';

describe('ChatCompletionApiController', () => {
  let controller: ChatCompletionApiController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ChatCompletionApiController],
    }).compile();

    controller = module.get<ChatCompletionApiController>(ChatCompletionApiController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
