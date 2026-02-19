"use client";

import { motion } from "framer-motion";

const nodes = [
  { id: 1, x: "15%", y: "30%", label: "SOCIAL_MEDIA_AUTO" },
  { id: 2, x: "40%", y: "60%", label: "CRM_INTEGRATION" },
  { id: 3, x: "70%", y: "40%", label: "VIDEO_PIPELINE" },
  { id: 4, x: "85%", y: "70%", label: "AD_STRATEGY_AI" },
  { id: 5, x: "55%", y: "20%", label: "DATA_ANALYSIS_NODE" },
];

export const AutomationPanel = () => {
  return (
    <section className="w-full max-w-7xl px-6 mx-auto relative h-[600px] flex items-center">
      <div className="absolute left-6 top-0 border-l border-mushreds-purple/30 pl-6 py-12">
        <h2 className="text-4xl md:text-6xl font-black tracking-tighter uppercase italic leading-none">
          Inteligência <br /> em Rede
        </h2>
        <p className="text-zinc-600 mt-4 font-mono text-[10px] tracking-[0.3em] uppercase">
          [MODULE]: AUTOMATION_NETWORK_V1.0
        </p>
      </div>

      <div className="relative w-full h-[400px] mt-24">
        {/* NETWORK CONNECTIONS */}
        <svg className="absolute inset-0 w-full h-full">
          <motion.path
            d="M 15% 30% L 40% 60% L 70% 40% L 85% 70% L 55% 20% L 15% 30%"
            fill="none"
            stroke="rgba(138,43,226,0.2)"
            strokeWidth="1"
            initial={{ pathLength: 0, opacity: 0 }}
            whileInView={{ pathLength: 1, opacity: 1 }}
            transition={{ duration: 3, ease: "easeInOut" }}
          />
          <motion.path
            d="M 40% 60% L 55% 20% M 15% 30% L 70% 40%"
            fill="none"
            stroke="rgba(138,43,226,0.1)"
            strokeWidth="1"
            strokeDasharray="5 5"
          />
        </svg>

        {/* NODES */}
        {nodes.map((node) => (
          <motion.div
            key={node.id}
            initial={{ scale: 0, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ delay: node.id * 0.1, type: "spring" }}
            style={{ left: node.x, top: node.y }}
            className="absolute -translate-x-1/2 -translate-y-1/2 group cursor-crosshair"
          >
            <div className="relative">
              <div className="w-3 h-3 bg-mushreds-purple rounded-full shadow-[0_0_20px_rgba(138,43,226,1)] group-hover:scale-150 transition-transform duration-300" />
              <div className="absolute inset-0 w-3 h-3 bg-mushreds-purple rounded-full animate-ping opacity-40" />
            </div>
            
            <div className="absolute top-6 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
              <div className="bg-zinc-900 border border-mushreds-purple/50 px-3 py-1 rounded-sm whitespace-nowrap">
                <span className="font-mono text-[9px] text-mushreds-purple tracking-widest">
                  {node.label}
                </span>
              </div>
            </div>
          </motion.div>
        ))}

        {/* DATA PARTICLES */}
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            initial={{ 
              x: Math.random() * 100 + "%", 
              y: Math.random() * 100 + "%", 
              opacity: 0 
            }}
            animate={{ 
              opacity: [0, 0.5, 0],
              scale: [0.5, 1, 0.5],
            }}
            transition={{
              duration: Math.random() * 3 + 2,
              repeat: Infinity,
              delay: Math.random() * 5,
            }}
            className="absolute w-1 h-1 bg-mushreds-purple rounded-full blur-[1px] pointer-events-none"
          />
        ))}
      </div>

      <div className="absolute right-6 bottom-0 text-right opacity-20">
        <p className="font-mono text-[8px] text-zinc-500 uppercase tracking-[0.5em]">
          Mushreds Cognitive Architecture // Goiânia Node
        </p>
      </div>
    </section>
  );
};
