import { Test, TestingModule } from '@nestjs/testing';
import { ChatGptAiController } from './chat-gpt-ai.controller';
import { ChatGptAiService } from './chat-gpt-ai.service';
import { OpenAIApi } from 'openai';
import {
  sampleListModelsResult,
  sampleModelAnswerResult,
} from '../../test/test-data';
import { GetAiModelAnswer } from './model/get-ai-model-answer';

jest.mock('openai', () => {
  const mockConfiguration = jest.fn();

  const createCompletionMock = jest.fn();
  const listModelsMock = jest.fn();

  listModelsMock.mockImplementation(() => {
    return {
      data: require('../../test/test-data').sampleListModelsResult,
    };
  });

  createCompletionMock.mockImplementation(() => {
    return {
      data: {
        choices: require('../../test/test-data').sampleModelAnswerResult,
      },
    };
  });

  const mockOpenAIApi = {
    __esModule: true,
    createCompletion: createCompletionMock,
    listModels: listModelsMock,
  };
  return {
    Configuration: mockConfiguration,
    OpenAIApi: jest.fn().mockImplementation(() => mockOpenAIApi),
  };
});
describe('ChatGptAiController', () => {
  let controller: ChatGptAiController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ChatGptAiController],
      providers: [ChatGptAiService],
    }).compile();

    controller = module.get<ChatGptAiController>(ChatGptAiController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  it('calls OpenAIApi.createCompletion', async () => {
    // Set up the mock implementation of OpenAIApi
    // Call myFunction
    const data = new GetAiModelAnswer();
    data.question = 'Say Hello self perfecter in italian';
    const result = await controller.getModelAnswer(data);
    // Check that createCompletion was called with the expected arguments
    expect(OpenAIApi).toHaveBeenCalled();
    expect(result).toEqual(sampleModelAnswerResult);
  });
  it('should list all models', async () => {
    // Mock the classes using jest.mock()
    const modelsResult = await controller.listModels();

    expect(OpenAIApi).toHaveBeenCalled();
    expect(modelsResult).toEqual(sampleListModelsResult);
  });
});
