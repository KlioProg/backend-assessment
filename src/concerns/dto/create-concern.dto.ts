import { IsNotEmpty, IsString, IsUUID, IsOptional } from 'class-validator';

export class CreateConcernDto {
  @IsString()
  @IsNotEmpty()
  title!: string;

  @IsString()
  @IsNotEmpty()
  description!: string;

  @IsString()
  @IsOptional()
  status?: string; // Defaults to "OPEN" in Prisma

  @IsUUID()
  @IsNotEmpty()
  tenantId!: string;

  @IsUUID()
  @IsNotEmpty()
  unitId!: string;
}