"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.LicuadoraService = void 0;
const common_1 = require("@nestjs/common");
const licuadora_entity_1 = require("../entities/licuadora.entity");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
let LicuadoraService = class LicuadoraService {
    constructor(repository) {
        this.repository = repository;
    }
    async listar() {
        return await this.repository.find();
    }
    async crear(lic) {
        const newLicuadora = await this.repository.insert(lic);
        return newLicuadora;
    }
    async modificar(id, lic) {
        const updatedLicuadora = await this.repository.update(id, lic);
        return updatedLicuadora;
    }
    async eliminar(id) {
        const deleteResult = await this.repository.delete(id);
        return deleteResult.affected > 0;
    }
    async cambiarPrecio(id, pre) {
        const updatedLicuadora = await this.repository.update(id, { precio: pre });
        return updatedLicuadora;
    }
};
LicuadoraService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(licuadora_entity_1.LicuadoraEntity)),
    __metadata("design:paramtypes", [typeorm_2.MongoRepository])
], LicuadoraService);
exports.LicuadoraService = LicuadoraService;
//# sourceMappingURL=licuadora.service.js.map