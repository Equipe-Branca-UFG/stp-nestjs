import { ApiProperty } from '@nestjs/swagger';

export class TransferRequestListDto {
  @ApiProperty({ example: '66f088dad4f5f414160c6051' })
  id: string;

  @ApiProperty({ example: 'John Doe' })
  patientName: string;

  @ApiProperty({ example: 'Central Hospital' })
  fromHospitalName: string;

  @ApiProperty({ example: 'City General Hospital' })
  toHospitalName: string;

  @ApiProperty({ example: 'Completed' })
  status: string;

  @ApiProperty({ example: 'Ambulance' })
  transportType: string;

  @ApiProperty({ example: 'Non-urgent' })
  classification: string;

  @ApiProperty({ example: '2024-09-22T18:15:06.847Z' })
  departureTime: Date;

  @ApiProperty({ example: '2024-09-22T20:15:06.847Z' })
  estimatedArrivalTime: Date;

  @ApiProperty({ example: 'Dr. Jane Smith' })
  requestingDoctorName: string;

  @ApiProperty({ example: 'Transfer back to local hospital' })
  reason: string;
}
