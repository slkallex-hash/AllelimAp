import React from 'react';
import { motion } from 'motion/react';
import { Briefcase, Rocket, UserCheck, Globe, TrendingUp, ShieldCheck } from 'lucide-react';

const audiences = [
  {
    icon: <Briefcase className="text-neon-blue" size={32} />,
    title: "Empreendedores Digitais",
    description: "Automatize seu funil de vendas, suporte ao cliente e gestão de leads. Recupere 20h+ por semana para focar na estratégia de crescimento."
  },
  {
    icon: <Rocket className="text-neon-purple" size={32} />,
    title: "Agências de Performance",
    description: "Gerencie múltiplos clientes com fluxos de trabalho padronizados. Elimine erros humanos e entregue relatórios em tempo real sem esforço manual."
  },
  {
    icon: <UserCheck className="text-brand-primary" size={32} />,
    title: "Creators & Influencers",
    description: "Escalone sua presença digital. Automatize a distribuição de conteúdo, respostas a comentários e parcerias em todos os canais simultaneamente."
  },
  {
    icon: <Globe className="text-emerald-400" size={32} />,
    title: "Startups em Escala",
    description: "Conecte seu stack tecnológico inteiro. Do CRM ao suporte, garanta que sua operação rode como uma máquina perfeitamente lubrificada."
  }
];

export default function TargetAudience() {
  return (
    <section id="target-audience" className="py-32 bg-deep-black relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/5 to-transparent" />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-24">
          <div className="inline-block px-4 py-1.5 rounded-lg bg-neon-purple/10 border border-neon-purple/20 text-neon-purple text-xs font-bold uppercase tracking-[0.2em] mb-6">
            Público-Alvo
          </div>
          <h2 className="text-4xl md:text-6xl font-display font-extrabold text-white mb-8 tracking-tighter">
            Desenhado para quem <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-blue via-neon-purple to-brand-primary">domina o mercado.</span>
          </h2>
          <p className="text-xl text-white/40 max-w-2xl mx-auto font-light leading-relaxed">
            O AlleApp não é apenas uma ferramenta; é o motor de crescimento para os profissionais mais eficientes do mundo digital.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {audiences.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="p-10 rounded-[2.5rem] bg-white/[0.02] border border-white/5 hover:border-brand-primary/30 hover:bg-white/[0.04] transition-all group relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 p-6 opacity-5 group-hover:opacity-10 transition-opacity">
                {item.icon}
              </div>
              <div className="w-16 h-16 rounded-2xl bg-white/5 flex items-center justify-center mb-8 group-hover:scale-110 transition-transform relative z-10">
                {item.icon}
              </div>
              <h3 className="text-2xl font-bold text-white mb-4 relative z-10 tracking-tight">{item.title}</h3>
              <p className="text-white/40 leading-relaxed font-light text-sm relative z-10">{item.description}</p>
              
              <div className="mt-8 pt-6 border-t border-white/5 flex items-center gap-2 text-neon-blue text-xs font-bold opacity-0 group-hover:opacity-100 transition-all transform translate-y-2 group-hover:translate-y-0">
                VER CASO DE USO <TrendingUp size={14} />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
