import { IsNotEmpty, IsString } from 'class-validator';

export class GetChatCompilationAnswerDto {
  @IsString()
  @IsNotEmpty()
  aiMessage: string;

  static getInstance(aiMessage: string) {
    const result = new GetChatCompilationAnswerDto();
    result.aiMessage = aiMessage;
    return result;
  }
}
