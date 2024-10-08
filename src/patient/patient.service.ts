import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { Patient, Prisma } from '@prisma/client';

@Injectable()
export class PatientService {
  constructor(private prisma: PrismaService) {}

  async getPatient(id: string): Promise<Patient | null> {
    return this.prisma.patient.findUnique({
      where: { id },
    });
  }

  async getAllPatients(): Promise<Patient[]> {
    return this.prisma.patient.findMany();
  }

  async createPatient(data: Prisma.PatientCreateInput): Promise<Patient> {
    return this.prisma.patient.create({ data });
  }

  async updatePatient(
    id: string,
    data: Prisma.PatientUpdateInput,
  ): Promise<Patient> {
    return this.prisma.patient.update({
      where: { id },
      data,
    });
  }

  async remove(id: string): Promise<Patient> {
    return this.prisma.patient.delete({
      where: { id },
    });
  }
}
