import { ApiProperty } from '@nestjs/swagger';

export class Patient {
  @ApiProperty({
    example: '5f9d7a3b9d3f2c1a4c6b8e1d',
    description: 'The unique identifier of the patient',
  })
  id: string;

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
