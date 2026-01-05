import { User } from '../entities/user.entity';

export interface IAuthRepository {
  createUser(data: User): Promise<any>;
  findByEmail(email: string): Promise<any>;
}
