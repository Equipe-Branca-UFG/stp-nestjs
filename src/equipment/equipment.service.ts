import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { Equipment, Prisma } from '@prisma/client';

@Injectable()
export class EquipmentService {
  constructor(private prisma: PrismaService) {}

  async create(data: Prisma.EquipmentCreateInput): Promise<Equipment> {
    return this.prisma.equipment.create({ data });
  }

  async findAll(): Promise<Equipment[]> {
    return this.prisma.equipment.findMany();
  }

  async findOne(id: string): Promise<Equipment | null> {
    return this.prisma.equipment.findUnique({ where: { id } });
  }

  async update(
    id: string,
    data: Prisma.EquipmentUpdateInput,
  ): Promise<Equipment> {
    return this.prisma.equipment.update({ where: { id }, data });
  }
}
