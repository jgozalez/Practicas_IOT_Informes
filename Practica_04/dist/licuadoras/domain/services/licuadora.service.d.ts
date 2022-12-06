import { LicuadoraEntity } from '../entities/licuadora.entity';
import { InsertResult, MongoRepository, UpdateResult } from 'typeorm';
export declare class LicuadoraService {
    private repository;
    constructor(repository: MongoRepository<LicuadoraEntity>);
    listar(): Promise<LicuadoraEntity[]>;
    crear(lic: LicuadoraEntity): Promise<InsertResult>;
    modificar(id: number, lic: LicuadoraEntity): Promise<UpdateResult>;
    eliminar(id: number): Promise<boolean>;
    cambiarPrecio(id: number, pre: number): Promise<UpdateResult>;
}
