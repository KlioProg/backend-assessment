import { Injectable, ConflictException, NotFoundException } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { PrismaService } from '../prisma/prisma.service';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UsersService {
  constructor(private prisma: PrismaService) {}

  // POST: Create a User
  async create(createUserDto: CreateUserDto) {
    const { email, password, fullName, role } = createUserDto;

    const existingUser = await this.prisma.user.findUnique({
      where: { email },
    });

    if (existingUser) {
      throw new ConflictException('Email is already in use');
    }

    const saltRounds = 10;
    const hashedPassword = await bcrypt.hash(password, saltRounds);

    const user = await this.prisma.user.create({
      data: {
        email,
        password: hashedPassword,
        fullName,
        role,
      },
    });

    delete (user as any).password;
    return user;
  }

  // GET: All Users (excluding passwords)
  async findAll() {
    return this.prisma.user.findMany({
      select: {
        id: true,
        email: true,
        fullName: true,
        role: true,
        createdAt: true,
      }
    });
  }

  // GET: Single User
  async findOne(id: string) {
    const user = await this.prisma.user.findUnique({
      where: { id },
    });

    if (!user) {
      throw new NotFoundException(`User with ID ${id} not found`);
    }

    delete (user as any).password;
    return user;
  }

  // PATCH: Update User
  async update(id: string, updateUserDto: UpdateUserDto) {
    // If they are updating the password, hash it first
    if (updateUserDto.password) {
      updateUserDto.password = await bcrypt.hash(updateUserDto.password, 10);
    }

    const updatedUser = await this.prisma.user.update({
      where: { id },
      data: updateUserDto,
    });

    delete (updatedUser as any).password;
    return updatedUser;
  }

  // DELETE: Remove User
  async remove(id: string) {
    return this.prisma.user.delete({
      where: { id },
    });
  }
}