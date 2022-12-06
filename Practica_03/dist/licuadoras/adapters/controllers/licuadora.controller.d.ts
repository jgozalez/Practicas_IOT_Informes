import { LicuadoraService } from '../../domain/services/licuadora.service';
import { Licuadora } from '../../domain/models/Licuadora.model';
export declare class LicuadoraController {
    private readonly licService;
    constructor(licService: LicuadoraService);
    getHello(): Licuadora[] | {
        message: string;
        error: Error;
    };
    crear(datos: Licuadora): Licuadora | {
        message: string;
        error: Error;
    };
    modificar(datos: Licuadora, id: number): Licuadora | {
        message: string;
        error: Error;
    };
    eliminar(id: number): boolean | {
        message: string;
        error: Error;
    };
    cambiarEdad(id: number, precio: number): Licuadora | {
        message: string;
        error: Error;
    };
}
