import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateAgreementDto } from './dto/create-agreement.dto';
import { UpdateAgreementDto } from './dto/update-agreement.dto';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class AgreementsService {
  constructor(private prisma: PrismaService) {}

  async create(createAgreementDto: CreateAgreementDto) {
    
    // if the Unit is already occupied before creating the lease.
    return this.prisma.agreement.create({
      data: createAgreementDto,
    });
  }

  async findAll() {
    return this.prisma.agreement.findMany({
      include: { 
        tenant: { select: { fullName: true, email: true } }, 
        unit: true 
      },
    });
  }

  async findOne(id: string) {
    const agreement = await this.prisma.agreement.findUnique({
      where: { id },
      include: { 
        tenant: { select: { fullName: true, email: true } }, 
        unit: true 
      },
    });

    if (!agreement) {
      throw new NotFoundException(`Agreement with ID ${id} not found`);
    }
    return agreement;
  }

  async update(id: string, updateAgreementDto: UpdateAgreementDto) {
    return this.prisma.agreement.update({
      where: { id },
      data: updateAgreementDto,
    });
  }

  async remove(id: string) {
    return this.prisma.agreement.delete({
      where: { id },
    });
  }
}