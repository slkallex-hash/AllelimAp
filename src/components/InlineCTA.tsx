import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';

interface InlineCTAProps {
  title: string;
  buttonText: string;
}

export default function InlineCTA({ title, buttonText }: InlineCTAProps) {
  return (
    <div className="py-12">
      <motion.div
        initial={{ opacity: 0, scale: 0.98 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        className="max-w-4xl mx-auto px-6"
      >
        <div className="p-8 md:p-12 rounded-[2rem] bg-gradient-to-r from-brand-primary/20 to-neon-purple/20 border border-white/10 flex flex-col md:flex-row items-center justify-between gap-8 backdrop-blur-sm">
          <h3 className="text-2xl md:text-3xl font-bold text-white text-center md:text-left leading-tight">
            {title}
          </h3>
          <button className="whitespace-nowrap px-8 py-4 bg-white text-deep-black font-bold rounded-2xl hover:scale-105 transition-all flex items-center gap-2 shadow-xl">
            {buttonText}
            <ArrowRight size={20} />
          </button>
        </div>
      </motion.div>
    </div>
  );
}
