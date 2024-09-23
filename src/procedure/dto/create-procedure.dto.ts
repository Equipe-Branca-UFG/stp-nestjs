import { ApiProperty } from '@nestjs/swagger';

export class CreateProcedureDto {
  @ApiProperty({ example: 'Blood Test', description: 'Name of the procedure' })
  name: string;

  @ApiProperty({
    example: 'Complete Blood Count (CBC)',
    description: 'Description of the procedure',
  })
  description: string;
}
