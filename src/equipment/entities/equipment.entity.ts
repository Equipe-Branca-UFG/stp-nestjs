import { ApiProperty } from '@nestjs/swagger';

export class Equipment {
  @ApiProperty({
    example: '5f9d7a3b9d3f2c1a4c6b8e1d',
    description: 'The unique identifier of the equipment',
  })
  id: string;

  @ApiProperty({ example: 'Ventilator', description: 'Name of the equipment' })
  name: string;

  @ApiProperty({
    example: 'Portable ventilator for respiratory support',
    description: 'Description of the equipment',
  })
  description: string;
}
