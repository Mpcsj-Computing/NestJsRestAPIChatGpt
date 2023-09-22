import { Injectable } from '@nestjs/common';
import { ChatCompletionMessageParam } from 'openai/resources/chat';
import OpenAI from 'openai';

const DEFAULT_MODEL_ID = 'gpt-3.5-turbo';

@Injectable()
export class ChatGPTService {
  private openai: OpenAI;

  constructor() {
    this.openai = new OpenAI({
      apiKey: process.env.OPENAI_API_KEY,
    });
  }

  async predictMessages(chatHistory: string[]): Promise<string> {
    const messages: ChatCompletionMessageParam[] = chatHistory.map(
      (message, idx) => ({
        role: idx % 2 === 0 ? 'user' : 'assistant',
        content: message,
      }),
    );

    try {
      const response = await this.openai.chat.completions.create({
        model: DEFAULT_MODEL_ID,
        messages: messages,
      });
      return response.choices[0].message.content;
    } catch (err) {
      console.error('Error in predictMessages:', err);
      return '';
    }
  }
}
