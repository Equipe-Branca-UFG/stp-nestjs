import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { Medication, Prisma } from '@prisma/client';

@Injectable()
export class MedicationService {
  constructor(private prisma: PrismaService) {}

  async create(data: Prisma.MedicationCreateInput): Promise<Medication> {
    return this.prisma.medication.create({ data });
  }

  async findAll(): Promise<Medication[]> {
    return this.prisma.medication.findMany();
  }

  async findOne(id: string): Promise<Medication | null> {
    return this.prisma.medication.findUnique({ where: { id } });
  }

  async update(
    id: string,
    data: Prisma.MedicationUpdateInput,
  ): Promise<Medication> {
    return this.prisma.medication.update({ where: { id }, data });
  }
}
