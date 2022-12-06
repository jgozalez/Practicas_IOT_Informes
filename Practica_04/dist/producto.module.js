"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const licuadora_controller_1 = require("./licuadoras/adapters/controllers/licuadora.controller");
const licuadora_service_1 = require("./licuadoras/domain/services/licuadora.service");
const auth_module_1 = require("./auth/auth.module");
const users_module_1 = require("./users/users.module");
const typeorm_1 = require("@nestjs/typeorm");
const licuadora_entity_1 = require("./licuadoras/domain/entities/licuadora.entity");
let AppModule = class AppModule {
};
AppModule = __decorate([
    (0, common_1.Module)({
        imports: [auth_module_1.AuthModule,
            users_module_1.UsersModule,
            typeorm_1.TypeOrmModule.forRoot({
                type: 'mongodb',
                url: 'mongodb+srv://jgozalez:Lomica.8294@cluster0.0zhqlbg.mongodb.net/?retryWrites=true&w=majority',
                useNewUrlParser: true,
                useUnifiedTopology: true,
                synchronize: true,
                logging: true,
                autoLoadEntities: true,
            }),
            typeorm_1.TypeOrmModule.forFeature([licuadora_entity_1.LicuadoraEntity])
        ],
        controllers: [licuadora_controller_1.LicuadoraController],
        providers: [
            {
                provide: 'LicuadoraService',
                useClass: licuadora_service_1.LicuadoraService,
            },
        ],
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=producto.module.js.map