import { IsNotEmpty, IsString } from 'class-validator';

export class GetChatCompletionAnswerInputDTO {
  @IsString()
  @IsNotEmpty()
  message: string;
}

export class GetChatCompletionAnswerOutputDTO {
  @IsString()
  @IsNotEmpty()
  aiMessage: string;

  static getInstance(aiMessage: string) {
    const result = new GetChatCompletionAnswerOutputDTO();
    result.aiMessage = aiMessage;
    return result;
  }
}
