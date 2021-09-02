import { Repository } from 'typeorm';
import { Mensaje } from './entities/mensaje.entity';
import { CreateMensajeDto } from './dto/create-mensaje-dto';
export declare class MensajesService {
    private readonly mensajeRepository;
    constructor(mensajeRepository: Repository<Mensaje>);
    getAll(): Promise<Mensaje[]>;
    createMesnaje(mensajeNuevo: CreateMensajeDto): Promise<Mensaje>;
    updatreMensaje(idMensaje: number, mensajeActualizar: CreateMensajeDto): Promise<Mensaje>;
    deleteMensaje(idMensaje: number): Promise<any>;
}
