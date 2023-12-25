<p align="center">
    <img src="https://www.gestaods.com.br/wp-content/uploads/2022/06/logo_login.png"></img>
</p>


## Teste Prático Gestão DS - API

Esta é a API desenvolvida para suportar o projeto de teste prático Gestão DS. Foi construída utilizando o framework NestJS, o TypeORM para interagir com o banco de dados PostgreSQL.

## Instalação

Certifique-se de ter o Node.js instalado na sua máquina antes de prosseguir.

# Clone esse repositório: 

git clone https://github.com/seu-usuario/testepraticogestaoapi.git

# Navegue até o diretório:

cd testepraticogestaoapi

# Instale as dependências:

```bash
$ npm install
```
# Configuração do Banco de Dados:

Certifique-se de ter o PostgreSQL instalado e configurado. Configure as variáveis de ambiente necessárias para a conexão com o banco de dados no arquivo .env.

## Uso:

Para iniciar a API localmente, utilize o seguinte comando:

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```
# Scripts Disponíveis

npm run build: Compila a aplicação.

npm run start: Inicia a aplicação.

npm run start:dev: Inicia a aplicação em modo de desenvolvimento com live-reload.

npm run test: Executa os testes.

npm run test:watch: Executa os testes em modo de observação.

npm run test:cov: Executa os testes e gera relatório de cobertura.

# Endpoints:

# Listar todos os pacientes

Método: GET
Endpoint: /api/v1/pacientes

# Buscar paciente por ID

Método: GET
Endpoint: /api/v1/pacientes/:id
Descrição: Retorna os detalhes de um paciente específico com base no ID fornecido.

# Criar um novo paciente

Método: POST
Endpoint: /api/v1/pacientes
Descrição: Cria um novo paciente com base nos dados fornecidos.

# Atualizar informações de um paciente

Método: PUT
Endpoint: /api/v1/pacientes/:id
Descrição: Atualiza as informações de um paciente específico com base no ID fornecido.

# Excluir um paciente

Método: DELETE
Endpoint: /api/v1/pacientes/:id
Descrição: Remove um paciente específico com base no ID fornecido.

# Dependências Principais

@nestjs/common, @nestjs/core, @nestjs/platform-express: Framework NestJS para construção de aplicativos Node.

@nestjs/config: Biblioteca para gerenciar variáveis de ambiente na aplicação NestJS.

@nestjs/typeorm: Integração do NestJS com o TypeORM.

pg, typeorm: Dependências para interagir com o PostgreSQL.

rxjs: Biblioteca para programação reativa.
