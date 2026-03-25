import React from 'react';
import { motion } from 'motion/react';

export default function About() {
  return (
    <section id="about" className="py-32 bg-deep-black relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-96 h-96 bg-brand-primary/5 blur-[120px] rounded-full pointer-events-none" />
      
      <div className="max-w-5xl mx-auto px-6 relative z-10">
        <div className="flex flex-col items-center text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex flex-col items-center text-center w-full"
          >
            <div className="inline-block px-4 py-1.5 rounded-lg bg-brand-primary/10 border border-brand-primary/20 text-neon-blue text-xs font-bold uppercase tracking-[0.2em] mb-6">
              Nossa Tecnologia
            </div>
            <h2 className="text-4xl md:text-6xl font-display font-extrabold text-white mb-8 leading-tight tracking-tighter">
              A solução <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-blue to-brand-primary">definitiva</span> para o seu dia a dia.
            </h2>
            <p className="text-slate-400 text-xl mb-12 leading-relaxed font-light max-w-3xl mx-auto">
              O <span className="text-white font-medium">AlleApp</span> foi projetado para quem não aceita menos que a perfeição. Unimos inteligência artificial com design futurista para criar a experiência digital mais avançada do mercado.
            </p>
            
            <div className="grid sm:grid-cols-3 gap-6 w-full">
              {[
                { text: "Interface Neural Intuitiva", color: "text-neon-blue" },
                { text: "Sincronização Quântica", color: "text-neon-purple" },
                { text: "Segurança de Nível Militar", color: "text-neon-cyan" }
              ].map((item, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.2 }}
                  className="flex flex-col items-center gap-4 group p-8 rounded-3xl border border-white/5 bg-white/5 hover:border-brand-primary/30 transition-all duration-500 glass-morphism"
                >
                  <div className={`w-12 h-12 rounded-full border border-white/10 flex items-center justify-center group-hover:border-neon-blue/50 transition-colors bg-black/50`}>
                    <div className="w-3 h-3 bg-neon-blue rounded-full shadow-[0_0_12px_#00f2ff]" />
                  </div>
                  <span className="text-white font-medium text-lg tracking-tight text-center">{item.text}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
