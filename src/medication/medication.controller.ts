import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Put,
  Delete,
} from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';
import { MedicationService } from './medication.service';
import { CreateMedicationDto } from './dto/create-medication.dto';
import { UpdateMedicationDto } from './dto/update-medication.dto';
import { Medication } from './entities/medication.entity';

@ApiTags('medications')
@Controller('medications')
export class MedicationController {
  constructor(private readonly medicationService: MedicationService) {}

  @Post()
  @ApiOperation({ summary: 'Create a new medication' })
  @ApiResponse({
    status: 201,
    description: 'The medication has been successfully created.',
    type: Medication,
  })
  async create(
    @Body() createMedicationDto: CreateMedicationDto,
  ): Promise<Medication> {
    return this.medicationService.create(createMedicationDto);
  }

  @Get()
  @ApiOperation({ summary: 'Get all medications' })
  @ApiResponse({
    status: 200,
    description: 'Return all medications.',
    type: [Medication],
  })
  async findAll(): Promise<Medication[]> {
    return this.medicationService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get a medication by id' })
  @ApiResponse({
    status: 200,
    description: 'Return the medication.',
    type: Medication,
  })
  async findOne(@Param('id') id: string): Promise<Medication | null> {
    return this.medicationService.findOne(id);
  }

  @Put(':id')
  @ApiOperation({ summary: 'Update a medication' })
  @ApiResponse({
    status: 200,
    description: 'The medication has been successfully updated.',
    type: Medication,
  })
  async update(
    @Param('id') id: string,
    @Body() updateMedicationDto: UpdateMedicationDto,
  ): Promise<Medication> {
    return this.medicationService.update(id, updateMedicationDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Delete a medication' })
  @ApiResponse({
    status: 200,
    description: 'The medication has been successfully deleted.',
    type: Medication,
  })
  async remove(@Param('id') id: string): Promise<Medication> {
    return this.medicationService.remove(id);
  }
}
