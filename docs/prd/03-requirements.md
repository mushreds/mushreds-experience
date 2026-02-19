# PRD 03: Requisitos Técnicos e Restrições - Mushreds

## 1. Requisitos de Performance (NFR)
- **NFR-01**: LCP (Largest Contentful Paint) abaixo de 2.0s em dispositivos mobile.
- **NFR-02**: Score de Performance no Lighthouse > 90.
- **NFR-03**: Carregamento assíncrono de vídeos pesados para não bloquear o HUD inicial.

## 2. Requisitos de Design e UX
- **NFR-04**: Design 100% responsivo (foco total em mobile para QR Code).
- **NFR-05**: Fidelidade à paleta "Vanta Black" e Roxo Elétrico.
- **NFR-06**: Animações de 60fps para garantir fluidez futurista.

## 3. Restrições Técnicas (CON)
- **CON-01**: Deve funcionar perfeitamente em navegadores mobile (Chrome Android/Safari iOS).
- **CON-02**: O HUD intro deve ser ignorável (skip) em visitas subsequentes (via Cookies/LocalStorage).
- **CON-03**: Uso de bibliotecas de animação leves para não comprometer o SEO.

## 4. Stack Recomendada (Preliminar para o Architect)
- **Frontend**: Next.js (pela performance e SEO).
- **Animações**: Framer Motion ou GSAP.
- **Deployment**: Vercel ou similar.
