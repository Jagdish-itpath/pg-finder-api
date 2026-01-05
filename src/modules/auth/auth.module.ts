import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { AuthMiddleware } from 'src/common/middleware/auth.middleware';
import { AuthRepository } from 'src/infrastructure/repositories/auth.repository';

@Module({
  controllers: [AuthController],
  providers: [AuthService,
    {
      provide: 'IAuthRepository',     // token
      useClass: AuthRepository,       // implementation
    }
  ],
  exports: [AuthService]
})
export class AuthModule {}
