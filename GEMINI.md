# Gemini CLI Mandates - Synkra AIOS

Este documento define as regras fundamentais para interações do Gemini CLI neste repositório. Estas instruções têm precedência absoluta sobre comportamentos padrão.

## ⚖️ Mandatos da Constituição (Inegotificáveis)

1. **CLI First**: Toda funcionalidade deve ser operável via CLI. A UI é secundária e meramente observacional.
2. **Story-Driven Development**: Nenhum código deve ser escrito sem uma Story associada em `docs/stories/`.
3. **Agent Authority**: Respeite as autoridades exclusivas de cada agente (ex: `@devops` para push/PR, `@architect` para decisões técnicas).
4. **No Invention**: Não invente requisitos. Tudo deve derivar de PRDs, Arquitetura ou Stories existentes.
5. **Quality First**: Código só é considerado completo se passar em todos os Gates (lint, test, typecheck).

## 🤖 Ativação de Agentes

Sempre que um agente for solicitado (ex: `@dev`, `@qa`):
1. Priorize as definições em `.gemini/rules/AIOS/agents/*.md`.
2. Se ausentes, use `.aios-core/development/agents/*.md`.
3. Utilize o script `node .aios-core/development/scripts/generate-greeting.js <agent-id>` para saudações.

## 🛠️ Workflow de Desenvolvimento

Para cada tarefa/story:
1. **Research**: Valide o estado atual em `docs/stories/` e artefatos de planejamento.
2. **Strategy**: Proponha mudanças alinhadas à arquitetura do sistema.
3. **Execution**: Implemente de forma cirúrgica, atualizando checklists e listas de arquivos na Story.
4. **Validation**: Execute obrigatoriamente:
   - `npm run lint`
   - `npm run typecheck`
   - `npm test`

## 📂 Mapa do Projeto
- Framework: `.aios-core/`
- Stories: `docs/stories/`
- Planejamento: `docs/prd/`, `docs/architecture/`
- Configuração Gemini: `.gemini/`

---
*Gerado automaticamente para alinhar Gemini CLI aos padrões Synkra AIOS.*
