import { Injectable } from '@nestjs/common';
import { Licuadora } from '../models/Licuadora.model';
import { LicuadoraEntity } from '../entities/licuadora.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { InsertResult, MongoRepository, UpdateResult } from 'typeorm';

@Injectable()
export class LicuadoraService {

   constructor(
      @InjectRepository(LicuadoraEntity)
      private repository: MongoRepository<LicuadoraEntity>,
   ) {}


    /**
    * Método para obtener todos los jugadores
    */
     public async listar() : Promise<LicuadoraEntity[]> {
      return await this.repository.find();
   }

   /**
    * Método para crear un jugador
    */
   public async crear(lic: LicuadoraEntity): Promise<InsertResult> {
      const newLicuadora = await this.repository.insert(lic);
      return newLicuadora;
   }

   /**
    * Método para modificar un jugador
    */
   public async modificar(id: number, lic: LicuadoraEntity): Promise<UpdateResult>  {
      const updatedLicuadora = await this.repository.update(id, lic);
         return updatedLicuadora;
   }

   /**
    * Método para eliminar un jugador
    * Debido a que usamos un filtro, para validar si se elimina el jugador, 
    * primero se determina cuantos elementos hay en el arreglo y luego se hace una comparación.
    */
   public async eliminar(id: number): Promise<boolean> {
      const deleteResult = await this.repository.delete(id)
      return deleteResult.affected > 0;
   }

   /**
    * Método para modificar la edad de un jugador
    */
   public async cambiarPrecio(id: number, pre: number): Promise<UpdateResult> {
      const updatedLicuadora= await this.repository.update(id, { precio: pre });
      return updatedLicuadora;
   }

}
