import { Test, TestingModule } from '@nestjs/testing';
import { GlobalOptionsService } from './global-options.service';

describe('GlobalOptionsService', () => {
  let service: GlobalOptionsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [GlobalOptionsService],
    }).compile();

    service = module.get<GlobalOptionsService>(GlobalOptionsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
