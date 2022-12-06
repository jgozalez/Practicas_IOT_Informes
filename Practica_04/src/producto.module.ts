import { Module } from '@nestjs/common';
import { LicuadoraController } from './licuadoras/adapters/controllers/licuadora.controller';
import { LicuadoraService } from './licuadoras/domain/services/licuadora.service';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';

@Module({
  imports: [AuthModule, UsersModule],
  controllers: [LicuadoraController],
  providers: [LicuadoraService],
})
export class AppModule {}