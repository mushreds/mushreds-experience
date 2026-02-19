# Architecture 02: Tech Stack - Mushreds

## 1. Frontend Framework
- **Next.js 14+ (App Router)**: Escolhido pela otimização automática de imagens, suporte a Server Components e facilidade de deploy na Vercel (garantindo NFR-01).

## 2. Styling & Design System
- **Tailwind CSS**: Para estilização rápida e utilitária.
- **Vanta Black Backgrounds**: Implementação de fundos pretos profundos (#000000) com gradientes radiais sutis em roxo elétrico.

## 3. Animações & Gráficos
- **Framer Motion**: Principal biblioteca para animações de interface (HUD, transições de seções e efeitos hover).
- **Three.js / React Three Fiber**: (Opcional) Para o Painel de Automação Abstrato, caso seja necessário um visual 3D procedural.
- **Canvas API**: Para efeitos de "scan lines" e glitch com baixo consumo de memória.

## 4. Backend & Integrações
- **Next.js API Routes**: Para processamento do Prompt de Soluções.
- **Zod**: Validação de esquemas de dados de leads.
- **Resend / SendGrid**: Disparo de notificações de novos leads.

## 5. Deployment & Observability
- **Vercel**: Infraestrutura de Edge Computing para entrega global rápida.
- **Sentry**: Monitoramento de erros e performance (NFR-02).
- **Vercel Analytics**: Acompanhamento de KPIs de conversão do QR Code.
