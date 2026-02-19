"use client";

import { useState, useEffect } from "react";
import { AnimatePresence } from "framer-motion";
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
    return <div className="bg-black min-h-screen" />;
  }

  return (
    <>
      <AnimatePresence>
        {showIntro && <IntroHUD onComplete={completeIntro} />}
      </AnimatePresence>

      <div className="fixed inset-0 bg-[radial-gradient(#1a1a1a_1px,transparent_1px)] [background-size:40px_40px] opacity-20 pointer-events-none" />

      <main className="relative z-10 flex min-h-screen flex-col items-center bg-black selection:bg-mushreds-purple selection:text-white">
        {/* HERO SECTION */}
        <section className="flex min-h-screen flex-col items-center justify-center p-6 md:p-24 w-full">
          <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-xs md:text-sm flex">
            <p className="fixed left-0 top-0 flex w-full justify-center border-b border-mushreds-purple/30 bg-black/80 pb-6 pt-8 backdrop-blur-2xl lg:static lg:w-auto lg:rounded-xl lg:border lg:bg-zinc-900/30 lg:p-4">
              [AI_STATUS]: GLOBAL_PROTOCOL_ACTIVE&nbsp;
            </p>
          </div>

          <div className="relative flex flex-col items-center">
            <h1 className="text-6xl md:text-[10rem] font-black text-white drop-shadow-[0_0_25px_rgba(138,43,226,0.6)] tracking-tighter italic text-center text-balance">
              MUSHREDS
            </h1>
            <div className="h-2 w-full bg-mushreds-purple/50 mt-[-10px] md:mt-[-20px] blur-sm animate-pulse" />
          </div>

          <div className="mt-12 text-center">
            <p className="text-lg md:text-xl text-zinc-500 max-w-prose font-light uppercase tracking-[0.3em] text-balance">
              A realidade acaba de ser automatizada.
            </p>
          </div>

          <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce flex flex-col items-center gap-2">
            <span className="text-[8px] font-mono text-zinc-700 tracking-[0.5em] uppercase">Scroll to explore</span>
            <div className="w-px h-12 bg-gradient-to-b from-mushreds-purple to-transparent" />
          </div>
        </section>

        <AutomationPanel />
        <GalleryGrid />
        <AIPromptCTA />

        <footer className="w-full py-24 border-t border-zinc-900 flex flex-col items-center gap-8 bg-zinc-950/50">
          <div className="flex gap-12 font-mono text-[10px] text-zinc-500 uppercase tracking-widest">
            <span>Instagram</span>
            <span>WhatsApp</span>
            <span>LinkedIn</span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <p className="text-zinc-700 font-mono text-[10px] tracking-widest uppercase text-center">
              © 2026 Mushreds Intelligence Agency // Goiânia Global Node
            </p>
            <p className="text-zinc-800 font-mono text-[8px] uppercase tracking-widest">
              Built with AI-OS Framework
            </p>
          </div>
        </footer>
      </main>
    </>
  );
};
