# Robson Costa — site pessoal

Site profissional bilíngue (PT/EN) em Next.js 15 + Tailwind, exportado como
site estático para GitHub Pages.

## Rodar

```bash
npm install
npm run dev     # http://localhost:3000/pt
```

A raiz `/` só existe no build (é um redirecionador por idioma gerado no
pós-build). Em desenvolvimento, entre por `/pt` ou `/en`.

```bash
npm run build      # gera out/
npm run typecheck  # checagem de tipos
npm start          # serve out/ localmente
```

## Onde está o conteúdo

**Todo o texto do site vive em dois arquivos.** Nenhum componente tem copy
hardcoded.

| Arquivo | O que contém |
| --- | --- |
| `content/site.ts` | Perfil, bio, skills, números, trajetória profissional, formação, certificações e os três cases completos (contexto, desafios, como foi feito, arquitetura, stack, resultados, aprendizados) — tudo em PT e EN. |
| `content/ui.ts` | Rótulos de interface (menu, títulos de seção, botões). |

### Procedência do conteúdo

- **Confirmado**: perfil, bio, trajetória, formação e o case do **Gerencert**
  vieram do LinkedIn (`linkedin.com/in/robsoncsouza`), lido em 31/08/2026.
- **Rascunho**: os cases de **YellowJobs** e **Moosy** não estão no LinkedIn.
  O texto é uma primeira versão e está marcado com `TODO:` no arquivo.

Procure por `TODO:` em `content/site.ts` antes de publicar. O que falta são os
números reais desses dois projetos.

### Favicon e imagem de Open Graph

Os arquivos em `public/` (`favicon.svg`, `favicon-32.png`, `apple-touch-icon.png`,
`og-pt.png`, `og-en.png`) são gerados a partir das iniciais, nome e cargo em
`content/site.ts`. Se mudar esses campos ou a cor `brand`, rode:

```bash
npm run images
```

### Logos das instituições

`public/logos/` guarda o badge da AWS (Credly) e os logos da FIAP e da UMC,
referenciados em `content/site.ts` nos campos `logo` e `badge`.

### Adicionar um projeto novo

Acrescente um objeto ao array `projects` em `content/site.ts`. As rotas
`/pt/projetos/<slug>` e `/en/projetos/<slug>` são geradas sozinhas, e o card
aparece na home e na listagem.

## Estrutura

```
app/
  [lang]/
    layout.tsx              # root layout: <html lang>, nav, footer, JSON-LD
    page.tsx                # home
    sobre/page.tsx
    projetos/page.tsx       # listagem
    projetos/[slug]/page.tsx# case study
    not-found.tsx
  sitemap.ts  robots.ts  globals.css
components/                 # Nav, Footer, ProjectCard, Section, Reveal, ThemeToggle
content/                    # site.ts (conteúdo) + ui.ts (rótulos)
lib/                        # i18n.ts, config.ts
scripts/postbuild.mjs       # gera out/index.html (redirect por idioma) e out/404.html
```

## Publicar no GitHub Pages

O site é publicado em `https://robsonx4.github.io`, na raiz, sem subdiretório.

1. Crie o repositório `robsonx4/robsonx4.github.io` e faça push na branch `main`.
2. Em **Settings → Pages**, defina **Source: GitHub Actions**.
3. O workflow `.github/workflows/deploy.yml` builda e publica a cada push.
   Ele já usa a URL acima como padrão; não precisa configurar variável.

Para domínio próprio, adicione um arquivo `public/CNAME` com o domínio dentro e
crie a variável de repositório `SITE_URL` (Settings → Secrets and variables →
Actions → Variables) com a nova URL.

## Decisões técnicas

- **Export estático** (`output: 'export'`): sem servidor, sem custo, sem
  middleware. O redirecionamento de idioma da raiz é feito no cliente pelo
  `scripts/postbuild.mjs`.
- **`basePath` por variável de ambiente**, para o mesmo código funcionar em
  subdiretório e em domínio próprio.
- **Tema claro/escuro** aplicado antes do primeiro paint por um script inline,
  para não piscar branco. Preferência guardada em `localStorage`, com fallback
  para `prefers-color-scheme`.
- **`prefers-reduced-motion`** desliga as animações de entrada.
- **SEO**: canonical e `hreflang` por idioma, Open Graph, JSON-LD `Person`,
  sitemap e robots gerados no build.
