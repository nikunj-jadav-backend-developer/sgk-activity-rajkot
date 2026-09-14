import { Controller, Get } from "@nestjs/common";
import { GlobalOptionsService } from "./global-options.service";

@Controller("global-options")
export class GlobalOptionsController {
  constructor(
    private readonly globalOptionsService: GlobalOptionsService,
  ) {}

  @Get()
  findAll() {
    return this.globalOptionsService.findAll();
  }
}