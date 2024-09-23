import { ApiProperty } from '@nestjs/swagger';

export class Procedure {
  @ApiProperty({
    example: '5f9d7a3b9d3f2c1a4c6b8e1d',
    description: 'The unique identifier of the procedure',
  })
  id: string;

  @ApiProperty({ example: 'Blood Test', description: 'Name of the procedure' })
  name: string;

  @ApiProperty({
    example: 'Complete Blood Count (CBC)',
    description: 'Description of the procedure',
  })
  description: string;
}
