// src/transfer-request/entities/transfer-request.entity.ts

import { ApiProperty } from '@nestjs/swagger';

export class TransferRequest {
  @ApiProperty({
    example: '5f9d7a3b9d3f2c1a4c6b8e1d',
    description: 'The unique identifier of the transfer request',
  })
  id: string;

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
  })
  departureTime?: Date;

  @ApiProperty({
    example: '2023-06-15T11:30:00Z',
    description: 'Estimated arrival time of the transfer',
  })
  estimatedArrivalTime?: Date;
}
