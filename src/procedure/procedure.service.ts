import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { Procedure, Prisma } from '@prisma/client';

@Injectable()
export class ProcedureService {
  constructor(private prisma: PrismaService) {}

  async create(data: Prisma.ProcedureCreateInput): Promise<Procedure> {
    return this.prisma.procedure.create({ data });
  }

  async findAll(): Promise<Procedure[]> {
    return this.prisma.procedure.findMany();
  }

  async findOne(id: string): Promise<Procedure | null> {
    return this.prisma.procedure.findUnique({ where: { id } });
  }

  async update(
    id: string,
    data: Prisma.ProcedureUpdateInput,
  ): Promise<Procedure> {
    return this.prisma.procedure.update({ where: { id }, data });
  }
}
