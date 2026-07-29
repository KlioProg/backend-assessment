import { Module } from '@nestjs/common';
import { UnitsService } from './unit.service';
import { UnitsController } from './unit.controller';
import { PrismaModule } from '../prisma/prisma.module';

@Module({
  imports: [PrismaModule], 
  controllers: [UnitsController],
  providers: [UnitsService],
})
export class UnitsModule {}