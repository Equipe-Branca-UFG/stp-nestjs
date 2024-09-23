import { Module } from '@nestjs/common';
import { EquipmentController } from './equipment.controller';
import { EquipmentService } from './equipment.service';
import { PrismaService } from 'src/prisma/prisma.service';

@Module({
  controllers: [EquipmentController],
  providers: [EquipmentService, PrismaService],
  exports: [EquipmentService],
})
export class EquipamentModule {}
