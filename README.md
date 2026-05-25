# Clínica Veterinária Casa do Snoopy

Site institucional multi-página construído com **Next.js 15 + Tailwind CSS**, pronto para deploy na **Vercel**.

## Páginas

| Rota          | Conteúdo                                         |
|---------------|--------------------------------------------------|
| `/`           | Home: hero, serviços em destaque, equipe, FAQ    |
| `/sobre`      | História, valores e especialidades               |
| `/servicos`   | Todos os serviços com imagens e convênios        |
| `/equipe`     | Equipe com bios e seção de vagas                 |
| `/contato`    | Mapa Google, informações e FAQ completo          |

## Tecnologias

- **Next.js 15** (App Router, TypeScript)
- **Tailwind CSS v4**
- **Vercel** para deploy

## Como rodar localmente

```bash
npm install
npm run dev
```

Acesse `http://localhost:3000`

## Deploy na Vercel

1. Faça push para um repositório GitHub
2. Acesse [vercel.com](https://vercel.com) → **Add New Project**
3. Importe o repositório — a Vercel detecta Next.js automaticamente
4. Clique em **Deploy**

Nenhuma configuração extra necessária.

## Personalizar conteúdo

Todo o conteúdo está em **`lib/data.ts`**:

| Exportação    | O que controla                                  |
|---------------|-------------------------------------------------|
| `SITE`        | Nome, telefone, endereço, WhatsApp, imagens     |
| `NAV`         | Links do menu de navegação                      |
| `STATS`       | Números do hero                                 |
| `CHECKLIST`   | Diferenciais na seção Sobre                     |
| `SERVICES`    | Serviços (título, descrição, imagem)            |
| `TEAM`        | Equipe (nome, cargo, bio, foto)                 |
| `HOURS`       | Dias e horários de funcionamento                |
| `SPECIALTIES` | Grade de especialidades                         |
| `FAQ`         | Perguntas e respostas                           |

## Estrutura

```
app/
├── layout.tsx          # Layout raiz (nav + footer + fontes)
├── globals.css         # Variáveis CSS e utilitários globais
├── page.tsx            # Home
├── sobre/page.tsx      # Sobre nós
├── servicos/page.tsx   # Serviços
├── equipe/page.tsx     # Equipe
└── contato/page.tsx    # Contato
components/
├── Navbar.tsx          # Navegação com link ativo e menu mobile
├── Footer.tsx          # Rodapé
├── WaFloat.tsx         # Botão flutuante WhatsApp
├── PageHero.tsx        # Hero reutilizável para páginas internas
├── CtaSection.tsx      # Seção de CTA reutilizável
└── FaqAccordion.tsx    # Acordeão de FAQ interativo
lib/
└── data.ts             # Todos os dados e conteúdo do site
```
