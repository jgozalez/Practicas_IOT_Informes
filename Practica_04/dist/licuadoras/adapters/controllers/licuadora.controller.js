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
exports.LicuadoraController = void 0;
const common_1 = require("@nestjs/common");
const licuadora_service_1 = require("../../domain/services/licuadora.service");
const jwt_auth_guard_1 = require("../../../auth/jwt-auth.guard");
const licuadora_entity_1 = require("../../domain/entities/licuadora.entity");
const errReturn = (e, message) => {
    return {
        message: message,
        error: e
    };
};
let LicuadoraController = class LicuadoraController {
    constructor(licService) {
        this.licService = licService;
    }
    getHello() {
        try {
            return this.licService.listar();
        }
        catch (e) {
            return errReturn(e, "Error al listar jugadores");
        }
    }
    crear(datos) {
        try {
            return this.licService.crear(datos);
        }
        catch (e) {
            return errReturn(e, "Error al crear jugador");
        }
    }
    modificar(datos, id) {
        try {
            return this.licService.modificar(id, datos);
        }
        catch (e) {
            return errReturn(e, "Error al modificar jugador");
        }
    }
    eliminar(id) {
        try {
            return this.licService.eliminar(id);
        }
        catch (e) {
            return errReturn(e, "Error al eliminar jugador");
        }
    }
    cambiarEdad(id, precio) {
        try {
            return this.licService.cambiarPrecio(id, precio);
        }
        catch (e) {
            return errReturn(e, "Error al modificar edad del jugador");
        }
    }
};
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], LicuadoraController.prototype, "getHello", null);
__decorate([
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [licuadora_entity_1.LicuadoraEntity]),
    __metadata("design:returntype", void 0)
], LicuadoraController.prototype, "crear", null);
__decorate([
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, common_1.Put)(":id"),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [licuadora_entity_1.LicuadoraEntity, Number]),
    __metadata("design:returntype", void 0)
], LicuadoraController.prototype, "modificar", null);
__decorate([
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, common_1.Delete)(":id"),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], LicuadoraController.prototype, "eliminar", null);
__decorate([
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, common_1.Patch)(":id/precio/:precio"),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Param)('precio')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Number]),
    __metadata("design:returntype", void 0)
], LicuadoraController.prototype, "cambiarEdad", null);
LicuadoraController = __decorate([
    (0, common_1.Controller)(),
    __param(0, (0, common_1.Inject)('LicuadoraService')),
    __metadata("design:paramtypes", [licuadora_service_1.LicuadoraService])
], LicuadoraController);
exports.LicuadoraController = LicuadoraController;
//# sourceMappingURL=licuadora.controller.js.map