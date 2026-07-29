import { Test, TestingModule } from '@nestjs/testing';
import { ConcernsController } from './concerns.controller';
import { ConcernsService } from './concerns.service';

describe('ConcernsController', () => {
  let controller: ConcernsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ConcernsController],
      providers: [ConcernsService],
    }).compile();

    controller = module.get<ConcernsController>(ConcernsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
