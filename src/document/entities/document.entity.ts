import { ApiProperty } from '@nestjs/swagger';

export class Document {
  @ApiProperty({
    example: '5f9d7a3b9d3f2c1a4c6b8e1d',
    description: 'The unique identifier of the document',
  })
  id: string;

  @ApiProperty({
    example: 'Patient Consent Form',
    description: 'Name of the document',
  })
  name: string;

  @ApiProperty({
    example: 'Content of patient consent form...',
    description: 'Content of the document',
  })
  content: string;

  @ApiProperty({ example: 'Consent', description: 'Type of the document' })
  type: string;
}
