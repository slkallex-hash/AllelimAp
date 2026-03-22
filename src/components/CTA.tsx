import React from 'react';
import { motion } from 'motion/react';
import { Download } from 'lucide-react';

export default function CTA() {
  return (
    <section className="py-32 bg-deep-black relative overflow-hidden">
      <div className="absolute inset-0 bg-brand-primary/5 blur-[120px] rounded-full animate-pulse -z-10" />
      
      <div className="max-w-5xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative glass-card rounded-[3rem] p-12 md:p-24 text-center overflow-hidden"
        >
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-brand-primary/10 via-transparent to-neon-purple/10 -z-10" />
          
          <h2 className="text-4xl md:text-7xl font-display font-extrabold text-white mb-8 tracking-tighter leading-tight">
            Pronto para o <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-white to-white/40">próximo nível?</span>
          </h2>
          
          <p className="text-xl text-slate-400 mb-12 max-w-2xl mx-auto font-light">
            Junte-se a milhares de usuários que já transformaram sua rotina digital com o AlleApp.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <button className="group relative px-10 py-5 bg-white text-black rounded-2xl font-bold text-xl transition-all hover:scale-105 active:scale-95 shadow-[0_0_40px_rgba(255,255,255,0.2)]">
              Baixar Agora Gratuitamente
            </button>
          </div>
          
          <div className="mt-12 text-sm text-slate-500 flex items-center justify-center gap-6">
            <span className="flex items-center gap-2">✓ Sem anúncios</span>
            <span className="flex items-center gap-2">✓ Sem taxas ocultas</span>
            <span className="flex items-center gap-2">✓ Suporte 24/7</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
