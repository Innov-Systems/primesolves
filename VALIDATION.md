# Validação — 3 de novembro de 2026

- `npm run lint`: aprovado, sem warnings.
- `npm run typecheck`: aprovado, TypeScript strict.
- `npm run build`: aprovado, exportação estática em `out/`, sem warnings.
- Chrome headless com Playwright: 320, 375, 390, 768, 1024, 1440 e 1920 px sem overflow horizontal.
- Menu mobile: abrir, navegar, fechar ao selecionar, Escape e retorno do foco aprovados.
- FAQ nativo: abertura e fechamento aprovados.
- Interesse em produto: identificação de Prime Agenda e rolagem ao contato aprovadas.
- Âncoras: destinos existentes verificados.
- axe-core: nenhuma violação detectada nas regras WCAG 2 A/AA e WCAG 2.1 AA em 1440 e 390 px, após revelar as seções pela rolagem. Isso não substitui uma auditoria manual completa.
- `prefers-reduced-motion`: rolagem automática confirmada.
- Nenhum erro de execução de página detectado pelo Playwright.
- Inspeção visual de capturas desktop e mobile realizada.
- Fontes computadas: Inter no corpo e Manrope nos títulos.
- JavaScript desativado: título e 15 cards renderizados pelo HTML estático.
- Metadata de título e bloqueio de indexação sem domínio configurado verificados.
- `npm audit --omit=dev`: nenhuma vulnerabilidade de produção detectada.

A auditoria completa do npm aponta 16 ocorrências moderadas relacionadas ao `minimatch` transitivo das ferramentas de lint. A correção automática sugerida envolve downgrades incompatíveis de ESLint/Next e não foi aplicada. Essas dependências de desenvolvimento não fazem parte da exportação estática.

Os testes de navegador usaram ferramentas instaladas em `/tmp/prime-solves-qa`, sem adicioná-las às dependências da landing page. Lighthouse não foi executado. Os canais de contato e URLs reais dos projetos não puderam ser testados porque ainda não foram fornecidos. A revisão final de SEO deve ser feita após configurar o domínio e gerar novamente o build.
