import { Module } from '@nestjs/common';
import { TransferRequestController } from './transfer-request.controller';
import { TransferRequestService } from './transfer-request.service';
import { PrismaService } from 'src/prisma/prisma.service';

@Module({
  controllers: [TransferRequestController],
  providers: [TransferRequestService, PrismaService],
})
export class TransferRequestModule {}
