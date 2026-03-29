import React from 'react';
import { motion } from 'motion/react';
import { Download, Settings, TrendingUp } from 'lucide-react';

const steps = [
  {
    icon: <Download size={32} className="text-neon-blue" />,
    title: "1. Baixe e Conecte",
    description: "Instale o AlleApp e conecte suas ferramentas favoritas em segundos. Sem código, sem complicação."
  },
  {
    icon: <Settings size={32} className="text-neon-purple" />,
    title: "2. Ative a Automação",
    description: "Escolha modelos prontos ou crie suas próprias regras. Diga ao app o que fazer e quando fazer."
  },
  {
    icon: <TrendingUp size={32} className="text-brand-primary" />,
    title: "3. Colha os Resultados",
    description: "O AlleApp trabalha em segundo plano 24/7. Ganhe tempo livre e foque em escalar seus ganhos."
  }
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-24 bg-deep-black relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent" />
      
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-display font-extrabold text-white mb-6 tracking-tight">
            Como funciona o <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-blue to-neon-purple">AlleApp</span>
          </h2>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto font-light">
            Três passos simples para transformar sua rotina e colocar suas tarefas no piloto automático.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 relative">
          {/* Connecting line for desktop */}
          <div className="hidden md:block absolute top-1/2 left-[10%] right-[10%] h-[1px] bg-white/10 -translate-y-1/2 z-0" />
          
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="relative z-10 flex flex-col items-center text-center"
            >
              <div className="w-20 h-20 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center mb-6 shadow-[0_0_30px_rgba(0,0,0,0.5)] backdrop-blur-xl">
                {step.icon}
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">{step.title}</h3>
              <p className="text-slate-400 leading-relaxed font-light">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
