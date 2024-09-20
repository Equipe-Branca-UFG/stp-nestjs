import { Module } from '@nestjs/common';
import { PatientModule } from './patient/patient.module';
import { HospitalModule } from './hospital/hospital.module';
import { TransferRequestModule } from './transfer-request/transfer-request.module';
import { PrismaModule } from './prisma/prisma.module';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';

@Module({
  imports: [
    PatientModule,
    HospitalModule,
    TransferRequestModule,
    PrismaModule,
    AuthModule,
    UsersModule,
  ],
})
export class AppModule {}
