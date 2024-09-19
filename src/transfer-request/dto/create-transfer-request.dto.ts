// src/transfer-request/dto/create-transfer-request.dto.ts

import { ApiProperty } from '@nestjs/swagger';

export class CreateTransferRequestDto {
  @ApiProperty({ description: 'ID of the patient being transferred' })
  patientId: string;

  @ApiProperty({ description: 'ID of the hospital transferring the patient' })
  fromHospitalId: string;

  @ApiProperty({ description: 'ID of the hospital receiving the patient' })
  toHospitalId: string;

  @ApiProperty({
    example: 'Pending',
    description: 'Current status of the transfer request',
  })
  status: string;

  @ApiProperty({
    example: 'Ambulance',
    description: 'Type of transport for the transfer',
  })
  transportType: string;

  @ApiProperty({
    example: 'Primary',
    description: 'Classification of the transfer',
  })
  classification: string;

  @ApiProperty({
    example: '2023-06-15T10:00:00Z',
    description: 'Departure time of the transfer',
    required: false,
  })
  departureTime?: Date;

  @ApiProperty({
    example: '2023-06-15T11:30:00Z',
    description: 'Estimated arrival time of the transfer',
    required: false,
  })
  estimatedArrivalTime?: Date;
}
