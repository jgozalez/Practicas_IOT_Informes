import { Licuadora } from '../models/Licuadora.model';
export declare class LicuadoraService {
    private licuadora;
    listar(): Licuadora[];
    crear(lic: Licuadora): Licuadora;
    modificar(id: number, lic: Licuadora): Licuadora;
    eliminar(id: number): boolean;
    cambiarPrecio(id: number, pre: number): Licuadora;
}
