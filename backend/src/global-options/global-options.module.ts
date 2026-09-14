import { Module } from '@nestjs/common';
import { GlobalOptionsController } from './global-options.controller';
import { GlobalOptionsService } from './global-options.service';

@Module({
  controllers: [GlobalOptionsController],
  providers: [GlobalOptionsService]
})
export class GlobalOptionsModule {}
