import { LicuadoraService } from '../../domain/services/licuadora.service';
import { LicuadoraEntity } from '../../domain/entities/licuadora.entity';
export declare class LicuadoraController {
    private readonly licService;
    constructor(licService: LicuadoraService);
    getHello(): Promise<LicuadoraEntity[]> | {
        message: string;
        error: Error;
    };
    crear(datos: LicuadoraEntity): {
        message: string;
        error: Error;
    } | Promise<import("typeorm").InsertResult>;
    modificar(datos: LicuadoraEntity, id: number): {
        message: string;
        error: Error;
    } | Promise<import("typeorm").UpdateResult>;
    eliminar(id: number): {
        message: string;
        error: Error;
    } | Promise<boolean>;
    cambiarEdad(id: number, precio: number): {
        message: string;
        error: Error;
    } | Promise<import("typeorm").UpdateResult>;
}
