import { AppService } from './app.service';
interface Producto {
    nombre: string;
    descripcion: string;
    precio: number;
}
export declare class AppController {
    private readonly appService;
    constructor(appService: AppService);
    private productos;
    getHello(): Producto[];
    crear(datos: Producto): Producto;
    modificar(datos: Producto, id: number): Producto | string;
    eliminar(id: number): string | boolean;
    cambiarPrecio(id: number, precio: number): Producto | string;
}
export {};
