// src/transfer-request/transfer-request.controller.ts

import { Controller, Get, Post, Put, Body, Param } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse, ApiParam } from '@nestjs/swagger';
import { TransferRequestService } from './transfer-request.service';
import { TransferRequest } from './entities/transfer-request.entity';
import { CreateTransferRequestDto } from './dto/create-transfer-request.dto';

@ApiTags('transfer-requests')
@Controller('transfer-requests')
export class TransferRequestController {
  constructor(
    private readonly transferRequestService: TransferRequestService,
  ) {}

  @Get(':id')
  @ApiOperation({ summary: 'Get a transfer request by id' })
  @ApiResponse({
    status: 200,
    description: 'Return the transfer request.',
    type: TransferRequest,
  })
  @ApiResponse({ status: 404, description: 'Transfer request not found.' })
  @ApiParam({ name: 'id', description: 'Transfer Request ID' })
  async getTransferRequest(
    @Param('id') id: string,
  ): Promise<TransferRequest | null> {
    return this.transferRequestService.getTransferRequest(id);
  }

  @Post()
  @ApiOperation({ summary: 'Create a new transfer request' })
  @ApiResponse({
    status: 201,
    description: 'The transfer request has been successfully created.',
    type: TransferRequest,
  })
  async createTransferRequest(
    @Body() createTransferRequestDto: CreateTransferRequestDto,
  ): Promise<TransferRequest> {
    return this.transferRequestService.createTransferRequest(
      createTransferRequestDto,
    );
  }

  @Put(':id')
  @ApiOperation({ summary: 'Update a transfer request' })
  @ApiResponse({
    status: 200,
    description: 'The transfer request has been successfully updated.',
    type: TransferRequest,
  })
  @ApiParam({ name: 'id', description: 'Transfer Request ID' })
  async updateTransferRequest(
    @Param('id') id: string,
    @Body() updateTransferRequestDto: CreateTransferRequestDto,
  ): Promise<TransferRequest> {
    return this.transferRequestService.updateTransferRequest(
      id,
      updateTransferRequestDto,
    );
  }

  @Put(':id/transport-type')
  @ApiOperation({ summary: 'Set transport type for a transfer request' })
  @ApiResponse({
    status: 200,
    description: 'The transport type has been successfully set.',
    type: TransferRequest,
  })
  @ApiParam({ name: 'id', description: 'Transfer Request ID' })
  async setTransportType(
    @Param('id') id: string,
    @Body('transportType') transportType: string,
  ): Promise<TransferRequest> {
    return this.transferRequestService.setTransportType(id, transportType);
  }
}
