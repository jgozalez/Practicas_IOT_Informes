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
exports.AppController = void 0;
const common_1 = require("@nestjs/common");
const app_service_1 = require("./app.service");
let AppController = class AppController {
    constructor(appService) {
        this.appService = appService;
        this.productos = [{
                nombre: "Licuadora",
                descripcion: "Doble revolucion",
                precio: 80
            }];
    }
    getHello() {
        return this.productos;
    }
    crear(datos) {
        this.productos.push(datos);
        return datos;
    }
    modificar(datos, id) {
        try {
            this.productos[id] = datos;
            return this.productos[id];
        }
        catch (_a) {
            return `No fue posible modificar el producto en la posición ${id}`;
        }
    }
    eliminar(id) {
        if (this.productos = this.productos.filter((val, index) => index != id))
            try {
                return true;
            }
            catch (_a) {
                return false;
            }
        else
            return `No fue posible modificar el producto en la posición ${id}`;
    }
    cambiarPrecio(id, precio) {
        try {
            this.productos[id].precio = precio;
            return this.productos[id];
        }
        catch (_a) {
            return `No fue posible modificar el producto en la posición ${id}`;
        }
    }
};
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Array)
], AppController.prototype, "getHello", null);
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Object)
], AppController.prototype, "crear", null);
__decorate([
    (0, common_1.Put)(":id"),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Number]),
    __metadata("design:returntype", Object)
], AppController.prototype, "modificar", null);
__decorate([
    (0, common_1.Delete)(":id"),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], AppController.prototype, "eliminar", null);
__decorate([
    (0, common_1.Patch)(":id/precio/:precio"),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Param)('precio')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Number]),
    __metadata("design:returntype", Object)
], AppController.prototype, "cambiarPrecio", null);
AppController = __decorate([
    (0, common_1.Controller)(),
    __metadata("design:paramtypes", [app_service_1.AppService])
], AppController);
exports.AppController = AppController;
//# sourceMappingURL=app.controller.js.map