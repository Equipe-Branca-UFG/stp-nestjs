import { Controller, Get, Post, Body, Param, Put } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';
import { ProcedureService } from './procedure.service';
import { CreateProcedureDto } from './dto/create-procedure.dto';
import { UpdateProcedureDto } from './dto/update-procedure.dto';
import { Procedure } from './entities/procedure.entity';

@ApiTags('procedures')
@Controller('procedures')
export class ProcedureController {
  constructor(private readonly procedureService: ProcedureService) {}

  @Post()
  @ApiOperation({ summary: 'Create a new procedure' })
  @ApiResponse({
    status: 201,
    description: 'The procedure has been successfully created.',
    type: Procedure,
  })
  async create(
    @Body() createProcedureDto: CreateProcedureDto,
  ): Promise<Procedure> {
    return this.procedureService.create(createProcedureDto);
  }

  @Get()
  @ApiOperation({ summary: 'Get all procedures' })
  @ApiResponse({
    status: 200,
    description: 'Return all procedures.',
    type: [Procedure],
  })
  async findAll(): Promise<Procedure[]> {
    return this.procedureService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get a procedure by id' })
  @ApiResponse({
    status: 200,
    description: 'Return the procedure.',
    type: Procedure,
  })
  async findOne(@Param('id') id: string): Promise<Procedure | null> {
    return this.procedureService.findOne(id);
  }

  @Put(':id')
  @ApiOperation({ summary: 'Update a procedure' })
  @ApiResponse({
    status: 200,
    description: 'The procedure has been successfully updated.',
    type: Procedure,
  })
  async update(
    @Param('id') id: string,
    @Body() updateProcedureDto: UpdateProcedureDto,
  ): Promise<Procedure> {
    return this.procedureService.update(id, updateProcedureDto);
  }
}
