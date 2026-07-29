import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateConcernDto } from './dto/create-concern.dto';
import { UpdateConcernDto } from './dto/update-concern.dto';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class ConcernsService {
  constructor(private prisma: PrismaService) {}

  async create(createConcernDto: CreateConcernDto) {
    return this.prisma.concern.create({
      data: createConcernDto,
    });
  }

  async findAll() {
    return this.prisma.concern.findMany({
      include: { 
        tenant: { select: { fullName: true, email: true } }, 
        unit: true 
      }
    });
  }

  async findOne(id: string) {
    const concern = await this.prisma.concern.findUnique({
      where: { id },
      include: { 
        tenant: { select: { fullName: true, email: true } }, 
        unit: true 
      }
    });

    if (!concern) {
      throw new NotFoundException(`Concern with ID ${id} not found`);
    }
    return concern;
  }

  async update(id: string, updateConcernDto: UpdateConcernDto) {
    return this.prisma.concern.update({
      where: { id },
      data: updateConcernDto,
    });
  }

  async remove(id: string) {
    return this.prisma.concern.delete({
      where: { id },
    });
  }
}