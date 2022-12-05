import { Body, Controller, Delete, Get, Param, Patch, Post, Put } from '@nestjs/common';
import { LicuadoraService } from '../../domain/services/licuadora.service';

import {Licuadora} from '../../domain/models/Licuadora.model';

const errReturn = (e: Error, message: string) => {
   return {
      message: message,
      error: e
   }
}

@Controller()
export class LicuadoraController {
constructor(private readonly licService: LicuadoraService) { }

   @Get()
   getHello() {
      try{
         return this.licService.listar();
      }
      catch(e){
         return errReturn(e, "Error al listar jugadores");
      }
   }

   @Post()
   crear(@Body() datos: Licuadora) {
      try{
         return this.licService.crear(datos);
      }
      catch(e){
         return errReturn(e, "Error al crear jugador");
      }
   }

   @Put(":id")
   modificar(@Body() datos: Licuadora, @Param('id') id: number) {
      try{
         return this.licService.modificar(id, datos);
      }
      catch(e){
         return errReturn(e, "Error al modificar jugador");
      }
   }

   @Delete(":id")
   eliminar(@Param('id') id: number) {
      try{
         return this.licService.eliminar(id);
      }
      catch(e){
         return errReturn(e, "Error al eliminar jugador");
      }
   }

   @Patch(":id/precio/:precio")
   cambiarEdad(@Param('id') id: number, @Param('precio') precio: number) {
      try{
         return this.licService.cambiarPrecio(id, precio);
      }
      catch(e){
         return errReturn(e, "Error al modificar edad del jugador");
      }
   }
}