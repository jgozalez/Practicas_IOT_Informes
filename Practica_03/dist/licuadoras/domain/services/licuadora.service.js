"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.LicuadoraService = void 0;
const common_1 = require("@nestjs/common");
let LicuadoraService = class LicuadoraService {
    constructor() {
        this.licuadora = [{
                marca: 'oster',
                descripcion: 'Doble revolucion',
                precio: 80,
                capacidad: '5 litros'
            }];
    }
    listar() {
        return this.licuadora;
    }
    crear(lic) {
        this.licuadora.push(lic);
        return lic;
    }
    modificar(id, lic) {
        this.licuadora[id] = lic;
        return this.licuadora[id];
    }
    eliminar(id) {
        const totalLicuadorasAntes = this.licuadora.length;
        this.licuadora = this.licuadora.filter((val, index) => index != id);
        if (totalLicuadorasAntes == this.licuadora.length) {
            return false;
        }
        else {
            return true;
        }
    }
    cambiarPrecio(id, pre) {
        this.licuadora[id].precio = pre;
        return this.licuadora[id];
    }
};
LicuadoraService = __decorate([
    (0, common_1.Injectable)()
], LicuadoraService);
exports.LicuadoraService = LicuadoraService;
//# sourceMappingURL=licuadora.service.js.map