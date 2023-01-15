import { Test, TestingModule } from '@nestjs/testing';
import { ChatGptAiService } from './chat-gpt-ai.service';

describe('ChatGptAiService', () => {
  let service: ChatGptAiService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ChatGptAiService],
    }).compile();

    service = module.get<ChatGptAiService>(ChatGptAiService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
