import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateUnitDto } from './dto/create-unit.dto';
import { UpdateUnitDto } from './dto/update-unit.dto';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class UnitsService {
  constructor(private prisma: PrismaService) {}

  async create(createUnitDto: CreateUnitDto) {
    return this.prisma.unit.create({
      data: createUnitDto,
    });
  }

  async findAll() {
    return this.prisma.unit.findMany({
      include: { property: true }, // Pulls in the property details automatically
    });
  }

  async findOne(id: string) {
    const unit = await this.prisma.unit.findUnique({
      where: { id },
      include: { property: true },
    });

    if (!unit) {
      throw new NotFoundException(`Unit with ID ${id} not found`);
    }
    return unit;
  }

  async update(id: string, updateUnitDto: UpdateUnitDto) {
    return this.prisma.unit.update({
      where: { id },
      data: updateUnitDto,
    });
  }

  async remove(id: string) {
    return this.prisma.unit.delete({
      where: { id },
    });
  }
}