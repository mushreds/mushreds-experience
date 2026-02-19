# Architecture 01: System Design - Mushreds

## 1. Visão Geral da Arquitetura
O sistema será construído como uma **Single Page Application (SPA)** imersiva utilizando **Next.js**. A arquitetura foca em renderização híbrida (SSG para velocidade e CSR para animações complexas) e uma camada de estado leve para gerenciar a progressão da experiência do usuário (Intro -> Main Content).

## 2. Componentes de Camada (Layered Architecture)
### 2.1 Camada de Introdução (HUD Engine)
- **Responsabilidade**: Gerenciar o estado de inicialização, animações de glitch e coleta de metadados.
- **Tecnologia**: React State + Framer Motion.
- **Persistence**: LocalStorage para verificar se o usuário já viu a intro (NFR-02).

### 2.2 Camada de Conteúdo (Core Content)
- **Responsabilidade**: Renderizar a Galeria de IA e o Painel de Automação.
- **Performance**: Lazy loading de ativos de mídia e suspensão de animações fora da viewport para garantir 60fps (NFR-06).

### 2.3 Camada de Interação (Prompt AI Sim)
- **Responsabilidade**: Interface de chat/prompt para captura de leads.
- **Backend**: API Routes do Next.js integradas a um serviço de LLM (OpenAI/Gemini) ou lógica determinística para respostas rápidas.

## 3. Fluxo de Dados
1. **Request**: Usuário escaneia QR Code.
2. **Initialization**: Client-side detecta metadados (IP/Device) para exibição no HUD.
3. **Transition**: HUD finaliza -> Unmount do componente Intro -> Mount/Animate das seções da Home.
4. **Interaction**: Prompt de Soluções -> API Route -> Lead Store -> Resposta visual.
