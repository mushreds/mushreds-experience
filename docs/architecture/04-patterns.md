# Architecture 04: Patterns - Mushreds

## 1. Padrões de Codificação
- **Story-Driven Development (AIOS)**: Toda nova funcionalidade deve estar vinculada a uma story em `docs/stories/`.
- **Absolute Imports**: Usar `@/` para todos os imports de componentes e hooks (Constitution Principle VI).
- **Componentes Atômicos**: Separar lógica de UI (Framer Motion) de lógica de dados.

## 2. Estratégia de Animação (Futurista & Fluida)
### 2.1 Efeito Glitch & Scan
- Usar filtros CSS (hue-rotate, invert, blur) animados via Framer Motion em vez de scripts JS pesados.
- Animação de `scan line` deve ser um gradiente radial/linear infinito em overlay de 10% de opacidade.

### 2.2 Transição de Seções (Invisível)
- Implementar transições de scroll suave (Smooth Scroll) utilizando bibliotecas leves como `Lenis`.
- As seções devem "emergir" do fundo preto com animações de opacidade (0 -> 1) e escala (0.95 -> 1).

### 2.3 Ativos de Mídia (Looping)
- Vídeos devem ser exportados em formato **WebM (com fallback MP4)** para transparência e performance.
- Atributos obrigatórios: `muted`, `loop`, `playsinline`, `autoplay`.

## 3. SEO & Acessibilidade
- **SEO**: Meta-tags dinâmicas configuradas por página.
- **Acessibilidade**: Focar em contraste roxo/preto (min. 4.5:1) e navegação via teclado para o prompt de IA.
- **Failsafe**: Se o usuário desativar animações no sistema (Reduced Motion), a Intro deve ser pulada automaticamente para a Home estática.
