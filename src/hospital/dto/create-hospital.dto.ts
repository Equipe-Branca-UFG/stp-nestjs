// src/hospital/dto/create-hospital.dto.ts
import { ApiProperty } from '@nestjs/swagger';

export class CreateHospitalDto {
  @ApiProperty({
    example: 'Central Hospital',
    description: 'The name of the hospital',
  })
  name: string;

  @ApiProperty({
    example: 'contact@hospital.com',
    description: 'Contact information for the hospital',
  })
  contactInfo: string;

  @ApiProperty({ example: 50, description: 'Number of available beds' })
  availableBeds: number;

  @ApiProperty({
    example: 'Dr. Smith',
    description: 'Name of the responsible personnel',
  })
  responsiblePersonnel: string;
}
