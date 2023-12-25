// contato.entity.ts

import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Paciente {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ default: '' })
  paciente: string;

  @Column({ default: '' })
  apelido: string;

  @Column({ default: '' })
  nacionalidade: string;

  @Column({ default: '' })
  dataDeNascimento: string;

  @Column({ default: '' })
  cpf: string;

  @Column({ default: '' })
  rg: string;

  @Column({ default: '' })
  genero: string;

  @Column({ default: '' })
  estadoCivil: string;

  @Column({ type: 'varchar', length: 100, default: '' })
  observacoesAdicionais: string;

  @Column({ default: '' })
  cep: string;

  @Column({ default: '' })
  cidade: string;

  @Column({ default: '' })
  uf: string;

  @Column({ default: '' })
  endereco: string;

  @Column({ default: '' })
  numero: string;

  @Column({ default: '' })
  bairro: string;

  @Column({})
  complemento: string;
}
