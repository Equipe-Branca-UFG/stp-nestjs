import { Injectable, Logger } from '@nestjs/common';
import { UsersService } from '../users/users.service';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
  private readonly logger = new Logger(AuthService.name); // Service-specific logger

  constructor(
    private usersService: UsersService,
    private jwtService: JwtService,
  ) {}

  async validateUser(email: string, pass: string): Promise<any> {
    this.logger.log(`Validating user: ${email}`);
    const user = await this.usersService.user({ email });

    if (user && (await bcrypt.compare(pass, user.password))) {
      this.logger.log(`User ${email} validated successfully`);
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const { password, ...result } = user;
      return result;
    } else {
      this.logger.warn(`Validation failed for user: ${email}`);
    }

    return null;
  }

  async login(user: any) {
    this.logger.log(`Logging in user: ${user.email}`);
    const payload = { email: user.email, sub: user.id, role: user.role };
    const accessToken = this.jwtService.sign(payload);
    this.logger.log(`Generated JWT for user: ${user.email}`);
    return {
      access_token: accessToken,
    };
  }
}
