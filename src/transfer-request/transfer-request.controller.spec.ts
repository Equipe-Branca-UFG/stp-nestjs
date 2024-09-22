import { Test, TestingModule } from '@nestjs/testing';
import { TransferRequestController } from './transfer-request.controller';

describe('TransferRequestController', () => {
  let controller: TransferRequestController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TransferRequestController],
    }).compile();

    controller = module.get<TransferRequestController>(
      TransferRequestController,
    );
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
