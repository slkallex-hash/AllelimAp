import React from 'react';
import { motion } from 'motion/react';
import { Download, Smartphone, Shield, Zap } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-deep-black">
      {/* Cinematic Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[-20%] left-[-10%] w-[70%] h-[70%] bg-brand-primary/20 blur-[120px] rounded-full animate-pulse opacity-50" />
        <div className="absolute bottom-[-20%] right-[-10%] w-[60%] h-[60%] bg-neon-purple/20 blur-[120px] rounded-full animate-pulse delay-1000 opacity-50" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.05),transparent_70%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:60px_60px] [mask-image:radial-gradient(ellipse_at_center,black,transparent_80%)]" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10 w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-left"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 text-white/60 text-[10px] font-bold uppercase tracking-[0.2em] mb-8">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-primary"></span>
              </span>
              Próxima Geração de Produtividade
            </div>
            
            <h1 className="text-6xl md:text-8xl font-display font-extrabold text-white leading-[0.9] mb-8 tracking-tighter">
              A nova era da sua <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-white to-white/30">vida digital</span>
            </h1>
            
            <p className="text-lg md:text-xl text-slate-400 mb-12 max-w-xl leading-relaxed font-light">
              Domine sua rotina com o <span className="text-white font-medium">AlleApp</span>. 
              Uma experiência fluida, segura e inteligente, desenhada para quem exige o máximo de cada segundo.
            </p>

            <div className="flex flex-col sm:flex-row gap-5">
              <button className="group relative px-8 py-4 bg-white text-black rounded-2xl font-bold text-lg transition-all hover:scale-[1.02] active:scale-95 shadow-[0_0_30px_rgba(255,255,255,0.2)]">
                Baixar AlleApp
              </button>
              <button className="group px-8 py-4 bg-white/5 border border-white/10 text-white rounded-2xl font-bold text-lg hover:bg-white/10 transition-all flex items-center justify-center gap-2">
                <Smartphone size={20} className="text-brand-primary" />
                Ver Demo
              </button>
            </div>

            <div className="mt-16 flex items-center gap-8 border-t border-white/5 pt-10">
              <div>
                <div className="text-2xl font-bold text-white">10k+</div>
                <div className="text-xs text-slate-500 uppercase tracking-widest">Usuários</div>
              </div>
              <div className="w-px h-8 bg-white/10" />
              <div>
                <div className="text-2xl font-bold text-white">4.9/5</div>
                <div className="text-xs text-slate-500 uppercase tracking-widest">Avaliação</div>
              </div>
              <div className="w-px h-8 bg-white/10" />
              <div>
                <div className="text-2xl font-bold text-white">99.9%</div>
                <div className="text-xs text-slate-500 uppercase tracking-widest">Uptime</div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="hidden lg:block relative"
          >
            <div className="absolute inset-0 bg-brand-primary/20 blur-[100px] rounded-full animate-pulse" />
            <div className="relative glass-card rounded-[3rem] p-4 aspect-[9/16] w-[320px] mx-auto border-white/20">
              <div className="bg-deep-black rounded-[2.5rem] h-full w-full overflow-hidden relative">
                <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-brand-primary/20 to-transparent" />
                <div className="p-8 relative z-10">
                  <div className="w-12 h-12 bg-white/10 rounded-xl mb-6" />
                  <div className="h-4 w-3/4 bg-white/10 rounded-full mb-4" />
                  <div className="h-4 w-1/2 bg-white/10 rounded-full mb-12" />
                  
                  <div className="grid grid-cols-2 gap-4">
                    <div className="h-24 bg-white/5 rounded-2xl border border-white/10" />
                    <div className="h-24 bg-white/5 rounded-2xl border border-white/10" />
                    <div className="h-24 bg-white/5 rounded-2xl border border-white/10" />
                    <div className="h-24 bg-white/5 rounded-2xl border border-white/10" />
                  </div>
                </div>
              </div>
            </div>
            
            {/* Floating Elements */}
            <motion.div 
              animate={{ y: [0, -20, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-10 -right-10 glass-card p-6 rounded-2xl border-white/20"
            >
              <Zap className="text-neon-blue" size={32} />
            </motion.div>
            <motion.div 
              animate={{ y: [0, 20, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              className="absolute bottom-20 -left-20 glass-card p-6 rounded-2xl border-white/20"
            >
              <Shield className="text-neon-purple" size={32} />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
