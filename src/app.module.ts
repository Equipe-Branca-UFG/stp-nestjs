import { Module } from '@nestjs/common';

import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { PatientModule } from './patient/patient.module';
import { HospitalModule } from './hospital/hospital.module';
import { TransferRequestModule } from './transfer-request/transfer-request.module';
import { PrismaModule } from './prisma/prisma.module';
import { MedicationModule } from './medication/medication.module';
import { ProcedureModule } from './procedure/procedure.module';
import { EquipmentModule } from './equipment/equipment.module';
import { DocumentModule } from './document/document.module';

@Module({
  imports: [
    AuthModule,
    UsersModule,
    PatientModule,
    HospitalModule,
    TransferRequestModule,
    ProcedureModule,
    DocumentModule,
    EquipmentModule,
    MedicationModule,
    PrismaModule,
  ],
})
export class AppModule {}
