import { Module } from '@nestjs/common';
import { PatientController } from 'src/patient/patient.controller';
import { PatientService } from 'src/patient/patient.service';
import { PrismaService } from 'src/prisma/prisma.service';

@Module({
  controllers: [PatientController],
  providers: [PatientService, PrismaService],
})
export class PatientModule {}
