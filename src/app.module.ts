import { Module } from '@nestjs/common';
import { PatientModule } from './patient/patient.module';
import { HospitalModule } from './hospital/hospital.module';
import { TransferRequestModule } from './transfer-request/transfer-request.module';
import { PrismaModule } from './prisma/prisma.module';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';

@Module({
  imports: [
    AuthModule,
    HospitalModule,
    PatientModule,
    TransferRequestModule,
    PrismaModule,
    UsersModule,
  ],
})
export class AppModule {}
