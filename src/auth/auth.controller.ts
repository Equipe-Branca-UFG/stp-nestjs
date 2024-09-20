import {
  Controller,
  Post,
  Body,
  UnauthorizedException,
  Logger,
} from '@nestjs/common';
import { AuthService } from './auth.service';
import { LoginDto } from './login.dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Login')
@Controller('auth')
export class AuthController {
  private readonly logger = new Logger(AuthController.name); // Controller-specific logger

  constructor(private authService: AuthService) {}

  @Post('login')
  async login(@Body() loginDto: LoginDto) {
    this.logger.log(`Login attempt for user: ${loginDto.email}`);
    const user = await this.authService.validateUser(
      loginDto.email,
      loginDto.password,
    );
    if (!user) {
      this.logger.warn(`Unauthorized login attempt: ${loginDto.email}`);
      throw new UnauthorizedException('Invalid credentials');
    }

    this.logger.log(`User ${loginDto.email} logged in successfully`);
    return this.authService.login(user);
  }
}
