# 🏗️ Arquitetura EOS - Mapa Completo

## 📦 Estrutura do Monorepo

```
architecture-eos/
├── apps/                           # Aplicações Next.js
│   ├── eosfin/                    # App financeiro (US)
│   │   ├── src/
│   │   │   ├── app/
│   │   │   │   ├── (private)/     # Rotas autenticadas
│   │   │   │   │   ├── (dashboard)/
│   │   │   │   │   │   └── page.tsx
│   │   │   │   │   └── projeto/   # Gestão de projetos
│   │   │   │   │       ├── _components/
│   │   │   │   │       │   └── project-list.tsx
│   │   │   │   │       └── page.tsx
│   │   │   │   └── api/
│   │   │   │       ├── auth/
│   │   │   │       │   └── [...all]/
│   │   │   │       │       └── route.ts    # Better Auth
│   │   │   │       └── trpc/
│   │   │   │           └── [trpc]/
│   │   │   │               └── route.ts    # tRPC endpoint
│   │   │   ├── components/
│   │   │   │   └── client-only.tsx         # Wrapper para SSR false
│   │   │   ├── db/
│   │   │   │   └── collections/
│   │   │   │       └── projects.ts         # TanStack DB collection
│   │   │   ├── lib/
│   │   │   │   ├── auth.ts                 # Better Auth config
│   │   │   │   └── trpc.ts                 # tRPC client
│   │   │   ├── providers/
│   │   │   │   └── trpc-provider.tsx       # tRPC provider
│   │   │   └── server/
│   │   │       ├── context.ts              # tRPC context
│   │   │       ├── middleware.ts           # Auth middleware
│   │   │       ├── server-client.ts        # Server-side tRPC
│   │   │       ├── trpc.ts                 # tRPC setup
│   │   │       └── routers/
│   │   │           └── projects.ts         # Projects router
│   │   ├── .env.eosfin
│   │   ├── next.config.ts
│   │   ├── package.json
│   │   ├── tailwind.config.ts
│   │   └── tsconfig.json
│   │
│   └── eosloan/                   # App empréstimos (BR)
│       ├── src/
│       │   ├── app/
│       │   │   ├── (private)/
│       │   │   │   ├── (dashboard)/
│       │   │   │   │   └── page.tsx
│       │   │   │   └── project/           # Gestão de projetos
│       │   │   │       ├── _components/
│       │   │   │       │   └── project-list.tsx
│       │   │   │       └── page.tsx
│       │   │   └── api/
│       │   │       ├── auth/
│       │   │       │   └── [...all]/
│       │   │       │       └── route.ts
│       │   │       └── trpc/
│       │   │           └── [trpc]/
│       │   │               └── route.ts
│       │   ├── components/
│       │   │   └── client-only.tsx
│       │   ├── db/
│       │   │   └── collections/
│       │   │       └── projects.ts
│       │   ├── lib/
│       │   │   ├── auth.ts
│       │   │   └── trpc.ts
│       │   ├── providers/
│       │   │   └── trpc-provider.tsx
│       │   └── server/
│       │       ├── context.ts
│       │       ├── middleware.ts
│       │       ├── server-client.ts
│       │       ├── trpc.ts
│       │       └── routers/
│       │           └── projects.ts
│       ├── .env.eosloan
│       ├── next.config.ts
│       ├── package.json
│       ├── tailwind.config.ts
│       └── tsconfig.json
│
├── packages/                       # Pacotes compartilhados
│   ├── database/                  # Drizzle ORM & schemas
│   │   ├── src/
│   │   │   ├── eosfin/
│   │   │   │   ├── schema/
│   │   │   │   │   ├── index.ts
│   │   │   │   │   ├── project.ts
│   │   │   │   │   └── user.ts
│   │   │   │   └── index.ts       # DB instance
│   │   │   └── eosloan/
│   │   │       ├── schema/
│   │   │       │   ├── index.ts
│   │   │       │   ├── project.ts
│   │   │       │   └── user.ts
│   │   │       └── index.ts
│   │   ├── drizzle/               # Migrations
│   │   │   ├── eosfin/
│   │   │   │   └── meta/
│   │   │   └── eosloan/
│   │   │       └── meta/
│   │   ├── drizzle.config.eosfin.ts
│   │   ├── drizzle.config.eosloan.ts
│   │   └── package.json
│   │
│   ├── environment/               # Variáveis de ambiente
│   │   ├── eosfin.ts
│   │   ├── eosloan.ts
│   │   ├── index.ts
│   │   └── package.json
│   │
│   ├── hooks/                     # React hooks compartilhados
│   │   ├── src/
│   │   └── package.json
│   │
│   └── ui/                        # Componentes UI compartilhados
│       ├── src/
│       └── package.json
│
├── config/                         # Configurações compartilhadas
│   ├── eslint-config/
│   ├── prettier/
│   └── typescript-config/
│
├── docker-compose.yml             # Docker services (unificado)
├── package.json                   # Root package.json
├── pnpm-workspace.yaml           # pnpm workspace config
├── turbo.json                    # Turborepo config
└── README.md

```

## 🔧 Stack Tecnológica

### Frontend
- **Next.js 15** - App Router
- **React 19** - UI library
- **TypeScript** - Type safety
- **TailwindCSS** - Styling
- **TanStack DB** - Client-side reactive database
- **TanStack Query** - Server state management

### Backend
- **tRPC** - Type-safe API
- **Better Auth** - Authentication
- **Drizzle ORM** - Database ORM
- **PostgreSQL** - Database
- **Electric SQL** - Real-time sync

### DevOps
- **Docker** - Containerization
- **Turborepo** - Monorepo build system
- **pnpm** - Package manager

## 🌐 Arquitetura de Rede

```
┌─────────────────────────────────────────────────────────────┐
│                        APLICAÇÕES                           │
├─────────────────────────────────────────────────────────────┤
│  eosfin (US)              │  eosloan (BR)                   │
│  localhost:3000           │  localhost:3001                 │
│  ├─ Next.js App           │  ├─ Next.js App                 │
│  ├─ TanStack DB           │  ├─ TanStack DB                 │
│  └─ tRPC Client           │  └─ tRPC Client                 │
└──────────┬──────────────────────────────┬───────────────────┘
           │                              │
           ▼                              ▼
┌─────────────────────────────────────────────────────────────┐
│                    ELECTRIC SQL SYNC                        │
├─────────────────────────────────────────────────────────────┤
│  Electric US              │  Electric BR                    │
│  localhost:3010           │  localhost:3011                 │
│  ├─ Shape Stream          │  ├─ Shape Stream                │
│  └─ Real-time Sync        │  └─ Real-time Sync              │
└──────────┬──────────────────────────────┬───────────────────┘
           │                              │
           ▼                              ▼
┌─────────────────────────────────────────────────────────────┐
│                      DATABASES                              │
├─────────────────────────────────────────────────────────────┤
│  PostgreSQL US            │  PostgreSQL BR                  │
│  localhost:54321          │  localhost:54322                │
│  └─ eosfin DB             │  └─ eosloan DB                  │
└─────────────────────────────────────────────────────────────┘
```

## 🔄 Fluxo de Dados

### Criação de Projeto
```
User Input (Form)
    ↓
tRPC Mutation (client)
    ↓
tRPC Router (server)
    ↓
Drizzle ORM
    ↓
PostgreSQL
    ↓ (WAL Logical Replication)
Electric SQL
    ↓ (Shape Stream)
TanStack DB Collection
    ↓ (useLiveQuery)
UI Update (< 1ms)
```

### Sincronização Real-time
```
Database Change (Postgres)
    ↓
WAL (Write-Ahead Log)
    ↓
Electric SQL (Shape API)
    ↓
WebSocket/HTTP Streaming
    ↓
TanStack DB Collection
    ↓
React Component Re-render
```

## 📝 Principais Características

### �� Real-time Sync
- Sincronização entre múltiplas instâncias
- Updates sub-milissegundo no cliente
- Usando Electric SQL + TanStack DB

### 🔒 Type-Safety
- End-to-end type safety com tRPC
- Schemas Zod para validação
- TypeScript strict mode

### 🎨 UI/UX
- Design minimalista all-black
- Componentes client-only com SSR desabilitado
- Feedback visual instantâneo

### 🏗️ Arquitetura
- Monorepo com Turborepo
- Separação de concerns (apps/packages)
- Shared packages para código reutilizável

## 🔑 Variáveis de Ambiente

### eosfin (.env.eosfin)
```env
DATABASE_URL=postgresql://postgres:password@localhost:54321/eosfin
NEXT_PUBLIC_ELECTRIC_URL=http://localhost:3010
BETTER_AUTH_SECRET=...
BETTER_AUTH_URL=http://localhost:3000
```

### eosloan (.env.eosloan)
```env
DATABASE_URL=postgresql://postgres:password@localhost:54322/eosloan
NEXT_PUBLIC_ELECTRIC_URL=http://localhost:3011
BETTER_AUTH_SECRET=...
BETTER_AUTH_URL=http://localhost:3001
```

## 🚀 Comandos

### Development
```bash
# Subir infraestrutura
docker compose up -d

# Rodar migrations
pnpm db:push:eosfin
pnpm db:push:eosloan

# Dev mode
pnpm dev:eosfin   # localhost:3000
pnpm dev:eosloan  # localhost:3001
```

### Build
```bash
pnpm build
```

## 🎯 Próximos Passos

- [ ] Implementar autenticação completa
- [ ] Adicionar mais entidades (clientes, contratos, etc)
- [ ] Dashboard com métricas
- [ ] Testes E2E
- [ ] CI/CD pipeline
