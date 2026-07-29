import { IsNotEmpty, IsUUID, IsDateString, IsOptional, IsBoolean } from 'class-validator';

export class CreateAgreementDto {
  @IsDateString()
  @IsNotEmpty()
  startDate!: string;

  @IsDateString()
  @IsNotEmpty()
  endDate!: string;

  @IsBoolean()
  @IsOptional()
  isActive?: boolean; 

  @IsUUID()
  @IsNotEmpty()
  tenantId!: string;

  @IsUUID()
  @IsNotEmpty()
  unitId!: string;
}