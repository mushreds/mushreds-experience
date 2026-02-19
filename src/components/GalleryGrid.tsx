"use client";

import { motion } from "framer-motion";
import { GalleryItem } from "./GalleryItem";
import galleryData from "@/data/gallery.json";

export const GalleryGrid = () => {
  return (
    <section className="w-full max-w-7xl px-6 mx-auto">
      <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          className="border-l-4 border-mushreds-purple pl-8"
        >
          <h2 className="text-5xl md:text-7xl font-black tracking-tighter uppercase italic leading-[0.8]">
            Sonhos <br /> Sintéticos
          </h2>
          <p className="text-zinc-500 mt-6 font-mono text-[10px] tracking-[0.4em] uppercase">
            [ARCHIVE_01]: SYNTHETIC_MEDIA_PORTFOLIO
          </p>
        </motion.div>
        
        <div className="hidden md:block text-right">
          <p className="text-zinc-700 font-mono text-[9px] uppercase tracking-[0.3em] max-w-xs leading-relaxed">
            Exploração visual de ativos gerados por redes neurais generativas sob o comando criativo da Mushreds Intelligence.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
        {galleryData.map((item, index) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            <GalleryItem item={item} />
          </motion.div>
        ))}
      </div>
      
      <div className="mt-24 border-t border-zinc-900 pt-8 flex justify-between items-center opacity-30">
        <span className="font-mono text-[8px] tracking-[0.5em] uppercase text-zinc-500">End of Archive</span>
        <div className="flex gap-2">
          <div className="w-8 h-[1px] bg-mushreds-purple" />
          <div className="w-2 h-[1px] bg-mushreds-purple" />
        </div>
      </div>
    </section>
  );
};
