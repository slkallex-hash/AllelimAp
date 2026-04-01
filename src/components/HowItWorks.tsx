import React from 'react';
import { motion } from 'motion/react';
import { Download, Settings, TrendingUp } from 'lucide-react';

const steps = [
  {
    icon: <Download size={32} className="text-neon-blue" />,
    title: "1. Baixe e Conecte",
    description: "Instale o AlleApp e conecte suas ferramentas favoritas em segundos. Sem código, sem complicação.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=800&auto=format&fit=crop"
  },
  {
    icon: <Settings size={32} className="text-neon-purple" />,
    title: "2. Ative a Automação",
    description: "Escolha modelos prontos ou crie suas próprias regras. Diga ao app o que fazer e quando fazer.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=800&auto=format&fit=crop"
  },
  {
    icon: <TrendingUp size={32} className="text-brand-primary" />,
    title: "3. Colha os Resultados",
    description: "O AlleApp trabalha em segundo plano 24/7. Ganhe tempo livre e foque em escalar seus ganhos.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=800&auto=format&fit=crop"
  }
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-32 bg-deep-black relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent" />
      
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-24">
          <div className="inline-block px-4 py-1.5 rounded-lg bg-neon-blue/10 border border-neon-blue/20 text-neon-blue text-xs font-bold uppercase tracking-[0.2em] mb-6">
            Processo
          </div>
          <h2 className="text-4xl md:text-6xl font-display font-extrabold text-white mb-8 tracking-tighter">
            Como funciona o <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-blue to-neon-purple">AlleApp</span>
          </h2>
          <p className="text-xl text-white/40 max-w-2xl mx-auto font-light leading-relaxed">
            Três passos simples para transformar sua rotina e colocar suas tarefas no piloto automático.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-12 relative">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="relative z-10 flex flex-col items-center text-center group"
            >
              <div className="w-24 h-24 rounded-3xl bg-white/5 border border-white/10 flex items-center justify-center mb-8 shadow-[0_0_30px_rgba(0,0,0,0.5)] backdrop-blur-xl group-hover:scale-110 transition-transform">
                {step.icon}
              </div>
              <h3 className="text-2xl font-bold text-white mb-4 tracking-tight">{step.title}</h3>
              <p className="text-white/40 leading-relaxed font-light mb-8 text-sm">
                {step.description}
              </p>
              
              {/* Mocked Screenshot */}
              <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden border border-white/10 shadow-2xl group-hover:border-neon-blue/30 transition-colors">
                <img 
                  src={step.image} 
                  alt={step.title} 
                  className="w-full h-full object-cover opacity-60 group-hover:opacity-100 transition-opacity duration-500"
                  loading="lazy"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-deep-black via-transparent to-transparent" />
                
                {/* Overlay details */}
                <div className="absolute bottom-4 left-4 right-4 p-4 rounded-xl bg-white/5 md:backdrop-blur-md border border-white/10">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-emerald-500" />
                    <span className="text-[10px] text-white/60 font-bold uppercase tracking-widest">Módulo Ativo</span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
