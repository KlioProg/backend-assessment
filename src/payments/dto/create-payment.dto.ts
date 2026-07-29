import { IsNotEmpty, IsNumber, IsUUID, IsDateString } from 'class-validator';

export class CreatePaymentDto {
  @IsNumber()
  @IsNotEmpty()
  amount!: number;

  @IsDateString()
  @IsNotEmpty()
  dueDate!: string;

  @IsUUID()
  @IsNotEmpty()
  agreementId!: string;
}