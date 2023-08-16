import { Body, Controller, Post, ValidationPipe } from '@nestjs/common';
import { ChatCompletionModelService } from './chat-completion-model.service';
import { GetChatCompletionAnswerInput } from './model/chat-completion-answer';

@Controller('chat-completion-model')
export class ChatCompletionModelController {
  constructor(private readonly service: ChatCompletionModelService) {}

  @Post()
  getChatCompletionMessage(
    @Body(new ValidationPipe({ transform: true }))
    data: GetChatCompletionAnswerInput,
  ) {
    return this.service.getModelAnswer(data);
  }
}
