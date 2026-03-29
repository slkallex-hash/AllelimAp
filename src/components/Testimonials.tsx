import React from 'react';
import { motion } from 'motion/react';
import { Star, Users } from 'lucide-react';

const testimonials = [
  {
    name: "João Silva",
    role: "Empreendedor Digital",
    content: "O AlleApp mudou minha vida. Automatizei minhas vendas e dobrei meu faturamento em menos de 3 meses. É como ter um funcionário 24h.",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=150&auto=format&fit=crop"
  },
  {
    name: "Maria Fernandes",
    role: "Freelancer",
    content: "Finalmente tenho tempo para minha família. O app faz todo o trabalho chato de envio de e-mails e organização de planilhas.",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=150&auto=format&fit=crop"
  },
  {
    name: "Carlos Mendes",
    role: "Dono de Agência",
    content: "A interface é incrível e a configuração levou apenas 5 minutos. A melhor ferramenta de automação que já usei.",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=150&auto=format&fit=crop"
  }
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-24 bg-deep-black relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_0%,rgba(59,130,246,0.05),transparent_70%)] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-neon-blue/30 bg-neon-blue/10 text-neon-blue font-bold mb-6">
            <Users size={18} />
            Mais de 50.000 usuários ativos
          </div>
          <h2 className="text-4xl md:text-5xl font-display font-extrabold text-white mb-6 tracking-tight">
            Quem usa, <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-purple to-brand-primary">recomenda.</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass-card p-8 rounded-[2rem] border border-white/10 relative"
            >
              <div className="flex gap-1 mb-6 text-yellow-400">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={16} fill="currentColor" />
                ))}
              </div>
              <p className="text-slate-300 text-lg leading-relaxed mb-8 font-light italic">
                "{testimonial.content}"
              </p>
              <div className="flex items-center gap-4 mt-auto">
                <img src={testimonial.avatar} alt={testimonial.name} className="w-12 h-12 rounded-full object-cover border border-white/20" />
                <div>
                  <h4 className="text-white font-bold">{testimonial.name}</h4>
                  <span className="text-slate-500 text-sm">{testimonial.role}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
