import { Body, Delete, Get, Param, Put, Res } from '@nestjs/common';
import { HttpStatus } from '@nestjs/common';
import { Controller, Post } from '@nestjs/common';
import { response } from 'express';
import { CreateMensajeDto } from './dto/create-mensaje-dto';
import { MensajesService } from './mensajes.service';

@Controller('mensajes')
export class MensajesController {
  constructor(private mensajeService: MensajesService) {}
  @Post()
  create(@Body() createMensajeDto: CreateMensajeDto, @Res() response) {
    this.mensajeService
      .createMesnaje(createMensajeDto)
      .then((mensaje) => {
        response.status(HttpStatus.CREATED).json(mensaje);
      })
      .catch(() => {
        response.status(HttpStatus.FORBIDDEN).json({
          mensaje: 'error en la creacion del mensaje',
        });
      });
  }

  @Get()
  getAll(@Res() response) {
    this.mensajeService
      .getAll()
      .then((mensajesList) => {
        response.status(HttpStatus.OK).json(mensajesList);
      })
      .catch(() => {
        response.status(HttpStatus.FORBIDDEN).json({
          mensaje: 'error en la obtencion del mensaje',
        });
      });
  }

  @Put(':id')
  update(
    @Body() updateMensajeDto: CreateMensajeDto,
    @Res() response,
    @Param('id') idMensaje,
  ) {
    this.mensajeService
      .updatreMensaje(idMensaje, updateMensajeDto)
      .then((mensaje) => {
        response.status(HttpStatus.OK).json(mensaje);
      })
      .catch(() => {
        response.status(HttpStatus.FORBIDDEN).json({
          mensaje: 'error en la obtencion del mensaje',
        });
      });
  }

  @Delete(':id')
  delete(
    @Body() updateMensajeDto: CreateMensajeDto,
    @Res() response,
    @Param('id') idMensaje,
  ) {
    this.mensajeService
      .deleteMensaje(idMensaje)
      .then((res) => {
        response.status(HttpStatus.OK).json(res);
      })
      .catch(() => {
        response
          .status(HttpStatus.FORBIDDEN)
          .json({ mensaje: 'error ak eliminar mensaje' });
      });
  }
}
