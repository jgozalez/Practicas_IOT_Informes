import { Entity, Column, ObjectIdColumn } from 'typeorm';

@Entity()
export class LicuadoraEntity {
   @ObjectIdColumn()
   id: string;

   @Column()
   marca: string;

   @Column()
   descripcion: string;

   @Column()
   precio: number;

   @Column()
   capacidad: string;
}