import { Module } from '@nestjs/common';
import { LicuadoraController } from './licuadoras/adapters/controllers/licuadora.controller';
import { LicuadoraService } from './licuadoras/domain/services/licuadora.service';

@Module({
  imports: [],
  controllers: [LicuadoraController],
  providers: [LicuadoraService],
})
export class AppModule {}