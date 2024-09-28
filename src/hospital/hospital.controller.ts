// src/hospital/hospital.controller.ts

import {
  Controller,
  Get,
  Post,
  Put,
  Body,
  Param,
  Delete,
} from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse, ApiParam } from '@nestjs/swagger';
import { HospitalService } from './hospital.service';
import { Hospital } from './entities/hospital.entity';

@ApiTags('hospitals')
@Controller('hospitals')
export class HospitalController {
  constructor(private readonly hospitalService: HospitalService) {}

  @Get(':id')
  @ApiOperation({ summary: 'Get a hospital by id' })
  @ApiResponse({
    status: 200,
    description: 'Return the hospital.',
    type: Hospital,
  })
  @ApiResponse({ status: 404, description: 'Hospital not found.' })
  @ApiParam({ name: 'id', description: 'Hospital ID' })
  async getHospital(@Param('id') id: string): Promise<Hospital | null> {
    return this.hospitalService.getHospital(id);
  }

  @Get()
  @ApiOperation({ summary: 'Get all hospitals' })
  @ApiResponse({
    status: 200,
    description: 'Return all hospitals.',
    type: [Hospital],
  })
  async getAllHospitals(): Promise<Hospital[]> {
    return this.hospitalService.getAllHospitals();
  }

  @Post()
  @ApiOperation({ summary: 'Create a new hospital' })
  @ApiResponse({
    status: 201,
    description: 'The hospital has been successfully created.',
    type: Hospital,
  })
  async createHospital(@Body() createHospitalDto: Hospital): Promise<Hospital> {
    return this.hospitalService.createHospital(createHospitalDto);
  }

  @Put(':id')
  @ApiOperation({ summary: 'Update a hospital' })
  @ApiResponse({
    status: 200,
    description: 'The hospital has been successfully updated.',
    type: Hospital,
  })
  @ApiParam({ name: 'id', description: 'Hospital ID' })
  async updateHospital(
    @Param('id') id: string,
    @Body() updateHospitalDto: Hospital,
  ): Promise<Hospital> {
    return this.hospitalService.updateHospital(id, updateHospitalDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Delete a hospital' })
  @ApiResponse({
    status: 200,
    description: 'The hospital has been successfully deleted.',
    type: Hospital,
  })
  async remove(@Param('id') id: string): Promise<Hospital> {
    return this.hospitalService.remove(id);
  }
}
