import { ApiProperty } from '@nestjs/swagger';

export class CreateMedicationDto {
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
