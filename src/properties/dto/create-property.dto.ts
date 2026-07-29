import { IsNotEmpty, IsString, IsUUID } from 'class-validator';

export class CreatePropertyDto {
  @IsString()
  @IsNotEmpty()
  name!: string;

  @IsString()
  @IsNotEmpty()
  address!: string;

  @IsUUID()
  @IsNotEmpty()
  landlordId!: string;
}