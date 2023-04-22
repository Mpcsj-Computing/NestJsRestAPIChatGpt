import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { AppModule } from './../src/app.module';
import { sampleListModelsResult } from './test-data';

// TODO: Create a test.utils with some common code helpful to setup tests and replicate the process between different test suites
// This is an exercise to you reading this code :). Create a test.utils somewhere and put the common code there, to prevent duplicating
// the code related to setup tests
jest.mock('openai', () => {
  const mockConfiguration = jest.fn();

  const createCompletionMock = jest.fn();
  const listModelsMock = jest.fn();

  listModelsMock.mockImplementation(() => {
    return {
      data: require('./test-data').sampleListModelsResult,
    };
  });

  createCompletionMock.mockImplementation(() => {
    return {
      data: {
        choices: require('./test-data').sampleModelAnswerResult,
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

describe('AppController (e2e)', () => {
  let app: INestApplication;

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  it('/ (GET)', () => {
    return request(app.getHttpServer())
      .get('/')
      .expect(200)
      .expect('Hello self-perfecter!');
  });

  it('/chat-gpt-ai/model (GET)', () => {
    return request(app.getHttpServer())
      .get('/chat-gpt-ai/model')
      .expect(200)
      .expect(sampleListModelsResult);
  });
});
