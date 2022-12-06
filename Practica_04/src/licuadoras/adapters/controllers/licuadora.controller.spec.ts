import { Test, TestingModule } from '@nestjs/testing';
import { LicuadoraController } from './licuadora.controller';
import { LicuadoraService } from '../../domain/services/licuadora.service';


describe('AppController', () => {
  let appController: LicuadoraController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [LicuadoraController],
      providers: [LicuadoraService],
    }).compile();

    appController = app.get<LicuadoraController>(LicuadoraController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(appController.getHello()).toBe('Hello World!');
    });
  });
});