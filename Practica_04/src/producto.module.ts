import { Module } from '@nestjs/common';
import { LicuadoraController } from './licuadoras/adapters/controllers/licuadora.controller';
import { LicuadoraService } from './licuadoras/domain/services/licuadora.service';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { LicuadoraEntity } from './licuadoras/domain/entities/licuadora.entity';

@Module({
  imports: [AuthModule, 
    UsersModule,
    TypeOrmModule.forRoot({
      type: 'mongodb',
      url: 'mongodb+srv://jgozalez:Lomica.8294@cluster0.0zhqlbg.mongodb.net/?retryWrites=true&w=majority',
      useNewUrlParser: true,
      useUnifiedTopology: true,
      synchronize: true, // Solo para desarrollo
      logging: true,
      autoLoadEntities: true,
    }),
    TypeOrmModule.forFeature([LicuadoraEntity])
    ],
  controllers: [LicuadoraController],
  providers: [
    {
    provide: 'LicuadoraService',
    useClass:LicuadoraService,
  }, 
  ],
})

export class AppModule {}