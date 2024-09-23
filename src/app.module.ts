import { Module } from '@nestjs/common';
import { PatientModule } from './patient/patient.module';
import { HospitalModule } from './hospital/hospital.module';
import { TransferRequestModule } from './transfer-request/transfer-request.module';
import { PrismaModule } from './prisma/prisma.module';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { MedicationService } from './medication/medication.service';
import { MedicationModule } from './medication/medication.module';
import { ProcedureController } from './procedure/procedure.controller';
import { ProcedureModule } from './procedure/procedure.module';
import { EquipmentService } from './equipment/equipment.service';
import { EquipamentModule } from './equipment/equipment.module';
import { DocumentController } from './document/document.controller';
import { DocumentModule } from './document/document.module';

@Module({
  imports: [
    AuthModule,
    DocumentModule,
    EquipamentModule,
    HospitalModule,
    MedicationModule,
    PatientModule,
    ProcedureModule,
    TransferRequestModule,
    PrismaModule,
    UsersModule,
  ],
  providers: [MedicationService, EquipmentService],
  controllers: [ProcedureController, DocumentController],
})
export class AppModule {}
