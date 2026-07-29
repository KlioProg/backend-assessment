import { PartialType } from '@nestjs/swagger';
import { CreateConcernDto } from './create-concern.dto';

export class UpdateConcernDto extends PartialType(CreateConcernDto) {}
