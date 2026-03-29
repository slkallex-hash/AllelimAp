import React from 'react';
import { motion } from 'motion/react';
import { Check } from 'lucide-react';

const plans = [
  {
    name: "Starter",
    price: "Grátis",
    description: "Para quem quer testar o poder da automação.",
    features: [
      "Até 5 automações ativas",
      "Integrações básicas",
      "Suporte da comunidade",
      "100 execuções por mês"
    ],
    buttonText: "Começar Grátis",
    popular: false
  },
  {
    name: "Pro",
    price: "R$ 29",
    period: "/mês",
    description: "Para quem quer escalar seus ganhos e tempo.",
    features: [
      "Automações ilimitadas",
      "Integrações premium (WhatsApp, etc)",
      "Suporte prioritário 24/7",
      "Execuções ilimitadas",
      "Relatórios avançados"
    ],
    buttonText: "Assinar Premium",
    popular: true
  }
];

export default function PricingSection() {
  return (
    <section id="pricing" className="py-24 bg-deep-black relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-display font-extrabold text-white mb-6 tracking-tight">
            Planos simples e <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-primary to-neon-blue">transparentes</span>
          </h2>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto font-light">
            Comece de graça. Faça o upgrade quando suas automações começarem a gerar resultados.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className={`relative glass-card p-10 rounded-[2.5rem] border ${plan.popular ? 'border-brand-primary/50 shadow-[0_0_40px_rgba(59,130,246,0.2)]' : 'border-white/10'}`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-brand-primary to-neon-purple text-white px-4 py-1 rounded-full text-xs font-bold uppercase tracking-widest shadow-lg">
                  Mais Escolhido
                </div>
              )}
              
              <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
              <p className="text-slate-400 text-sm mb-6 h-10">{plan.description}</p>
              
              <div className="mb-8">
                <span className="text-5xl font-bold text-white">{plan.price}</span>
                {plan.period && <span className="text-slate-400">{plan.period}</span>}
              </div>
              
              <ul className="space-y-4 mb-10">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-center gap-3 text-slate-300">
                    <div className="w-5 h-5 rounded-full bg-brand-primary/20 flex items-center justify-center text-brand-primary shrink-0">
                      <Check size={12} strokeWidth={3} />
                    </div>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              
              <button 
                className={`w-full py-4 rounded-2xl font-bold transition-all ${
                  plan.popular 
                  ? 'bg-white text-deep-black hover:scale-[1.02] hover:shadow-[0_0_30px_rgba(255,255,255,0.3)]' 
                  : 'bg-transparent border border-white/20 text-white hover:bg-white/10'
                }`}
              >
                {plan.buttonText}
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
