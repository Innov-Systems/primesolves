# Prime Solves

Landing page institucional em português para a Software House e seus futuros produtos SaaS. Implementação estática, com identidade azul-marinho, ilustrações originais em CSS/SVG e layout responsivo.

## Stack e execução

Next.js App Router, React, TypeScript strict, CSS Modules, Lucide React e fontes Manrope/Inter via `next/font/google`. Requer Node.js 20.9 ou superior e npm. O download das fontes durante o build requer internet.

```bash
npm ci
npm run dev
```

Acesse http://localhost:3000. Validações e produção:

```bash
npm run lint
npm run typecheck
npm run build
```

O build exporta o site estático para `out/`. Para o servidor de desenvolvimento use `npm run dev`. Como o projeto usa `output: 'export'`, publique `out/` com um servidor estático; `next start` não serve essa exportação. Exemplo de prévia da exportação:

```bash
npx serve out
```

## Organização

- `src/app`: página, layout, SEO, robots, sitemap, favicon temporário e imagem Open Graph.
- `src/components`: header com menu mobile, marca, contato, melhorias de rolagem e composições ilustrativas. As seções de conteúdo ficam no Server Component `src/app/page.tsx`, evitando componentes vazios e JavaScript desnecessário.
- `src/components/Site.module.css`: estilos responsivos dos componentes e seções.
- `src/styles/tokens.css`: cores, fontes, espaçamento e bordas.
- `src/data`: navegação, serviços, produtos, projetos e FAQ.
- `src/config/site.ts`: configuração e validação dos canais comerciais e domínio.
- `public/brand`, `public/images`: marca original e imagens dos projetos.

## Marca

Nenhum arquivo de logo foi fornecido na implementação inicial. O header e o rodapé usam apenas o nome em texto. Coloque a marca original em `public/brand/` e defina `logo: '/brand/nome-do-arquivo.svg'` em `src/config/site.ts`. Ajuste dimensões no componente `Brand.tsx` para a proporção original. Prefira uma versão que funcione em fundo escuro. O favicon de iniciais é temporário: substitua `src/app/icon.svg` pelo ícone oficial sem redesenhar a marca. A imagem Open Graph pode ser ajustada em `src/app/opengraph-image.tsx`.

## Conteúdo

Edite `src/data/services.ts` e `src/data/products.ts`. Produtos permanecem identificados como **em desenvolvimento**; as funcionalidades são planejadas e os nomes provisórios. Os botões “Tenho interesse” direcionam ao contato com o produto identificado, incluindo-o na mensagem de WhatsApp e no assunto do e-mail quando disponíveis.

Para adicionar projetos, edite `src/data/projects.ts`. Cada registro aceita título, descrição, categoria, visual ilustrativo, `image` opcional (caminho em `public/images`) e `url` opcional. O botão “Ver projeto” aparece apenas para URLs HTTP/HTTPS válidas. Troque as ilustrações pelas imagens reais e revise o aviso de representações em `page.tsx` quando todos os projetos tiverem imagens.

Links de navegação ficam em `src/data/navigation.ts`. Redes sociais reais podem ser adicionadas em `site.social`; apenas URLs válidas serão exibidas.

## Contato e domínio

Copie `.env.example` para `.env.local` e configure os dados reais:

```dotenv
NEXT_PUBLIC_SITE_URL=https://seu-dominio-real.com.br
NEXT_PUBLIC_WHATSAPP=5511999999999
NEXT_PUBLIC_EMAIL=comercial@seu-dominio-real.com.br
```

Os valores acima são exemplos de formato: não são dados da Prime Solves. WhatsApp deve conter apenas números, com código do país e DDD. Se os dados estiverem ausentes ou inválidos, os links não serão renderizados. Sem canais disponíveis, aparece um aviso honesto de preparação, sem botão inativo ou simulação de envio.

Sem domínio válido, o sitemap fica vazio e a indexação é desabilitada por metadata e robots. Com domínio configurado, canonical, Open Graph, sitemap e robots passam a usar a URL real. Refaça o build após configurar variáveis; elas são incorporadas ao site estático.

## Publicação

Configure as variáveis reais no ambiente de build, execute `npm ci` e `npm run build`, e publique `out/` em uma hospedagem estática (por exemplo, Cloudflare Pages, Netlify ou Vercel com exportação estática). Não há backend, banco, autenticação ou formulário. Preserve os arquivos de metadados e as rotas geradas na exportação. O conteúdo inicial não inclui rastreadores ou cookies de marketing.

## Acessibilidade e interações

HTML semântico, link de salto, foco visível, menu mobile com ARIA e Escape, FAQ com `details`/`summary` nativos, preferência de movimento reduzido e ilustrações com descrições acessíveis. Os efeitos de entrada são uma melhoria progressiva: o conteúdo continua disponível sem JavaScript. O portfólio não contém URLs ou resultados inventados.

## Pendências antes da publicação

- Fornecer marca e favicon oficiais.
- Configurar domínio, WhatsApp e e-mail reais.
- Adicionar imagens e URLs reais dos projetos, quando disponíveis.
- Adicionar redes sociais reais, se desejado.
- Revisar o conteúdo comercial e conferir o build final com as configurações de produção.

Não há pontuação Lighthouse declarada sem uma execução dessa ferramenta.
