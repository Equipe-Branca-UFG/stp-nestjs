import { ApiProperty } from '@nestjs/swagger';

export class CreateDocumentDto {
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
