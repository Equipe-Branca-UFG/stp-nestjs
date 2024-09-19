// src/patient/patient.controller.ts

import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Body,
  Param,
} from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse, ApiParam } from '@nestjs/swagger';
import { PatientService } from './patient.service';
import { Patient } from './entities/patient.entity';

@ApiTags('patients')
@Controller('patients')
export class PatientController {
  constructor(private readonly patientService: PatientService) {}

  @Post()
  @ApiOperation({ summary: 'Create a new patient' })
  @ApiResponse({
    status: 201,
    description: 'The patient has been successfully created.',
    type: Patient,
  })
  async createPatient(@Body() createPatientDto: Patient): Promise<Patient> {
    return this.patientService.createPatient(createPatientDto);
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get a patient by id' })
  @ApiResponse({
    status: 200,
    description: 'Return the patient.',
    type: Patient,
  })
  @ApiResponse({ status: 404, description: 'Patient not found.' })
  @ApiParam({ name: 'id', description: 'Patient ID' })
  async getPatient(@Param('id') id: string): Promise<Patient | null> {
    return this.patientService.getPatient(id);
  }

  @Put(':id')
  @ApiOperation({ summary: 'Update a patient' })
  @ApiResponse({
    status: 200,
    description: 'The patient has been successfully updated.',
    type: Patient,
  })
  @ApiParam({ name: 'id', description: 'Patient ID' })
  async updatePatient(
    @Param('id') id: string,
    @Body() updatePatientDto: Patient,
  ): Promise<Patient> {
    return this.patientService.updatePatient(id, updatePatientDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Delete a patient' })
  @ApiResponse({
    status: 200,
    description: 'The patient has been successfully deleted.',
    type: Patient,
  })
  @ApiParam({ name: 'id', description: 'Patient ID' })
  async deletePatient(@Param('id') id: string): Promise<Patient> {
    return this.patientService.deletePatient(id);
  }
}
