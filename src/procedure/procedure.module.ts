import { Module } from '@nestjs/common';
import { ProcedureService } from './procedure.service';
import { PrismaService } from 'src/prisma/prisma.service';
import { ProcedureController } from './procedure.controller';

@Module({
  controllers: [ProcedureController],
  providers: [ProcedureService, PrismaService],
  exports: [ProcedureService],
})
export class ProcedureModule {}
