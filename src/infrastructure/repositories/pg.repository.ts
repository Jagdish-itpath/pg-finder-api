import { Injectable } from "@nestjs/common";
import { PrismaService } from "src/core/database/prisma/prisma.service";
import { IPgRepository } from "src/domain/repository-interfaces/pg.repository.interface";
import { CreatePgDto } from "src/modules/pg/dto/create-pg.dto";


@Injectable()
export class PgRepository implements IPgRepository {
    constructor(private prisma: PrismaService) {}
    create(dto: CreatePgDto, ownerId: string): Promise<any> {  
        return this.prisma.pg.create({
            data: {...dto},
        });
    }
    findAll(): Promise<any[]> {
        return this.prisma.pg.findMany();
    }
    findOne(id: string): Promise<any | null> {
        return this.prisma.pg.findUnique({ where: { id } });
    }
}