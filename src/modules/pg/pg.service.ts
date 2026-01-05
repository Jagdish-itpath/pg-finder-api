import { Inject, Injectable } from '@nestjs/common';
import { CreatePgDto } from './dto/create-pg.dto';
import type { IPgRepository } from 'src/domain/repository-interfaces/pg.repository.interface';
import { Pg } from 'src/domain/entities/pg.entity';

@Injectable()
export class PgService {
     constructor(
        @Inject('IPgRepository') private readonly pgRepository: IPgRepository,
    ) {}

  create(dto: CreatePgDto, ownerId: string) {
    var pg = new Pg("", dto.name, dto.city, dto.area, dto.rent, dto.gender);
    return this.pgRepository.create(dto, ownerId);
  }

  findAll() {
    return this.pgRepository.findAll();
  } 

  findOne(id: string) {
    return this.pgRepository.findOne(id);
  }
}
