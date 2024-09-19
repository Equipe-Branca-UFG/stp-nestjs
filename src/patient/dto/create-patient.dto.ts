// src/patient/dto/create-patient.dto.ts
import { ApiProperty } from '@nestjs/swagger';

export class CreatePatientDto {
  @ApiProperty({ example: 'John Doe', description: 'The name of the patient' })
  name: string;

  @ApiProperty({
    example: '123456',
    description: 'The medical record number of the patient',
  })
  medicalRecordNumber: string;

  @ApiProperty({
    example: 'Stable',
    description: 'The current status of the patient',
  })
  currentStatus: string;
}
