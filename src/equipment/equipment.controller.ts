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
import { EquipmentService } from './equipment.service';
import { CreateEquipmentDto } from './dto/create-equipment.dto';
import { UpdateEquipmentDto } from './dto/update-equipment.dto';
import { Equipment } from './entities/equipment.entity';

@ApiTags('equipment')
@Controller('equipment')
export class EquipmentController {
  constructor(private readonly equipmentService: EquipmentService) {}

  @Post()
  @ApiOperation({ summary: 'Create a new equipment' })
  @ApiResponse({
    status: 201,
    description: 'The equipment has been successfully created.',
    type: Equipment,
  })
  async create(
    @Body() createEquipmentDto: CreateEquipmentDto,
  ): Promise<Equipment> {
    return this.equipmentService.create(createEquipmentDto);
  }

  @Get()
  @ApiOperation({ summary: 'Get all equipment' })
  @ApiResponse({
    status: 200,
    description: 'Return all equipment.',
    type: [Equipment],
  })
  async findAll(): Promise<Equipment[]> {
    return this.equipmentService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get an equipment by id' })
  @ApiResponse({
    status: 200,
    description: 'Return the equipment.',
    type: Equipment,
  })
  async findOne(@Param('id') id: string): Promise<Equipment | null> {
    return this.equipmentService.findOne(id);
  }

  @Put(':id')
  @ApiOperation({ summary: 'Update an equipment' })
  @ApiResponse({
    status: 200,
    description: 'The equipment has been successfully updated.',
    type: Equipment,
  })
  async update(
    @Param('id') id: string,
    @Body() updateEquipmentDto: UpdateEquipmentDto,
  ): Promise<Equipment> {
    return this.equipmentService.update(id, updateEquipmentDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Delete an equipment' })
  @ApiResponse({
    status: 200,
    description: 'The equipment has been successfully deleted.',
    type: Equipment,
  })
  async remove(@Param('id') id: string): Promise<Equipment> {
    return this.equipmentService.remove(id);
  }
}
