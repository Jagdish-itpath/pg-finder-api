import { CreatePgDto } from "src/modules/pg/dto/create-pg.dto";


export interface IPgRepository {
  create(dto: CreatePgDto, ownerId: string): Promise<any>;
  findAll(): Promise<any[]>;
  findOne(id: string): Promise<any | null>;
}