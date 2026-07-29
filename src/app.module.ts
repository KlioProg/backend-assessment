import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { PrismaModule } from './prisma/prisma.module';
import { PropertiesModule } from './properties/properties.module';
import { UnitsModule } from './unit/unit.module'; // <-- Fix 1: Change to UnitsModule
import { AgreementsModule } from './agreements/agreements.module';
import { PaymentsModule } from './payments/payments.module';
import { ConcernsModule } from './concerns/concerns.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [
    UsersModule, 
    PrismaModule, 
    PropertiesModule, 
    UnitsModule, 
    AgreementsModule, 
    PaymentsModule, 
    ConcernsModule, 
    AuthModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}