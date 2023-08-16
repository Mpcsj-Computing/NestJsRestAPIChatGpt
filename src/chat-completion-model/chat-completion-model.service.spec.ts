import { Test, TestingModule } from '@nestjs/testing';
import { ChatCompletionModelService } from './chat-completion-model.service';

describe('ChatCompletionModelService', () => {
  let service: ChatCompletionModelService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ChatCompletionModelService],
    }).compile();

    service = module.get<ChatCompletionModelService>(ChatCompletionModelService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
