import React from 'react';
import { motion } from 'motion/react';
import { CheckCircle2, Smartphone, Zap, Shield } from 'lucide-react';

export default function About() {
  const benefits = [
    {
      icon: <Smartphone className="text-brand-primary" />,
      title: "Mobilidade Total",
      description: "Acesse seus dados de qualquer lugar, a qualquer momento, com sincronização em tempo real."
    },
    {
      icon: <Zap className="text-brand-primary" />,
      title: "Velocidade Incrível",
      description: "Desenvolvido com tecnologia de ponta para garantir uma experiência fluida e sem travamentos."
    },
    {
      icon: <Shield className="text-brand-primary" />,
      title: "Segurança Máxima",
      description: "Seus dados são protegidos com criptografia de ponta a ponta e padrões bancários de segurança."
    }
  ];

  return (
    <section id="about" className="py-32 bg-deep-black relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-96 h-96 bg-brand-primary/5 blur-[120px] rounded-full pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-block px-4 py-1.5 rounded-lg bg-brand-primary/10 border border-brand-primary/20 text-neon-blue text-xs font-bold uppercase tracking-[0.2em] mb-6">
              Nossa Tecnologia
            </div>
            <h2 className="text-4xl md:text-6xl font-display font-extrabold text-white mb-8 leading-tight tracking-tighter">
              A solução <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-blue to-brand-primary">definitiva</span> para o seu dia a dia.
            </h2>
            <p className="text-slate-400 text-xl mb-10 leading-relaxed font-light">
              O <span className="text-white font-medium">AlleApp</span> foi projetado para quem não aceita menos que a perfeição. Unimos inteligência artificial com design futurista para criar a experiência digital mais avançada do mercado.
            </p>
            
            <div className="grid grid-cols-1 gap-6">
              {[
                { text: "Interface Neural Intuitiva", color: "text-neon-blue" },
                { text: "Sincronização Quântica", color: "text-neon-purple" },
                { text: "Segurança de Nível Militar", color: "text-neon-cyan" }
              ].map((item, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.2 }}
                  className="flex items-center gap-4 group"
                >
                  <div className={`w-6 h-6 rounded-full border border-white/10 flex items-center justify-center group-hover:border-neon-blue/50 transition-colors`}>
                    <div className="w-2 h-2 bg-neon-blue rounded-full shadow-[0_0_8px_#00f2ff]" />
                  </div>
                  <span className="text-white font-medium text-lg tracking-tight">{item.text}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <div className="grid gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="relative group"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-white/5 to-transparent rounded-3xl transition-all duration-500 group-hover:from-brand-primary/10" />
                <div className="relative p-8 rounded-3xl border border-white/5 hover:border-brand-primary/30 transition-all duration-500 glass-morphism overflow-hidden">
                  {/* Decorative corner */}
                  <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-bl from-brand-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                  
                  <div className="flex items-start gap-6">
                    <div className="w-16 h-16 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-neon-blue shadow-[0_0_15px_rgba(0,242,255,0.1)] group-hover:scale-110 group-hover:shadow-[0_0_25px_rgba(0,242,255,0.3)] transition-all duration-500">
                      {React.cloneElement(benefit.icon as React.ReactElement, { size: 32, className: "text-neon-blue" })}
                    </div>
                    <div>
                      <h4 className="text-2xl font-display font-bold text-white mb-3 tracking-tight">{benefit.title}</h4>
                      <p className="text-slate-400 leading-relaxed font-light">{benefit.description}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
