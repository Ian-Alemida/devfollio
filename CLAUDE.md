# CLAUDE.md — Devfollio

> Gerado automaticamente em 2026-05-25. Atualize quando padrões mudarem.

## Visão Geral

Portfólio pessoal de Ian Almeida — SPA construída com **React 18 + Next.js 14** e integrada com **MongoDB Atlas** e **Gemini AI**. O projeto exibe seções de apresentação, tecnologias, projetos (carrossel), cursos/formações e um chatbot de IA (IA'n) que representa Ian para recrutadores. Está hospedado na Vercel. O modelo Gemini em uso é o `gemini-3.5-flash` — o `gemini-1.5-flash` foi descontinuado pela Google.

A arquitetura é híbrida: utiliza o **App Router** do Next.js (`src/app/`) para os componentes de UI e o **Pages Router** (`pages/api/`) para as rotas de API (MongoDB + Gemini). O banco de dados é o MongoDB Atlas via Mongoose.

## Comandos Essenciais

```bash
# Instalar dependências (use APENAS npm)
npm install

# Desenvolvimento
npm run dev

# Build para produção
npm run build

# Iniciar em produção
npm start

# Lint
npm run lint
```

## Variáveis de Ambiente

### Obrigatórias para Desenvolvimento

```bash
# String de conexão com o MongoDB Atlas
MONGODB_URI=mongodb+srv://<user>:<password>@<cluster>.mongodb.net/devfollio?retryWrites=true&w=majority

# Chave da API do Google Gemini (necessária para o chatbot IA'n)
API_GEMINI=sua_chave_aqui
```

Crie um arquivo `.env.local` na raiz com essas variáveis. O `.gitignore` já ignora `.env*.local` — nunca commite esse arquivo.

## Arquitetura e Estrutura

```
devfollio/
├── src/
│   ├── app/                    # App Router — UI e componentes React
│   │   ├── Components/         # Componentes por seção (About, Banner, ChatbotGemini...)
│   │   ├── globals.css         # Variáveis CSS globais (cores, espaçamentos)
│   │   ├── reset.css           # CSS reset
│   │   ├── page.jsx            # Página principal (raiz)
│   │   └── layout.jsx          # Layout raiz com metadata e fonte
│   ├── db/
│   │   ├── db.js               # Conexão com MongoDB Atlas (URI hardcoded)
│   │   └── schemas/            # Schemas Mongoose (cursosSchema, technologiesSchema)
│   └── geminiAI/
│       ├── startGemini.js      # Inicialização do modelo Gemini e chat
│       ├── experienceData.js   # Dados de experiência do Ian (contexto do chatbot)
│       ├── formatResponse.js   # Formatação de respostas
│       └── removePropeties.js  # Limpeza de props dos dados do DB
├── pages/
│   └── api/                    # Pages Router — rotas de API Next.js
│       ├── getCourses.js       # GET cursos do MongoDB
│       ├── getTechnologies.js  # GET tecnologias do MongoDB
│       └── getGemini.js        # POST para o chatbot Gemini
├── public/                     # Assets estáticos (imagens, SVGs, PDFs)
├── next.config.mjs             # Webpack config para carregar PDFs
└── jsconfig.json               # Path alias: @/* → ./src/*
```

### Padrão de Importação

O alias `@/` aponta para `./src/`. Sempre use esse alias em vez de caminhos relativos longos:

```js
import Header from '@/app/Components/Header/Header'
import { connectDB } from '@/db/db'
```

### CSS e Estilização

- **Variáveis globais** de cor e tipografia estão definidas em `src/app/globals.css` — use-as via `var(--nome)` em vez de valores hardcoded
- **Styled-components** é usado para componentes que precisam de lógica dinâmica (ex: `ChatbotGemini`, `Background-stars`, `page.jsx`)
- **CSS modules locais** (`.css` ao lado do componente) são usados para a maioria dos componentes
- **Bootstrap + react-bootstrap** para componentes utilitários

## Regras Críticas

### Testes

Não há testes automatizados neste projeto. Qualquer alteração deve ser validada manualmente no browser (`npm run dev`).

### Chatbot (IA'n)

- O chatbot é **desabilitado em mobile e tablet** (`display: none` para `max-width: 1024px`) — isso é intencional
- O chat é inicializado com histórico que contextualiza o Gemini sobre Ian — não altere `startGemini.js` sem revisar o prompt completo
- O `startGemini.js` usa `await` top-level — é um módulo ES com efeitos colaterais ao importar

### Roteamento Híbrido

Este projeto usa **dois sistemas de roteamento simultaneamente**:
- `src/app/` → App Router (UI, componentes)
- `pages/api/` → Pages Router (apenas API routes)

Não mova API routes para `src/app/api/` sem testar — o MongoDB e o Gemini dependem das rotas em `pages/api/`.

### Dados e Banco

- A URI do MongoDB está **hardcoded** em `src/db/db.js` — não commite chaves reais se refatorar para variável de ambiente
- O `startGemini.js` faz chamadas HTTP internas para `http://localhost:3000/api/...` — em produção na Vercel, ajuste para URL absoluta se necessário

## Convenções de Código

### Linting

- Ferramenta: ESLint com preset `next/core-web-vitals`
- Rodar antes de commitar: `npm run lint`
- Não há Prettier configurado — o formatador não é obrigado

### Nomenclatura

- Componentes React: **PascalCase** tanto no arquivo quanto na pasta (`Header/Header.jsx`)
- Arquivos CSS: **camelCase** ao lado do componente (`header.css`)
- Funções e variáveis: **camelCase**
- Cada componente tem sua própria pasta com o CSS correspondente

### Package Manager

Use **apenas `npm`** — o projeto usa `package-lock.json`. Não use `yarn`, `pnpm` ou `bun`.

## Dependências e Versões

- Node: v20+ (atual do ambiente), mas `package.json` lista `"node": "^22.0.0"` como dependency (anomalia — não é o `engines` field)
- Package manager: **npm 10.x**
- Next.js: 14.1.1
- React: 18.2.0

## O Que Não Fazer ⛔

- **Não use `yarn`, `pnpm` ou `bun`** — apenas `npm`; o `package-lock.json` é o lock file oficial
- **Não crie arquivos de API em `src/app/api/`** — as rotas de API existentes estão em `pages/api/` e devem permanecer lá
- **Não commite a URI do MongoDB ou a chave do Gemini em texto plano** — mova para `.env.local` se refatorar
- **Não remova o `display: none` no mobile do chatbot** — é intencional e estava causando problemas de layout
- **Não altere o `reactStrictMode: true`** em `next.config.mjs` sem testar — está habilitado; se causar double-renders no chatbot, avalie desabilitar