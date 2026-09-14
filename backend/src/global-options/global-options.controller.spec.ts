import { Test, TestingModule } from '@nestjs/testing';
import { GlobalOptionsController } from './global-options.controller';

describe('GlobalOptionsController', () => {
  let controller: GlobalOptionsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [GlobalOptionsController],
    }).compile();

    controller = module.get<GlobalOptionsController>(GlobalOptionsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
