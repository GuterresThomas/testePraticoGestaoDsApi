/* eslint-disable prettier/prettier */
import {
  Controller,
  Get,
  Post,
  Body,
  Put,
  Param,
  Delete,
  NotFoundException,
  HttpCode,
  Logger
} from '@nestjs/common';
import { PacientesService } from './pacientes.service';
import { Paciente } from './models/paciente.entity';


@Controller('api/v1/pacientes')
export class PacientesController {
  private readonly logger = new Logger(PacientesService.name);

    constructor(private readonly pacientesService: PacientesService) {}

    @Get()
    async findAll(): Promise<Paciente[]> {
      return this.pacientesService.findAll();
    }

    
    @Get(':id')
    async findById(@Param('id') id: number): Promise<Paciente | { message: string }> {
        const paciente = await this.pacientesService.findOne(id);
        if (!paciente) {
            throw new NotFoundException('Paciente não encontrado');
        }
        return paciente;
    }
  
    @Post()
    @HttpCode(201) 
    async create(@Body() paciente: Paciente): Promise<Paciente> {
      const createdPaciente = await this.pacientesService.create(paciente);
      return createdPaciente;
    }
    
    @Put(':id')
    async update(@Param('id') id: number, @Body() pacienteToUpdate: Partial<Paciente>): Promise<Paciente | { message: string }> {
      const existingPaciente = await this.pacientesService.findOne(id);
    
      if (!existingPaciente) {
        throw new NotFoundException('Paciente não encontrado');
      }
    
      // Log para visualizar o objeto recebido na requisição
      this.logger.log(`Objeto recebido para atualização: ${JSON.stringify(pacienteToUpdate)}`);
    
      // Atualiza apenas as propriedades do paciente que foram enviadas na requisição
      await this.pacientesService.update(id, pacienteToUpdate);
    
      // Retorna o paciente atualizado
      const updatedPaciente = await this.pacientesService.findOne(id);
      return updatedPaciente;
    }

    @Delete(':id')
    async delete(@Param('id') id: number): Promise<any> {
      const paciente = await this.pacientesService.findOne(id);
  
      if (!paciente) {
        throw new NotFoundException('Paciente com id inexistente.');
      }
  
      await this.pacientesService.delete(id);
      return { message: 'Paciente deletado com sucesso.' };
    }
}
