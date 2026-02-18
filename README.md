'-'

um aplicativo Microspace

# Microspace Classic

*by: Lucas Willian*

> Plataforma baseada no falecido Microspace original de 2025 e com o objetivo de reunir materiais para estudo.

*Essa imagem abaixo é uma aleatória que eu peguei, relevem, não tem banner ainda*

![Microspace Banner](https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=2564&auto=format&fit=crop)

  

O **Microspace Classic** é uma aplicação web focada em organizar materiais didáticos de forma modular, utilizando uma arquitetura híbrida onde cada aula é um componente React carregado sob demanda (Lazy Loading), garantindo velocidade e flexibilidade (você não precisa entender o que isso significa, não se preocupe).

---
## ✨ Funcionalidades

- **Design Glassmorphism**: Interface moderna com desfoque (blur), transparências e gradientes dinâmicos.

- **Modo Escuro**: Suporte nativo a temas claro/escuro.

- **Roteamento Híbrido**: Sistema de arquivos lógico (`pages/Content/...`) mapeado via registro central.

- **Renderizador Markdown**: Suporte a formatação de texto, blocos de código, listas, citações e imagens.

- **Lazy Loading**: O código das aulas só é baixado quando o usuário acessa a página.

- **Busca Global**: Pesquisa indexada em tempo real pelo registro de conteúdos.

---

## 🚀 Instalação e Execução

Para rodar o projeto localmente:

1. **Clone o repositório:**

```bash

git clone https://github.com/heinsahamner/microspace-classic.git

cd microspace-classic

```

2. **Instale as dependências:**

```bash

npm install

```

3. **Inicie o servidor de desenvolvimento:**

```bash

npm run dev

```
  
O projeto estará rodando em `http://localhost:5173`.

---

## 📝 Como Criar Novo Conteúdo

O Microspace utiliza uma ferramenta CLI (de terminal, para os não íntimos) para padronizar a criação de páginas. **Não crie arquivos manualmente do zero**, use o script para garantir a estrutura correta.

### Passo 1: Executar o Gerador

No terminal, na raiz do projeto, execute:

```bash

node scripts/create-page.js

```

### Passo 2: Preencher os Dados

A ferramenta fará algumas perguntas:

1. **Tipo**: `Content` (Conteúdo) ou `Tests` (Testes).

2. **Curso**: `ADM` ou `INFO`.

3. **Ano**: `1-Ano`, `2-Ano` ou `3-Ano`.

4. **Nome do Arquivo**: O nome do componente (ex: `LogicaDeProgramacao`). *Sem espaços.*

5. **Título**: O título que aparecerá no Card e no topo da página.

6. **Descrição**: Um resumo curto para o Card.

7. **Autor**: Seu nome ou "Comunidade".

  

### Passo 3: Registrar a Página (Importante ⚠️)

A ferramenta **criará o arquivo `.tsx`** automaticamente na pasta correta, mas ela **NÃO edita** o arquivo de registro central (para evitar quebras de código).

Ela exibirá no terminal um código pronto. Você deve:

1. Abrir o arquivo `utils/ContentRegistry.tsx`.

2. Colocar o `import` gerado no topo do arquivo.

3. Colocar o objeto de configuração dentro do array `REGISTRY`.

**Exemplo de como fica no `utils/ContentRegistry.tsx`:**

  

```typescript

// 1. Import (no topo)

const LogicaDeProgramacao = React.lazy(() => import('../pages/Content/INFO/1-Ano/LogicaDeProgramacao'));

  

// ...

  

export const REGISTRY: RegistryEntry[] = [

// 2. Registro (dentro do array)

{

path: '/Content/INFO/1-Ano/logicadeprogramacao',

slug: 'logicadeprogramacao',

type: SectionType.CONTENT,

course: CourseType.INFO,

year: YearLevel.FIRST,

meta: {

title: "Lógica de Programação",

description: "Introdução a algoritmos",

author: "Comunidade",

date: "2024-05-20"

},

component: LogicaDeProgramacao

},

];

```

### Passo 4: Editar o Conteúdo

Vá até o arquivo criado (ex: `pages/Content/INFO/1-Ano/LogicaDeProgramacao.tsx`) e edite o texto dentro da variável `content` usando Markdown.

---

## 📂 Estrutura de Pastas

```

/

├── components/ # Componentes Reutilizáveis

│ ├── Layout/ # Header, Background

│ └── UI/ # Cards, Modais, MarkdownRenderer

├── context/ # ThemeContext (Estado global de tema)

├── pages/ # Páginas da Aplicação

│ ├── Content/ # AULAS (Geradas via CLI)

│ │ ├── ADM/

│ │ └── INFO/

│ │ ├── 1-Ano/

│ │ ├── 2-Ano/

│ │ └── 3-Ano/

│ └── Tests/ # PROVAS/TESTES (Depois)

├── scripts/ # Scripts de automação (create-page.js)

├── utils/ # Utilitários

│ └── ContentRegistry.tsx # O "Cérebro" das rotas. Todo conteúdo deve estar aqui.

└── App.tsx # Roteador Principal

```

  

---

  

## 🎨 Guia de Estilo (Markdown)

Ao editar suas páginas `.tsx`, você pode usar:

- **Títulos**: `# Título 1`, `## Título 2`

- **Ênfase**: `**Negrito**`, `*Itálico*`

- **Listas**: `- Item` ou `1. Item`

- **Código**: Crases para `inline` ou três crases para blocos.

- **Imagens**: `![Legenda](url-da-imagem)`

- **Dicas**: O MarkdownRenderer suporta blocos especiais como `> Citações`.

Consulte a página `/microspace-guide` rodando no projeto para ver exemplos visuais.

---