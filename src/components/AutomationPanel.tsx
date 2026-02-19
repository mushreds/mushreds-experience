"use client";

import { motion } from "framer-motion";

const nodes = [
  { id: 1, x: "10%", y: "20%", label: "SOCIAL_MEDIA_AUTO" },
  { id: 2, x: "30%", y: "50%", label: "CRM_INTEGRATION" },
  { id: 3, x: "60%", y: "30%", label: "VIDEO_PIPELINE" },
  { id: 4, x: "85%", y: "60%", label: "AD_STRATEGY_AI" },
  { id: 5, x: "50%", y: "80%", label: "DATA_ANALYSIS_NODE" },
];

export const AutomationPanel = () => {
  return (
    <section className="w-full max-w-7xl px-6 py-32 mx-auto relative overflow-hidden bg-black">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        className="mb-16 text-right"
      >
        <h2 className="text-3xl md:text-5xl font-black tracking-tighter uppercase italic">
          Inteligência em Rede
        </h2>
        <p className="text-zinc-500 mt-2 font-mono text-sm uppercase">
          [INFOGRAPHIC_MODULE]: NEURAL_NETWORK_VISUALIZATION
        </p>
      </motion.div>

      <div className="relative h-[400px] w-full border border-zinc-900 rounded-lg bg-zinc-950/50 backdrop-blur-sm overflow-hidden">
        {/* SVG for connections */}
        <svg className="absolute inset-0 w-full h-full pointer-events-none">
          <motion.path
            d="M 10% 20% L 30% 50% L 60% 30% L 85% 60% L 50% 80% Z"
            fill="none"
            stroke="rgba(138,43,226,0.3)"
            strokeWidth="1"
            initial={{ pathLength: 0 }}
            whileInView={{ pathLength: 1 }}
            transition={{ duration: 2, ease: "easeInOut" }}
          />
        </svg>

        {/* Nodes */}
        {nodes.map((node) => (
          <motion.div
            key={node.id}
            initial={{ scale: 0, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ delay: node.id * 0.2 }}
            style={{ left: node.x, top: node.y }}
            className="absolute -translate-x-1/2 -translate-y-1/2 flex flex-col items-center"
          >
            <div className="w-4 h-4 bg-mushreds-purple rounded-full shadow-[0_0_15px_rgba(138,43,226,1)] animate-pulse" />
            <span className="mt-2 font-mono text-[8px] md:text-[10px] text-mushreds-purple uppercase whitespace-nowrap bg-black/50 px-2 py-1 rounded border border-mushreds-purple/20">
              {node.label}
            </span>
          </motion.div>
        ))}

        {/* Floating Data Particles */}
        {[...Array(10)].map((_, i) => (
          <motion.div
            key={i}
            initial={{ x: Math.random() * 100 + "%", y: "110%", opacity: 0 }}
            animate={{ y: "-10%", opacity: [0, 1, 0] }}
            transition={{
              duration: Math.random() * 5 + 3,
              repeat: Infinity,
              ease: "linear",
              delay: Math.random() * 5,
            }}
            className="absolute w-px h-8 bg-gradient-to-t from-mushreds-purple to-transparent pointer-events-none"
          />
        ))}
      </div>
    </section>
  );
};
