import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { UsersModule } from '../users/users.module';
import { PassportModule } from '@nestjs/passport';
import { LocalStrategy } from './local.strategy';
import { JwtModule } from '@nestjs/jwt';
import { AuthController } from './auth.controller';
import { JwtAuthGuard } from './jwt-auth.guard';
import { JwtStrategy } from './jwt.strategy';
import { jwtSecret } from './constants';

@Module({
  controllers: [AuthController],
   imports: [UsersModule, 
    PassportModule,
    JwtModule.register({
      secret: "este es el secreto para generar JWT",
      signOptions: { expiresIn: '60m' },
   }),
  ],
   providers: [AuthService, 
    LocalStrategy, 
    JwtStrategy, 
    JwtAuthGuard
  ],
  exports: [AuthService],
})
export class AuthModule {}