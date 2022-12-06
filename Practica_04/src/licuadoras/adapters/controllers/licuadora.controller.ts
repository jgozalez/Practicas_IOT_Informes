import { Body, Controller, Delete, Get, Param, Patch, Post, Put, UseGuards,Inject } from '@nestjs/common';
import { LicuadoraService } from '../../domain/services/licuadora.service';
import { AuthGuard } from '@nestjs/passport';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { LicuadoraEntity } from '../../domain/entities/licuadora.entity';
import {Licuadora} from '../../domain/models/Licuadora.model';

const errReturn = (e: Error, message: string) => {
   return {
      message: message,
      error: e
   }
}

@Controller()
export class LicuadoraController {
constructor(@Inject('LicuadoraService')private readonly licService: LicuadoraService) { }

   

   @Get()
   getHello() {
      try{
         return this.licService.listar();
      }
      catch(e){
         return errReturn(e, "Error al listar jugadores");
      }
   }

   @UseGuards(JwtAuthGuard) // Se adiciona esta anotación
   @Post()
   crear(@Body() datos: LicuadoraEntity) {
      try{
         return this.licService.crear(datos);
      }
      catch(e){
         return errReturn(e, "Error al crear jugador");
      }
   }

   @UseGuards(JwtAuthGuard) // Se adiciona esta anotación
   @Put(":id")
   modificar(@Body() datos: LicuadoraEntity, @Param('id') id: number) {
      try{
         return this.licService.modificar(id, datos);
      }
      catch(e){
         return errReturn(e, "Error al modificar jugador");
      }
   }

   @UseGuards(JwtAuthGuard) // Se adiciona esta anotación
   @Delete(":id")
   eliminar(@Param('id') id: number) {
      try{
         return this.licService.eliminar(id);
      }
      catch(e){
         return errReturn(e, "Error al eliminar jugador");
      }
   }

   @UseGuards(JwtAuthGuard) // Se adiciona esta anotación
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