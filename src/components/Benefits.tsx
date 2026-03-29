import React from 'react';
import { motion } from 'motion/react';
import { Clock, DollarSign, Zap, ShieldCheck } from 'lucide-react';

const benefits = [
  {
    icon: <Clock size={28} className="text-neon-blue" />,
    title: "Economize 4h por dia",
    description: "Elimine tarefas manuais e repetitivas. O AlleApp faz o trabalho braçal enquanto você foca no estratégico."
  },
  {
    icon: <DollarSign size={28} className="text-brand-primary" />,
    title: "Ganhe Dinheiro Online",
    description: "Automatize vendas, respostas a clientes e processos de marketing para gerar renda passiva."
  },
  {
    icon: <Zap size={28} className="text-neon-purple" />,
    title: "Precisão de Máquina",
    description: "Zero erros humanos. Suas automações rodam exatamente como configuradas, 24 horas por dia, 7 dias por semana."
  },
  {
    icon: <ShieldCheck size={28} className="text-emerald-400" />,
    title: "Segurança Total",
    description: "Seus dados e conexões são protegidos com criptografia de ponta a ponta. Privacidade garantida."
  }
];

export default function Benefits() {
  return (
    <section id="benefits" className="py-24 bg-deep-black relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-brand-primary/10 blur-[150px] rounded-full pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-display font-extrabold text-white mb-6 tracking-tight">
            Por que escolher o <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-primary to-neon-blue">AlleApp?</span>
          </h2>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto font-light">
            Resultados reais para quem não tem tempo a perder.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="glass-card p-8 rounded-3xl border border-white/10 hover:border-white/20 transition-all group"
            >
              <div className="w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                {benefit.icon}
              </div>
              <h3 className="text-xl font-bold text-white mb-3">{benefit.title}</h3>
              <p className="text-slate-400 leading-relaxed font-light text-sm">
                {benefit.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
