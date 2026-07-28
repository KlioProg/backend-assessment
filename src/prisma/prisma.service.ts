import { Injectable, OnModuleInit } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';
import { PrismaPg } from '@prisma/adapter-pg';
import * as dotenv from 'dotenv';

// Manually trigger dotenv so the adapter can find your DATABASE_URL
dotenv.config();

@Injectable()
export class PrismaService extends PrismaClient implements OnModuleInit {
  constructor() {
    // 1. Create the adapter exactly as the error log instructed
    const adapter = new PrismaPg({ 
      connectionString: process.env.DATABASE_URL 
    });
    
    // 2. Pass the adapter to the underlying PrismaClient
    super({ adapter });
  }

  async onModuleInit() {
    await this.$connect();
  }
} 