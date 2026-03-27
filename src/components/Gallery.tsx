import React from 'react';
import { motion } from 'motion/react';
import { Zap, RefreshCw, Shield, Layout, Activity, Smartphone } from 'lucide-react';

export default function Gallery() {
  const screens = [
    { 
      id: 1, 
      title: "Neural Dashboard", 
      description: "Controle central com processamento em tempo real e interface adaptativa.",
      icon: <Zap size={24} />
    },
    { 
      id: 2, 
      title: "Quantum Calendar", 
      description: "Agendamento inteligente com previsão de rotina baseada em IA.",
      icon: <RefreshCw size={24} />
    },
    { 
      id: 3, 
      title: "Biometric Profile", 
      description: "Segurança de nível biométrico para proteção total da sua identidade digital.",
      icon: <Shield size={24} />
    },
    { 
      id: 4, 
      title: "Core Settings", 
      description: "Personalização profunda do sistema com ajustes de performance quântica.",
      icon: <Layout size={24} />
    },
    { 
      id: 5, 
      title: "Encrypted Chat", 
      description: "Comunicação ultra-segura com criptografia de ponta a ponta.",
      icon: <Activity size={24} />
    },
    { 
      id: 6, 
      title: "Data Analytics", 
      description: "Visualização de dados complexos com insights gerados por redes neurais.",
      icon: <Smartphone size={24} />
    },
  ];

  return (
    <section id="gallery" className="py-32 bg-deep-black relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-24">
          <div className="inline-block px-4 py-1.5 rounded-lg bg-neon-blue/10 border border-neon-blue/20 text-neon-blue text-xs font-bold uppercase tracking-[0.2em] mb-6">
            Interface Digital
          </div>
          <h3 className="text-4xl md:text-6xl font-display font-extrabold text-white mb-8 tracking-tighter">
            Conheça a interface por <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-blue to-neon-purple">dentro</span>
          </h3>
          <p className="text-slate-400 text-xl font-light">
            Telas desenhadas com foco na clareza e na beleza visual futurista.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {screens.map((screen, index) => (
            <motion.div
              key={screen.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group relative aspect-video rounded-3xl overflow-hidden shadow-2xl transition-all cursor-pointer border border-white/10 bg-white/5 hover:bg-white/10 p-8 flex flex-col justify-between"
            >
              <div className="flex justify-between items-start">
                <div className="w-12 h-12 rounded-2xl bg-neon-blue/20 flex items-center justify-center text-neon-blue group-hover:scale-110 transition-transform">
                  {screen.icon}
                </div>
                <div className="px-3 py-1 rounded-full bg-neon-blue/10 border border-neon-blue/20 text-[10px] font-bold text-neon-blue uppercase tracking-widest">
                  Ativo
                </div>
              </div>
              
              <div>
                <span className="text-neon-blue font-display font-bold text-xs uppercase tracking-widest block mb-2">Módulo Digital</span>
                <h4 className="text-white font-bold text-2xl tracking-tight mb-2">{screen.title}</h4>
                <p className="text-slate-500 text-sm font-light leading-relaxed">
                  {screen.description}
                </p>
              </div>
              
              {/* Scanline effect */}
              <div className="absolute inset-0 pointer-events-none bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] bg-[size:100%_2px,3px_100%] opacity-10" />
              
              {/* Hover Glow */}
              <div className="absolute inset-0 bg-gradient-to-br from-neon-blue/5 to-neon-purple/5 opacity-0 group-hover:opacity-100 transition-opacity" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
