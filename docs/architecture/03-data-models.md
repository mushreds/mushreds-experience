# Architecture 03: Data Models - Mushreds

## 1. Ativos de Mídia (AI Gallery Item)
Estrutura para as imagens e vídeos gerados por IA:
```json
{
  "id": "uuid",
  "type": "video | image",
  "src": "url",
  "thumbnail": "url",
  "prompt": "string (The original AI command)",
  "category": "automation | art | video",
  "priority": "number"
}
```

## 2. Captura de Leads (Prompt Submission)
Estrutura para o histórico de interações com o "Prompt de Soluções":
```json
{
  "id": "uuid",
  "timestamp": "iso-date",
  "user_query": "string",
  "ai_suggestion": "string",
  "lead_data": {
    "name": "string?",
    "contact": "string?",
    "source": "qr-code | web"
  },
  "status": "new | contacted | converted"
}
```

## 3. Configurações Globais (System State)
```json
{
  "hasSeenIntro": "boolean (Stored in LocalStorage)",
  "theme": "dark (Fixed)",
  "locale": "en | pt-br"
}
```
