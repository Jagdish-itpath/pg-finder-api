import { Body, Controller, Get, Param, Post, Req, UseGuards } from '@nestjs/common';
import { PgService } from './pg.service';
import { CreatePgDto } from './dto/create-pg.dto';

@Controller('pg')
export class PgController {
  constructor(private readonly pgService: PgService) {}

  // @UseGuards(JwtAuthGuard)
  @Post()
  create(@Body() dto: CreatePgDto, @Req() req) {
    return this.pgService.create(dto, req.user.userId);
  }

  @Get()
  findAll() {
    return this.pgService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.pgService.findOne(id);
  }
}
