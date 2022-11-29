import { Body, Controller, Delete, Get, Param, Patch, Post, Put } from '@nestjs/common';
import { AppService } from './app.service';

interface Producto {
  nombre: string,
  descripcion: string,
  precio: number
}

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) { }

  private productos : Producto[] = [{
    nombre: "Licuadora",
    descripcion: "Doble revolucion",
    precio: 80
  }]

  @Get()
  getHello(): Producto[] {
    return this.productos;
  }

  @Post()
  crear(@Body() datos: Producto): Producto {
    this.productos.push(datos);
    return datos;
  }

  @Put(":id")
  modificar(@Body() datos: Producto, @Param('id') id: number): Producto | string {
    try{
    this.productos[id] = datos
    return this.productos[id];
    }
    catch{
      return `No fue posible modificar el producto en la posición ${id}`
    }
  }

  @Delete(":id")
  eliminar(@Param('id') id: number){
    try{
      this.productos = this.productos.filter((val, index) => index != id);
      return true;
    }
    catch{
      return false;
    }
  }

  @Patch(":id/edad/:edad")
  cambiarEdad(@Param('id') id: number, @Param('edad') precio: number): Producto | string{
    try{
      this.productos[id].precio = precio;
      return this.productos[id];
    }
    catch{
      return `No fue posible modificar el producto en la posición ${id}`
    }
  }
}