import { Test, TestingModule } from '@nestjs/testing';
import { ChatCompletionApiService } from './chat-completion-api.service';

describe('ChatCompletionApiService', () => {
  let service: ChatCompletionApiService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ChatCompletionApiService],
    }).compile();

    service = module.get<ChatCompletionApiService>(ChatCompletionApiService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
