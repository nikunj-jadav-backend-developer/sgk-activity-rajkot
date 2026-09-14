import { Body, Controller, Get, Post } from "@nestjs/common";
import { GlobalOptionsService } from "./global-options.service";
import { CreateGlobalOptionDto } from "./dto/create-global-option.dto";
@Controller("global-options")
export class GlobalOptionsController {
  constructor(
    private readonly globalOptionsService: GlobalOptionsService,
  ) {}

  @Get()
  findAll() {
    return this.globalOptionsService.findAll();
  }

  @Post()
  create(@Body() createGlobalOptionDto : CreateGlobalOptionDto){
    return this.globalOptionsService.create(
      createGlobalOptionDto
    )
  }
}