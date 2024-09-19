import { Module } from '@nestjs/common';
import { PatientModule } from './patient/patient.module';
import { HospitalModule } from './hospital/hospital.module';
import { TransferRequestModule } from './transfer-request/transfer-request.module';
import { PrismaModule } from './prisma/prisma.module';

@Module({
  imports: [PatientModule, HospitalModule, TransferRequestModule, PrismaModule],
})
export class AppModule {}
