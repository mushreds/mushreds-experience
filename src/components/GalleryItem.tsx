"use client";

import { motion } from "framer-motion";
import { useState } from "react";

interface GalleryItemProps {
  item: {
    id: string;
    type: string;
    src: string;
    prompt: string;
  };
}

export const GalleryItem = ({ item }: GalleryItemProps) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="relative aspect-square md:aspect-video bg-zinc-900 overflow-hidden group border border-mushreds-purple/10"
    >
      {item.type === "image" ? (
        <img
          src={item.src}
          alt={item.prompt}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          loading="lazy"
        />
      ) : (
        <video
          src={item.src}
          muted
          loop
          playsInline
          autoPlay
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
      )}

      {/* Hover Overlay with Prompt */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: isHovered ? 1 : 0 }}
        className="absolute inset-0 bg-black/80 flex items-center justify-center p-6 backdrop-blur-sm pointer-events-none"
      >
        <p className="font-mono text-mushreds-purple text-xs md:text-sm leading-relaxed text-center">
          <span className="text-white/50 block mb-2 uppercase tracking-widest text-[10px]">AI_PROMPT_INPUT:</span>
          "{item.prompt}"
        </p>
      </motion.div>

      {/* Decorative Corner */}
      <div className="absolute top-2 right-2 w-4 h-4 border-t border-r border-mushreds-purple opacity-50" />
      <div className="absolute bottom-2 left-2 w-4 h-4 border-b border-l border-mushreds-purple opacity-50" />
    </motion.div>
  );
};
