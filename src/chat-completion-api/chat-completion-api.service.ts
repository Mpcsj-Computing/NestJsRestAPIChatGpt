import { Injectable } from '@nestjs/common';
import { CreateDreamChatDto } from './dto/create-dream-chat.dto';
import { ChatGPTService } from './chat-gpt.service';
import { GetChatCompilationAnswerDto } from './dto/get-compilation-answer.dto';

@Injectable()
export class ChatCompletionApiService {
  private chatHistory: string[];

  constructor(private readonly chatGptAiService: ChatGPTService) {
    this.initChat('you are a helpful assistant'); //any initial message developer wants.
  }

  private initChat(systemMessage: string) {
    this.chatHistory = [systemMessage]; // Initialize with system message
  }

  async getAiModelAnswer(data: CreateDreamChatDto) {
    this.chatHistory.push(data.message); // Add human message to chat history

    const aiMessage = await this.chatGptAiService.predictMessages(
      this.chatHistory,
    );

    this.chatHistory.push(aiMessage);

    return GetChatCompilationAnswerDto.getInstance(aiMessage);
  }
}
