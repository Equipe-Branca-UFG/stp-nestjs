import { ApiProperty } from '@nestjs/swagger';

export class TransferRequestDto {
  @ApiProperty()
  id: string;

  @ApiProperty()
  patientId: string;

  @ApiProperty()
  fromHospitalId: string;

  @ApiProperty()
  toHospitalId: string;

  @ApiProperty()
  status: string;

  @ApiProperty()
  transportType: string;

  @ApiProperty()
  classification: string;

  @ApiProperty({ required: false })
  departureTime?: Date;

  @ApiProperty({ required: false })
  estimatedArrivalTime?: Date;
}
