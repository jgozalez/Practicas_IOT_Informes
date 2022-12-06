import { Injectable } from '@nestjs/common';
// Importamos el modelo de jugador
import { Licuadora } from '../models/Licuadora.model';

@Injectable()
export class LicuadoraService {

   // Como no hay base de datos aun empleamos una variable en memoria:
   private licuadora: Licuadora[] = [{
      marca:'oster',
      descripcion:'Doble revolucion',
      precio: 80,
      capacidad: '5 litros'
   }]

    /**
    * Método para obtener todos los jugadores
    */
     public listar() : Licuadora[] {
      return this.licuadora
   }

   /**
    * Método para crear un jugador
    */
   public crear(lic: Licuadora): Licuadora {
      this.licuadora.push(lic);
      return lic;
   }

   /**
    * Método para modificar un jugador
    */
   public modificar(id: number, lic: Licuadora): Licuadora {
         this.licuadora[id] = lic
         return this.licuadora[id];
   }

   /**
    * Método para eliminar un jugador
    * Debido a que usamos un filtro, para validar si se elimina el jugador, 
    * primero se determina cuantos elementos hay en el arreglo y luego se hace una comparación.
    */
   public eliminar(id: number): boolean {
      const totalLicuadorasAntes = this.licuadora.length;
      this.licuadora = this.licuadora.filter((val, index) => index != id);
      if(totalLicuadorasAntes == this.licuadora.length){
         return false;
      }
      else{
         return true;
      }
   }

   /**
    * Método para modificar la edad de un jugador
    */
   public cambiarPrecio(id: number, pre: number): Licuadora {
      this.licuadora[id].precio = pre;
      return this.licuadora[id];
   }

}
