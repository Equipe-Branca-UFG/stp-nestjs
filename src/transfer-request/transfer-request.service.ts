import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { Prisma } from '@prisma/client';
import { CreateTransferRequestDto } from './dto/create-transfer-request.dto';
import { TransferRequestListDto } from './dto/transfer-request-list.dto';
import { TransferRequest } from './entities/transfer-request.entity';
import { HospitalService } from 'src/hospital/hospital.service';
import { UsersService } from 'src/users/users.service';
import { PatientService } from 'src/patient/patient.service';

@Injectable()
export class TransferRequestService {
  constructor(
    private prisma: PrismaService,
    private patientService: PatientService,
    private hospitalService: HospitalService,
    private userService: UsersService,
  ) {}

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

  async listTransferRequests(): Promise<TransferRequestListDto[]> {
    const transferRequests = await this.prisma.transferRequest.findMany({
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

    const detailedTransferRequests = await Promise.all(
      transferRequests.map(async (request) => {
        const patient = await this.patientService.getPatient(request.patientId);
        const fromHospital = await this.hospitalService.getHospital(
          request.fromHospitalId,
        );
        const toHospital = await this.hospitalService.getHospital(
          request.toHospitalId,
        );
        const requestingDoctor = await this.userService.findUserById(
          request.requestingDoctorId,
        );

        return {
          id: request.id,
          patientName: patient ? `${patient.name}` : 'Unknown',
          fromHospitalName: fromHospital ? fromHospital.name : 'Unknown',
          toHospitalName: toHospital ? toHospital.name : 'Unknown',
          status: request.status,
          transportType: request.transportType,
          classification: request.classification,
          departureTime: request.departureTime,
          estimatedArrivalTime: request.estimatedArrivalTime,
          requestingDoctorName: requestingDoctor
            ? `Dr. ${requestingDoctor.name}`
            : 'Unknown',
          reason: request.reason,
        };
      }),
    );

    return detailedTransferRequests;
  }
}
