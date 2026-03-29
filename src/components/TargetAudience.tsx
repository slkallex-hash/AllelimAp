import React from 'react';
import { motion } from 'motion/react';
import { Briefcase, Rocket, UserCheck, Globe } from 'lucide-react';

const audiences = [
  {
    icon: <Briefcase className="text-neon-blue" size={32} />,
    title: "Empreendedores",
    description: "Automatize processos de vendas e suporte para focar no crescimento do seu negócio."
  },
  {
    icon: <Rocket className="text-neon-purple" size={32} />,
    title: "Agências & Freelancers",
    description: "Gerencie múltiplos clientes e projetos com fluxos de trabalho inteligentes e sem erros."
  },
  {
    icon: <UserCheck className="text-brand-primary" size={32} />,
    title: "Profissionais de Marketing",
    description: "Escalone suas campanhas e distribuição de conteúdo em todos os canais simultaneamente."
  },
  {
    icon: <Globe className="text-emerald-400" size={32} />,
    title: "Nômades Digitais",
    description: "Mantenha sua produtividade no topo, não importa onde você esteja no mundo."
  }
];

export default function TargetAudience() {
  return (
    <section className="py-24 bg-deep-black relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
            Feito para quem busca <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-blue to-neon-purple">escala.</span>
          </h2>
          <p className="text-xl text-white/60 max-w-2xl mx-auto">
            O AlleApp se adapta ao seu fluxo de trabalho, seja você um empreendedor solo ou uma equipe em crescimento.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {audiences.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="p-8 rounded-3xl bg-white/5 border border-white/10 hover:border-brand-primary/30 transition-all group"
            >
              <div className="mb-6 group-hover:scale-110 transition-transform">{item.icon}</div>
              <h3 className="text-xl font-bold text-white mb-4">{item.title}</h3>
              <p className="text-white/50 leading-relaxed">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
