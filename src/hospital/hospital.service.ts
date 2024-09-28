// src/hospital/hospital.service.ts
import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { Hospital, Prisma } from '@prisma/client';

@Injectable()
export class HospitalService {
  constructor(private prisma: PrismaService) {}

  async getHospital(id: string): Promise<Hospital | null> {
    return this.prisma.hospital.findUnique({
      where: { id },
    });
  }

  async getAllHospitals(): Promise<Hospital[]> {
    return this.prisma.hospital.findMany();
  }

  async createHospital(data: Prisma.HospitalCreateInput): Promise<Hospital> {
    return this.prisma.hospital.create({ data });
  }

  async updateHospital(
    id: string,
    data: Prisma.HospitalUpdateInput,
  ): Promise<Hospital> {
    return this.prisma.hospital.update({
      where: { id },
      data,
    });
  }

  async remove(id: string): Promise<Hospital> {
    return this.prisma.hospital.delete({ where: { id } });
  }
}
