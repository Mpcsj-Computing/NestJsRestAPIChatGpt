import { IsNotEmpty, IsString } from 'class-validator';

export class CreateDreamChatDto {
  @IsString()
  @IsNotEmpty()
  message: string;
}
