import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { TransferRequest, Prisma } from '@prisma/client';
import { CreateTransferRequestDto } from './dto/create-transfer-request.dto';

@Injectable()
export class TransferRequestService {
  constructor(private prisma: PrismaService) {}

  async getTransferRequest(id: string): Promise<TransferRequest | null> {
    return this.prisma.transferRequest.findUnique({
      where: { id },
      include: {
        patient: true,
        fromHospital: true,
        toHospital: true,
        medications: true,
        procedures: true,
        equipments: true,
        documents: true,
      },
    });
  }

  async createTransferRequest(
    data: CreateTransferRequestDto,
  ): Promise<TransferRequest> {
    return this.prisma.transferRequest.create({
      data: {
        patient: { connect: { id: data.patientId } },
        fromHospital: { connect: { id: data.fromHospitalId } },
        toHospital: { connect: { id: data.toHospitalId } },
        status: data.status,
        transportType: data.transportType,
        classification: data.classification,
        departureTime: data.departureTime,
        estimatedArrivalTime: data.estimatedArrivalTime,
      },
      include: {
        patient: true,
        fromHospital: true,
        toHospital: true,
      },
    });
  }

  async updateTransferRequest(
    id: string,
    data: Prisma.TransferRequestUpdateInput,
  ): Promise<TransferRequest> {
    return this.prisma.transferRequest.update({
      where: { id },
      data,
      include: {
        patient: true,
        fromHospital: true,
        toHospital: true,
        medications: true,
        procedures: true,
        equipments: true,
        documents: true,
      },
    });
  }

  async setTransportType(
    id: string,
    transportType: string,
  ): Promise<TransferRequest> {
    return this.prisma.transferRequest.update({
      where: { id },
      data: { transportType },
    });
  }

  async addMedication(
    id: string,
    medicationData: Prisma.MedicationCreateInput,
  ): Promise<TransferRequest> {
    return this.prisma.transferRequest.update({
      where: { id },
      data: {
        medications: {
          create: medicationData,
        },
      },
      include: { medications: true },
    });
  }
}
