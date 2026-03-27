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
              Atualizado ao vivo no AI Studio! 🚀
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold tracking-tighter mb-6 text-white leading-[1.1]">
              A Nova Era da Sua <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-primary via-neon-purple to-neon-blue">
                Vida Digital
              </span>
            </h1>
            
            <p className="text-lg md:text-xl text-white/60 mb-10 max-w-xl font-light leading-relaxed">
              Domine sua rotina com o AlleApp 2.0. Uma experiência fluida, segura e inteligente, desenhada para quem exige o máximo de cada segundo.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="px-8 py-4 rounded-full bg-white text-black font-semibold hover:scale-105 transition-transform flex items-center justify-center gap-2">
                <Download size={20} />
                Baixar Agora
              </button>
              <button className="px-8 py-4 rounded-full glass-card text-white font-semibold hover:bg-white/10 transition-colors flex items-center justify-center gap-2">
                <Smartphone size={20} />
                Versão Web
              </button>
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
                <div className="p-8 relative z-10 flex flex-col h-full">
                  {/* Futuristic App UI Mockup */}
                  <div className="flex items-center gap-4 mb-6">
                    <img src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=150&auto=format&fit=crop" alt="Avatar" className="w-12 h-12 rounded-xl object-cover border border-white/20" />
                    <div>
                      <div className="h-3 w-20 bg-white/20 rounded-full mb-2" />
                      <div className="h-2 w-12 bg-white/10 rounded-full" />
                    </div>
                  </div>
                  
                  <div className="relative w-full h-32 rounded-2xl overflow-hidden mb-6 border border-white/10">
                    <img src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=600&auto=format&fit=crop" alt="Dashboard" className="w-full h-full object-cover opacity-80" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex flex-col justify-end p-4">
                      <div className="h-3 w-24 bg-white/30 rounded-full mb-2" />
                      <div className="h-2 w-16 bg-white/20 rounded-full" />
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4 flex-1">
                    <div className="relative rounded-2xl overflow-hidden border border-white/10 group">
                      <img src="https://images.unsplash.com/photo-1614729939124-032f0b56c9ce?q=80&w=300&auto=format&fit=crop" alt="Feature 1" className="w-full h-full object-cover opacity-60 group-hover:opacity-100 transition-opacity" />
                    </div>
                    <div className="relative rounded-2xl overflow-hidden border border-white/10 group">
                      <img src="https://images.unsplash.com/photo-1635070041078-e363dbe005cb?q=80&w=300&auto=format&fit=crop" alt="Feature 2" className="w-full h-full object-cover opacity-60 group-hover:opacity-100 transition-opacity" />
                    </div>
                    <div className="relative rounded-2xl overflow-hidden border border-white/10 group">
                      <img src="https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?q=80&w=300&auto=format&fit=crop" alt="Feature 3" className="w-full h-full object-cover opacity-60 group-hover:opacity-100 transition-opacity" />
                    </div>
                    <div className="relative rounded-2xl overflow-hidden border border-white/10 group">
                      <img src="https://images.unsplash.com/photo-1634152962476-4b8a00e1915c?q=80&w=300&auto=format&fit=crop" alt="Feature 4" className="w-full h-full object-cover opacity-60 group-hover:opacity-100 transition-opacity" />
                    </div>
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
