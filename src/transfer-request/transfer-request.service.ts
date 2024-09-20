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
        Medication: true,
        Procedure: true,
        Equipment: true,
        Document: true,
        requestingDoctor: true,
      },
    });
  }

  async createTransferRequest(
    data: CreateTransferRequestDto,
  ): Promise<TransferRequest> {
    const {
      patientId,
      fromHospitalId,
      toHospitalId,
      requestingDoctorId,
      medicationIds,
      procedureIds,
      equipmentIds,
      documentIds,
      ...otherData
    } = data;

    return this.prisma.transferRequest.create({
      data: {
        ...otherData,
        patient: { connect: { id: patientId } },
        fromHospital: { connect: { id: fromHospitalId } },
        toHospital: { connect: { id: toHospitalId } },
        requestingDoctor: { connect: { id: requestingDoctorId } },
        Medication: {
          connect: medicationIds?.map((id) => ({ id })) || [],
        },
        Procedure: {
          connect: procedureIds?.map((id) => ({ id })) || [],
        },
        Equipment: {
          connect: equipmentIds?.map((id) => ({ id })) || [],
        },
        Document: {
          connect: documentIds?.map((id) => ({ id })) || [],
        },
      },
      include: {
        patient: true,
        fromHospital: true,
        toHospital: true,
        requestingDoctor: true,
        Medication: true,
        Procedure: true,
        Equipment: true,
        Document: true,
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
        Medication: true,
        Procedure: true,
        Equipment: true,
        Document: true,
        requestingDoctor: true,
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
        Medication: {
          create: medicationData,
        },
      },
      include: { Medication: true },
    });
  }
}
