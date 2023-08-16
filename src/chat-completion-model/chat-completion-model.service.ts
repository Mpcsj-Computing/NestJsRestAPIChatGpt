import { Injectable } from '@nestjs/common';
import { ChatHistory } from './model/chat-history';
import { ChatOpenAI } from 'langchain/chat_models/openai';
import {
  GetChatCompletionAnswerInput,
  GetChatCompletionAnswerOutput,
} from './model/chat-completion-answer';

const DEFAULT_TEMPERATURE = 1;
const DEFAULT_MODEL = 'gpt-3.5-turbo';

@Injectable()
export class ChatCompletionModelService {
  private readonly chatHistory: ChatHistory;
  private readonly chat: ChatOpenAI;

  constructor() {
    this.chatHistory = new ChatHistory();
    this.chat = new ChatOpenAI({
      temperature: DEFAULT_TEMPERATURE,
      openAIApiKey: process.env.OPENAI_API_KEY,
      modelName: DEFAULT_MODEL,
    });
  }

  async getModelAnswer(
    data: GetChatCompletionAnswerInput,
  ): Promise<GetChatCompletionAnswerOutput> {
    this.chatHistory.addHumanMessage(data.message);

    const result = await this.chat.predictMessages(
      this.chatHistory.chatHistory,
    );

    const aiMessage = result.content;

    this.chatHistory.addAiMessage(aiMessage);

    return GetChatCompletionAnswerOutput.getInstance(aiMessage);
  }
}
