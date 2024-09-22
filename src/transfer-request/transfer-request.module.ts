import { Module } from '@nestjs/common';
import { TransferRequestController } from './transfer-request.controller';
import { TransferRequestService } from './transfer-request.service';
import { PrismaService } from 'src/prisma/prisma.service';
import { PatientModule } from 'src/patient/patient.module';
import { HospitalModule } from 'src/hospital/hospital.module';
import { UsersModule } from 'src/users/users.module';

@Module({
  controllers: [TransferRequestController],
  providers: [TransferRequestService, PrismaService],
  imports: [PatientModule, HospitalModule, UsersModule],
})
export class TransferRequestModule {}
