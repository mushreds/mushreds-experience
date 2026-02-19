"use client";

import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { IntroHUD } from "@/components/IntroHUD";
import { GalleryGrid } from "@/components/GalleryGrid";
import { AutomationPanel } from "@/components/AutomationPanel";
import { AIPromptCTA } from "@/components/AIPromptCTA";
import { useIntroState } from "@/hooks/useIntroState";

export const MainExperience = () => {
  const { showIntro, completeIntro } = useIntroState();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted || showIntro === null) {
    return <div className="bg-[#050505] min-h-screen" />;
  }

  return (
    <>
      <AnimatePresence>
        {showIntro && <IntroHUD onComplete={completeIntro} />}
      </AnimatePresence>

      {/* BACKGROUND AMBIENCE */}
      <div className="fixed inset-0 bg-[#050505] z-0">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />
        <div className="absolute top-0 left-0 right-0 h-[500px] bg-mushreds-purple/10 blur-[120px] rounded-full -translate-y-1/2" />
      </div>

      <main className="relative z-10 flex flex-col items-center selection:bg-mushreds-purple selection:text-white">
        
        {/* HERO SECTION - REDESIGNED */}
        <section className="relative flex min-h-screen flex-col items-center justify-center px-6 text-center w-full max-w-7xl mx-auto">
          
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-8 px-4 py-1 border border-mushreds-purple/30 bg-mushreds-purple/5 rounded-full"
          >
            <span className="font-mono text-[10px] md:text-xs tracking-[0.3em] text-mushreds-purple uppercase">
              [AI_NODE_ACTIVE]: GOIÂNIA_HUB_CONNECTED
            </span>
          </motion.div>

          <div className="relative group">
            <motion.h1 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="text-7xl md:text-[12rem] font-black text-white tracking-[ -0.05em] leading-none uppercase italic italic-mushreds"
            >
              MUSHREDS
            </motion.h1>
            <div className="absolute inset-0 bg-mushreds-purple/20 blur-3xl -z-10 group-hover:bg-mushreds-purple/30 transition-colors duration-500" />
          </div>

          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="mt-12 space-y-4"
          >
            <p className="text-xl md:text-2xl text-zinc-400 max-w-2xl font-light leading-relaxed">
              Automação de elite e mídia sintética para marcas que dominam a nova era digital.
            </p>
            <div className="h-px w-24 bg-mushreds-purple mx-auto opacity-50" />
          </motion.div>

          {/* SCROLL INDICATOR */}
          <motion.div 
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="absolute bottom-12 flex flex-col items-center gap-4"
          >
            <span className="font-mono text-[9px] text-zinc-600 tracking-[0.4em] uppercase">Initialize Protocol</span>
            <div className="w-[1px] h-16 bg-gradient-to-b from-mushreds-purple to-transparent" />
          </motion.div>
        </section>

        <div className="w-full space-y-32 pb-32">
          <AutomationPanel />
          <GalleryGrid />
          <AIPromptCTA />
        </div>

        <footer className="w-full py-24 border-t border-white/5 flex flex-col items-center gap-12 bg-black">
          <div className="flex gap-16 font-mono text-[10px] text-zinc-500 uppercase tracking-[0.3em]">
            <a href="#" className="hover:text-mushreds-purple transition-colors">Instagram</a>
            <a href="#" className="hover:text-mushreds-purple transition-colors">WhatsApp</a>
            <a href="#" className="hover:text-mushreds-purple transition-colors">Agency_Node</a>
          </div>
          <div className="text-center space-y-2">
            <p className="text-zinc-700 font-mono text-[10px] tracking-widest uppercase">
              © 2026 Mushreds Intelligence Agency // Brazil // Goiânia
            </p>
            <div className="text-[8px] text-zinc-800 uppercase tracking-widest flex items-center gap-2 justify-center">
              <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
              All Systems Operational
            </div>
          </div>
        </footer>
      </main>

      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@100;300;400;900&family=Space+Mono&display=swap');
        
        .italic-mushreds {
          font-style: italic;
          text-shadow: 0 0 30px rgba(138, 43, 226, 0.3);
        }
      `}</style>
    </>
  );
};
