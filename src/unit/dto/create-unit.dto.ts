import { IsNotEmpty, IsString, IsUUID, IsOptional } from 'class-validator';

export class CreateUnitDto {
  @IsString()
  @IsNotEmpty()
  unitNumber!: string;

  @IsString()
  @IsOptional()
  status?: string; 

  @IsUUID()
  @IsNotEmpty()
  propertyId!: string;
}