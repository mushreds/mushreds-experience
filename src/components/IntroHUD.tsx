"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

interface IntroHUDProps {
  onComplete: () => void;
}

export const IntroHUD = ({ onComplete }: IntroHUDProps) => {
  const [metadata, setMetadata] = useState({
    ip: "192.168.1.1",
    location: "GOIÂNIA, BR",
    device: "MOBILE_DEVICE_DETECTED",
  });

  useEffect(() => {
    // Simulação de delay para a animação e depois completar
    const timer = setTimeout(() => {
      onComplete();
    }, 3500);

    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-black overflow-hidden"
    >
      {/* Scan Line Animation */}
      <motion.div
        initial={{ top: "-10%" }}
        animate={{ top: "110%" }}
        transition={{ duration: 2.5, ease: "linear", repeat: Infinity }}
        className="absolute left-0 right-0 h-[2px] bg-mushreds-purple shadow-[0_0_15px_rgba(138,43,226,1)] z-10"
      />

      {/* Glitch Overlay */}
      <motion.div
        animate={{
          opacity: [0, 0.2, 0, 0.3, 0.1, 0],
          x: [0, -5, 5, -2, 2, 0],
        }}
        transition={{ duration: 0.2, repeat: Infinity, repeatType: "mirror" }}
        className="absolute inset-0 bg-mushreds-purple/10 pointer-events-none"
      />

      {/* HUD Content */}
      <div className="relative z-20 font-mono text-mushreds-purple space-y-2 text-xs md:text-sm">
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          [MUSHREDS_PROTOCOL_INITIALIZED]
        </motion.p>
        
        <div className="space-y-1 border-l-2 border-mushreds-purple pl-4">
          <motion.p
            initial={{ x: -20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            DETECTED_SOURCE: PHYSICAL_QR_ENTRY
          </motion.p>
          <motion.p
            initial={{ x: -20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.8 }}
          >
            LOCATION: {metadata.location}
          </motion.p>
          <motion.p
            initial={{ x: -20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 1.1 }}
          >
            DEVICE: {metadata.device}
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="mt-8"
        >
          <p className="animate-pulse">RUNNING_AI_ADAPTATION_MODULE...</p>
          <div className="w-48 h-1 bg-zinc-900 mt-2 overflow-hidden">
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: "100%" }}
              transition={{ duration: 1.5, delay: 1.5 }}
              className="h-full bg-mushreds-purple"
            />
          </div>
        </motion.div>
      </div>

      {/* Grid Background Effect */}
      <div className="absolute inset-0 opacity-20 pointer-events-none" 
           style={{ backgroundImage: 'radial-gradient(#8A2BE2 0.5px, transparent 0.5px)', backgroundSize: '20px 20px' }} />
    </motion.div>
  );
};
