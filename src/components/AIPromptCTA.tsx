"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { leadService } from "@/services/leadService";

export const AIPromptCTA = () => {
  const [step, setStep] = useState<"input" | "thinking" | "result" | "lead">("input");
  const [query, setQuery] = useState("");
  const [response, setResponse] = useState("");
  const [lead, setLead] = useState({ name: "", contact: "" });

  const handleQuerySubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!query) return;
    setStep("thinking");
    const aiRes = await leadService.getAISuggestion(query);
    setResponse(aiRes);
    setStep("result");
  };

  const handleLeadSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await leadService.submitLead({ ...lead, query });
    alert("PROTOCOLO_ENVIADO. AGUARDE_CONTATO.");
    setStep("input");
    setQuery("");
    setLead({ name: "", contact: "" });
  };

  return (
    <section className="w-full max-w-4xl px-6 py-32 mx-auto">
      <div className="bg-zinc-950 border border-mushreds-purple/30 rounded-xl overflow-hidden shadow-[0_0_50px_rgba(138,43,226,0.1)]">
        {/* Terminal Header */}
        <div className="bg-zinc-900 px-4 py-2 flex items-center gap-2 border-b border-zinc-800">
          <div className="w-2 h-2 rounded-full bg-red-500/50" />
          <div className="w-2 h-2 rounded-full bg-yellow-500/50" />
          <div className="w-2 h-2 rounded-full bg-green-500/50" />
          <span className="ml-4 font-mono text-[10px] text-zinc-500 tracking-widest">
            MUSHREDS_AI_SOLUTIONS_PROMPT_V1.0
          </span>
        </div>

        <div className="p-8 font-mono text-sm min-h-[300px] flex flex-col justify-center">
          <AnimatePresence mode="wait">
            {step === "input" && (
              <motion.form
                key="input"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onSubmit={handleQuerySubmit}
                className="space-y-4"
              >
                <p className="text-zinc-400 font-mono text-sm">
                  {">"} Descreva seu desafio de marketing ou automação:
                </p>
                <input
                  type="text"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder="ex: escalar produção de conteúdo para instagram"
                  className="w-full bg-transparent border-b border-mushreds-purple/50 focus:border-mushreds-purple outline-none py-2 text-mushreds-purple"
                  autoFocus
                />
                <button type="submit" className="text-zinc-600 hover:text-mushreds-purple transition-colors uppercase tracking-[0.2em] text-[10px]">
                  [INICIAR_PROCESSAMENTO]
                </button>
              </motion.form>
            )}

            {step === "thinking" && (
              <motion.div
                key="thinking"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="flex flex-col items-center gap-4 text-zinc-500"
              >
                <p className="animate-pulse tracking-widest uppercase">ANALISANDO_REQUISITOS...</p>
                <div className="w-32 h-[1px] bg-zinc-800 overflow-hidden">
                  <motion.div
                    animate={{ x: ["-100%", "100%"] }}
                    transition={{ repeat: Infinity, duration: 1 }}
                    className="w-full h-full bg-mushreds-purple"
                  />
                </div>
              </motion.div>
            )}

            {step === "result" && (
              <motion.div
                key="result"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="space-y-6"
              >
                <p className="text-mushreds-purple leading-relaxed">
                  {">"} {response}
                </p>
                <button
                  onClick={() => setStep("lead")}
                  className="bg-mushreds-purple text-black px-6 py-2 font-black text-xs tracking-widest uppercase hover:bg-white transition-colors"
                >
                  Agendar Implementação
                </button>
              </motion.div>
            )}

            {step === "lead" && (
              <motion.form
                key="lead"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                onSubmit={handleLeadSubmit}
                className="space-y-4"
              >
                <p className="text-zinc-400 uppercase text-[10px] tracking-widest">Preencha para receber o protocolo completo:</p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <input
                    type="text"
                    placeholder="NOME"
                    required
                    value={lead.name}
                    onChange={(e) => setLead({ ...lead, name: e.target.value })}
                    className="bg-zinc-900 border border-zinc-800 p-3 outline-none focus:border-mushreds-purple text-white"
                  />
                  <input
                    type="text"
                    placeholder="WHATSAPP / EMAIL"
                    required
                    value={lead.contact}
                    onChange={(e) => setLead({ ...lead, contact: e.target.value })}
                    className="bg-zinc-900 border border-zinc-800 p-3 outline-none focus:border-mushreds-purple text-white"
                  />
                </div>
                <button type="submit" className="w-full border border-mushreds-purple text-mushreds-purple py-3 font-bold uppercase text-xs tracking-widest hover:bg-mushreds-purple hover:text-black transition-all">
                  ENVIAR_PROTOCOLO
                </button>
              </motion.form>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};
