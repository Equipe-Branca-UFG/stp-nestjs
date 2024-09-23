import { ApiProperty } from '@nestjs/swagger';

export class CreateEquipmentDto {
  @ApiProperty({ example: 'Ventilator', description: 'Name of the equipment' })
  name: string;

  @ApiProperty({
    example: 'Portable ventilator for respiratory support',
    description: 'Description of the equipment',
  })
  description: string;
}
