import { Injectable, Logger } from '@nestjs/common';
import { UsersService } from '../users/users.service';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
  private readonly logger = new Logger(AuthService.name);

  constructor(
    private usersService: UsersService,
    private jwtService: JwtService,
  ) {}

  async validateUser(email: string, pass: string): Promise<any> {
    this.logger.debug(`Attempting to validate user: ${email}`);
    const user = await this.usersService.user({ email });
    if (!user) {
      this.logger.debug(`User not found: ${email}`);
      return null;
    }
    this.logger.debug('User found, comparing passwords');
    const isMatch = await bcrypt.compare(pass, user.password);
    this.logger.debug(`Password match: ${isMatch}`);
    if (isMatch) {
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const { password, ...result } = user;
      return result;
    }
    return null;
  }

  async login(user: any) {
    const payload = { email: user.email, sub: user.id, role: user.role };
    return {
      access_token: this.jwtService.sign(payload),
    };
  }
}
