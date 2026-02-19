export interface LeadData {
  name: string;
  contact: string;
  query: string;
}

export const leadService = {
  getAISuggestion: async (query: string): Promise<string> => {
    // Simulação de processamento de IA
    await new Promise((resolve) => setTimeout(resolve, 1500));
    
    const responses = [
      "Análise completa. Recomendo automação de pipeline de conteúdo com geração de imagens sintéticas para escala de 10x.",
      "Identificada oportunidade de otimização em tráfego pago via agentes de análise preditiva. Protocolo de escala pronto.",
      "Seu problema pode ser resolvido com uma rede neural personalizada para atendimento e qualificação de leads 24/7.",
    ];
    
    return responses[Math.floor(Math.random() * responses.length)];
  },

  submitLead: async (data: LeadData): Promise<boolean> => {
    console.log("Submitting lead to Mushreds DB:", data);
    await new Promise((resolve) => setTimeout(resolve, 1000));
    return true;
  }
};
