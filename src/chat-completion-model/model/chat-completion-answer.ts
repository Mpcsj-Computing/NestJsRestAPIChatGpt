import { IsNotEmpty, IsString } from 'class-validator';

export class GetChatCompletionAnswerInput {
  @IsString()
  @IsNotEmpty()
  message: string;
}

export class GetChatCompletionAnswerOutput {
  @IsString()
  @IsNotEmpty()
  aiMessage: string;

  static getInstance(aiMessage: string) {
    const result = new GetChatCompletionAnswerOutput();
    result.aiMessage = aiMessage;
    return result;
  }
}
