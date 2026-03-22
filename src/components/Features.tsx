import React from 'react';
import { motion } from 'motion/react';
import { RefreshCw, ShieldCheck, Smartphone, Zap } from 'lucide-react';

export default function Features() {
  return (
    <section id="features" className="py-32 bg-deep-black relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-24">
          <div className="inline-block px-4 py-1.5 rounded-lg bg-brand-primary/10 border border-brand-primary/20 text-brand-primary text-[10px] font-bold uppercase tracking-[0.3em] mb-6">
            Excelência Técnica
          </div>
          <h3 className="text-4xl md:text-6xl font-display font-extrabold text-white mb-8 tracking-tighter">
            Engenharia de ponta para <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-white to-white/40">resultados superiores</span>
          </h3>
          <p className="text-slate-500 text-xl font-light">
            Cada linha de código foi escrita para garantir que você tenha a ferramenta mais poderosa do mercado em suas mãos.
          </p>
        </div>

        <div className="grid md:grid-cols-6 gap-6">
          {/* Main Feature - Bento Large */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="md:col-span-4 relative group"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent rounded-[2.5rem] transition-all duration-500 group-hover:from-brand-primary/10" />
            <div className="relative glass-card p-10 rounded-[2.5rem] hover:border-brand-primary/30 transition-all duration-500 h-full flex flex-col md:flex-row items-center gap-10">
              <div className="w-32 h-32 rounded-3xl bg-white/5 text-brand-primary flex items-center justify-center group-hover:bg-brand-primary group-hover:text-white group-hover:shadow-[0_0_40px_rgba(59,130,246,0.4)] transition-all duration-500">
                <Zap size={64} />
              </div>
              <div className="flex-1 text-center md:text-left">
                <h4 className="text-3xl font-display font-bold text-white mb-4 tracking-tight">Velocidade Absoluta</h4>
                <p className="text-slate-400 text-lg leading-relaxed font-light">Nossa engine proprietária processa dados em microssegundos. Sinta a fluidez de uma interface que responde antes mesmo de você tocar.</p>
              </div>
            </div>
          </motion.div>

          {/* Side Feature 1 - Bento Small */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="md:col-span-2 relative group"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-neon-purple/20 to-transparent rounded-[2.5rem] transition-all duration-500" />
            <div className="relative glass-card p-10 rounded-[2.5rem] hover:border-neon-purple/30 transition-all duration-500 h-full flex flex-col justify-between">
              <ShieldCheck size={40} className="text-neon-purple mb-8" />
              <div>
                <h4 className="text-2xl font-display font-bold text-white mb-2 tracking-tight">Privacidade de Elite</h4>
                <p className="text-slate-500 text-sm font-light">Criptografia de nível militar. Seus dados nunca saem do seu dispositivo sem sua permissão explícita.</p>
              </div>
            </div>
          </motion.div>

          {/* Side Feature 2 - Bento Small */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="md:col-span-2 relative group"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent rounded-[2.5rem] transition-all duration-500 group-hover:from-neon-blue/10" />
            <div className="relative glass-card p-10 rounded-[2.5rem] hover:border-neon-blue/30 transition-all duration-500 h-full flex flex-col justify-between">
              <Smartphone size={40} className="text-neon-blue mb-8" />
              <div>
                <h4 className="text-2xl font-display font-bold text-white mb-2 tracking-tight">Ecossistema Fluido</h4>
                <p className="text-slate-500 text-sm font-light">Sincronização instantânea entre todos os seus dispositivos. Comece no celular, termine no desktop.</p>
              </div>
            </div>
          </motion.div>

          {/* Main Feature 2 - Bento Large */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="md:col-span-4 relative group"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent rounded-[2.5rem] transition-all duration-500 group-hover:from-brand-primary/10" />
            <div className="relative glass-card p-10 rounded-[2.5rem] hover:border-brand-primary/30 transition-all duration-500 h-full flex flex-col md:flex-row items-center gap-10">
              <div className="flex-1 text-center md:text-left">
                <h4 className="text-3xl font-display font-bold text-white mb-4 tracking-tight">IA Preditiva</h4>
                <p className="text-slate-400 text-lg leading-relaxed font-light">O AlleApp antecipa suas necessidades. Nossa IA aprende seus padrões e organiza seu dia de forma autônoma e inteligente.</p>
              </div>
              <div className="w-32 h-32 rounded-full bg-white/5 text-brand-primary flex items-center justify-center group-hover:bg-brand-primary group-hover:text-white group-hover:shadow-[0_0_40px_rgba(59,130,246,0.4)] transition-all duration-500">
                <RefreshCw size={64} className="animate-spin-slow" />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
