import { ApiProperty } from '@nestjs/swagger';

export class Medication {
  @ApiProperty({
    example: '5f9d7a3b9d3f2c1a4c6b8e1d',
    description: 'The unique identifier of the medication',
  })
  id: string;

  @ApiProperty({ example: 'Ibuprofen', description: 'Name of the medication' })
  name: string;

  @ApiProperty({ example: '400mg', description: 'Dosage of the medication' })
  dosage: string;

  @ApiProperty({
    example: 'Take with food every 6 hours',
    description: 'Administration details',
  })
  administrationDetails: string;
}
