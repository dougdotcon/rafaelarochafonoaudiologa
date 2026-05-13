# Rafaela Rocha | Fonoaudióloga — Site

Site institucional em React (Vite) e Tailwind CSS para a fonoaudióloga **Rafaela Rocha**, com foco em autoridade, serviços e contato em **Campinas, SP**.

## Conteúdo e stack

- **React 19** + **TypeScript** + **Vite 6**
- **Tailwind CSS 4** (tema: verde suave e laranja pastel)
- **Motion** (animações), **Lucide** (ícones)
- Páginas em componente único: início (hero), destaques, sobre, especialidades, contato com mapa, rodapé e botão flutuante de WhatsApp

## Requisitos

- [Node.js](https://nodejs.org/) 20 ou superior (recomendado)

## Como rodar localmente

1. Instalar dependências:

   ```bash
   npm install
   ```

2. (Opcional) Copiar variáveis de ambiente:

   ```bash
   copy .env.example .env
   ```

   Ajuste `VITE_SITE_URL` para a URL real do site quando for publicar (afeta SEO: canonical, Open Graph, Twitter e dados estruturados).

3. Subir o servidor de desenvolvimento:

   ```bash
   npm run dev
   ```

   O app sobe em `http://localhost:3000` (porta definida no `package.json`).

## Scripts

| Comando        | Descrição                          |
| -------------- | ---------------------------------- |
| `npm run dev`  | Servidor de desenvolvimento        |
| `npm run build`| Build de produção em `dist/`       |
| `npm run preview` | Pré-visualização do build estático |
| `npm run lint` | Checagem TypeScript (`tsc --noEmit`) |

## SEO e favicon

- **Meta tags** (descrição, keywords, robots, geo, theme-color) e **Open Graph / Twitter Card** estão em `index.html`.
- **JSON-LD** (`WebSite` + `LocalBusiness`) no mesmo arquivo, com endereço e Instagram alinhados ao conteúdo do site.
- **Favicon e PWA leve:** `public/logo.png` é usado como `favicon`, `apple-touch-icon` e ícone do `site.webmanifest`. Mantenha a logo atualizada nessa pasta (ou copie a `logo.png` da raiz do projeto após alterações).
- **Imagem social:** `public/og-image.png` (cópia da foto de perfil) para `og:image` e `twitter:image`.
- **`robots.txt`** e **`sitemap.xml`** em `public/` — ao mudar o domínio, atualize também a linha `Sitemap:` em `robots.txt` e as URLs em `sitemap.xml` para coincidir com `VITE_SITE_URL`.
- O **Vite** substitui `%VITE_SITE_URL%` no HTML no build/dev; o fallback padrão está em `vite.config.ts` (`https://rafaelarocha.com` se a variável não existir).

## Assets na raiz do repositório

- `logo.png` e `rafa-perfil.png` na raiz continuam sendo importados pelo código React.
- Para **favicon e arquivos estáticos de URL fixa** (`/logo.png`, `/og-image.png`), use os arquivos em **`public/`** (já espelhados a partir da raiz no setup do projeto).

## Build de produção

```bash
npm run build
```

Envie o conteúdo da pasta `dist/` para o seu provedor (Netlify, Vercel, hospedagem estática, etc.) e configure HTTPS e domínio definitivo; em seguida alinhe `VITE_SITE_URL`, `sitemap.xml` e `robots.txt`.

## Licença

Apache-2.0 (conforme cabeçalho em `src/App.tsx`).
