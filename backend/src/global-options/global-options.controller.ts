import { Body, Controller, Get, Post, Param, Patch, Delete } from "@nestjs/common";
import { GlobalOptionsService } from "./global-options.service";
import { CreateGlobalOptionDto } from "./dto/create-global-option.dto";
import { UpdateGlobalOptionsDto } from "./dto/update-global-option.dto";


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
  
  @Patch(":key")
  update(@Param("key") key: string,@Body() updateGlobalOptionDto: UpdateGlobalOptionsDto){
    return this.globalOptionsService.update(
      key,
      updateGlobalOptionDto,
    );
  }
  @Delete(":key")
  remove(@Param("key") key: string) {
    return this.globalOptionsService.remove(key);
  }
}