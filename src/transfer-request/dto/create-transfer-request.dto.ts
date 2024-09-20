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

  @ApiProperty({ description: 'ID of the doctor making the transfer request' })
  requestingDoctorId: string;

  @ApiProperty({
    example: 'Patient requires immediate specialized care',
    description: 'Reason for the transfer request',
  })
  reason: string;

  @ApiProperty({
    type: [String],
    description: 'IDs of medications for this transfer',
    required: false,
  })
  medicationIds?: string[];

  @ApiProperty({
    type: [String],
    description: 'IDs of procedures for this transfer',
    required: false,
  })
  procedureIds?: string[];

  @ApiProperty({
    type: [String],
    description: 'IDs of equipment for this transfer',
    required: false,
  })
  equipmentIds?: string[];

  @ApiProperty({
    type: [String],
    description: 'IDs of documents for this transfer',
    required: false,
  })
  documentIds?: string[];
}
