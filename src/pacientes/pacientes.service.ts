/* eslint-disable prettier/prettier */
import { BadRequestException, Injectable, Logger} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, UpdateResult } from 'typeorm';
import {Paciente} from './models/paciente.entity'


@Injectable()
export class PacientesService {
  private readonly logger = new Logger(PacientesService.name);

    constructor(
        @InjectRepository(Paciente) // Injeta o repositório do Paciente
        private readonly pacienteRepository: Repository<Paciente>,
    ) {}

  async findAll(): Promise<Paciente[]> {
    return this.pacienteRepository.find();
  }

  async findOne(id: number): Promise<Paciente> {
    return this.pacienteRepository.findOne({ where: { id } });
  }

  async create(paciente: Partial<Paciente>): Promise<Paciente> {
    const newPaciente = this.pacienteRepository.create(paciente);
    return this.pacienteRepository.save(newPaciente);
  }

  
 
  async update(id: number, pacienteToUpdate: Partial<Paciente>): Promise<UpdateResult> {
    if (Object.keys(pacienteToUpdate).length === 0) {
      // Verificar se o objeto recebido para atualização está vazio
      throw new BadRequestException('Nenhum dado fornecido para atualização.');
    }

    return this.pacienteRepository.update(id, pacienteToUpdate);
  }

  async delete(id: number): Promise<void> {
    await this.pacienteRepository.delete(id);
  }
}