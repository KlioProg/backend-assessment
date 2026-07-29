import { Module } from '@nestjs/common';
import { ConcernsService } from './concerns.service';
import { ConcernsController } from './concerns.controller';
import { PrismaModule } from '../prisma/prisma.module';

@Module({
  imports: [PrismaModule], 
  controllers: [ConcernsController],
  providers: [ConcernsService],
})
export class ConcernsModule {}