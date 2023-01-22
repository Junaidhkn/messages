import { IsString } from 'class-validator';

export class CreateMessegeDto {
  @IsString()
  content: string;
}
