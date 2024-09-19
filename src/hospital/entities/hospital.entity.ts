// src/hospital/entities/hospital.entity.ts

import { ApiProperty } from '@nestjs/swagger';

export class Hospital {
  @ApiProperty({
    example: '5f9d7a3b9d3f2c1a4c6b8e1d',
    description: 'The unique identifier of the hospital',
  })
  id: string;

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
