"use client";

import { motion } from "framer-motion";
import { GalleryItem } from "./GalleryItem";
import galleryData from "@/data/gallery.json";

export const GalleryGrid = () => {
  return (
    <section className="w-full max-w-7xl px-6 py-24 mx-auto">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        className="mb-12 border-l-4 border-mushreds-purple pl-6"
      >
        <h2 className="text-3xl md:text-5xl font-black tracking-tighter uppercase italic">
          Sonhos Sintéticos
        </h2>
        <p className="text-zinc-500 mt-2 font-mono text-sm uppercase">
          [PORTFOLIO_MODULE]: MEDIA_GENERATION_VIA_NEURAL_NETWORKS
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {galleryData.map((item) => (
          <GalleryItem key={item.id} item={item} />
        ))}
      </div>
      
      <div className="mt-8 text-center">
        <p className="text-zinc-600 text-xs font-mono animate-pulse">
          DESLOCANDO LIMITES DA REALIDADE...
        </p>
      </div>
    </section>
  );
};
