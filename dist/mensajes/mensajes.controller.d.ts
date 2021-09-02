import { CreateMensajeDto } from './dto/create-mensaje-dto';
import { MensajesService } from './mensajes.service';
export declare class MensajesController {
    private mensajeService;
    constructor(mensajeService: MensajesService);
    create(createMensajeDto: CreateMensajeDto, response: any): void;
    getAll(response: any): void;
    update(updateMensajeDto: CreateMensajeDto, response: any, idMensaje: any): void;
    delete(updateMensajeDto: CreateMensajeDto, response: any, idMensaje: any): void;
}
