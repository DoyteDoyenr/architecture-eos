# Architecture EOS

## Setup do Projeto

### Pré-requisitos

- Node.js >= 18
- pnpm 9.0.0
- Docker e Docker Compose

### Instalação

1. Clone o repositório:
```bash
git clone https://github.com/DoyteDoyenr/architecture-eos.git
cd architecture-eos
```

2. Instale as dependências:
```bash
pnpm install
```

3. Configure os arquivos de ambiente:
```bash
pnpm env:setup
```

4. Inicie os containers Docker (PostgreSQL e Electric):
```bash
docker-compose up -d
```

5. Gere as migrações do banco de dados:
```bash
pnpm db:generate:eosfin
pnpm db:generate:eosloan
```

6. Execute as migrações no banco de dados:
```bash
pnpm db:migrate:eosfin
pnpm db:migrate:eosloan
```

7. Inicie o servidor de desenvolvimento:
```bash
pnpm dev
```

### Scripts Disponíveis

- `pnpm dev` - Inicia todos os serviços em modo desenvolvimento
- `pnpm dev:eosfin` - Inicia apenas o serviço eosfin
- `pnpm dev:eosloan` - Inicia apenas o serviço eosloan
- `pnpm build` - Compila todos os projetos
- `pnpm db:push:eosfin` - Sincroniza o schema do eosfin com o banco
- `pnpm db:push:eosloan` - Sincroniza o schema do eosloan com o banco
- `pnpm db:generate:eosfin` - Gera migrações para eosfin
- `pnpm db:generate:eosloan` - Gera migrações para eosloan

### Estrutura do Projeto

- `apps/eosfin` - Aplicação EOS Fin
- `apps/eosloan` - Aplicação EOS Loan
- `packages/database` - Schemas e configurações do banco de dados
- `packages/environment` - Variáveis de ambiente compartilhadas

### Portas

- PostgreSQL eosfin: `54321`
- PostgreSQL eosloan: `54322`
- Electric eosfin: `3010`
- Electric eosloan: `3011`
