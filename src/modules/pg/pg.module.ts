import { Module } from '@nestjs/common';
import { PgService } from './pg.service';
import { PgController } from './pg.controller';
import { PgRepository } from 'src/infrastructure/repositories/pg.repository';

@Module({
  controllers: [PgController],
  providers: [
    PgService,
    {
      provide: 'IPgRepository',     // token
      useClass: PgRepository,       // implementation
    }
  ],
})
export class PgModule {}
