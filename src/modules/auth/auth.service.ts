import { BadRequestException, Inject, Injectable } from '@nestjs/common';
import { User } from 'src/domain/entities/user.entity';
import type { IAuthRepository } from 'src/domain/repository-interfaces/auth.repository.interface';
import * as bcrypt from 'bcrypt';
import * as jwt from 'jsonwebtoken';

@Injectable()
export class AuthService {

   constructor(
    @Inject('IAuthRepository') private readonly authRepo: IAuthRepository
  ) {}
  
  async register(data: any) {
    const existingUser = await this.authRepo.findByEmail(data.email);

    if (existingUser) {
      throw new BadRequestException('Email already exists');
    }

    const hashedPassword = await bcrypt.hash(data.password, 10);
    var user = new User(data.id, data.email, data.name, hashedPassword, data.role);  
    return this.authRepo.createUser(user);
  }

  async login(email: string, password: string) {
    const user = await this.authRepo.findByEmail(email);

    if (!user) {
      throw new BadRequestException('Invalid email or password');
    }

    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
      throw new BadRequestException('Invalid email or password');
    }

    // JWT Payload
    const payload = {
      id: user.id,
      email: user.email,
      role: user.role,
    };

    const secret = process.env.JWT_SECRET;
    if (!secret) {
      throw new Error('JWT_SECRET is not defined');
    }

    // Generate token
    const token = jwt.sign(payload, secret, {
      expiresIn: '1d', // 1 day
    });

    return {
      message: 'Login successful',
      userId: user.id,
      token,               // <-- added JWT token
      role: user.role,
    };
  }
}
