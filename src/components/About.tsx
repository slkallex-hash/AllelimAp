import React from 'react';
import { motion } from 'motion/react';
import { Globe, Users, Award, ShieldCheck } from 'lucide-react';

export default function About() {
  const stats = [
    { icon: Globe, label: "Alcance Global", value: "150+ Países" },
    { icon: Users, label: "Leitores Mensais", value: "2.5M+" },
    { icon: Award, label: "Prêmios de Mídia", value: "12" },
    { icon: ShieldCheck, label: "Fontes Verificadas", value: "100%" },
  ];

  return (
    <section id="about" className="py-32 bg-deep-black relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-96 h-96 bg-neon-purple/5 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-neon-blue/5 blur-[120px] rounded-full pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-block px-4 py-1.5 rounded-lg bg-neon-purple/10 border border-neon-purple/20 text-neon-purple text-xs font-bold uppercase tracking-[0.2em] mb-6">
              SOBRE O ALLENews
            </div>
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-8 leading-tight tracking-tighter">
              A voz da <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-purple to-neon-blue">inovação</span> no mundo digital.
            </h2>
            <p className="text-white/60 text-xl mb-8 leading-relaxed">
              O <span className="text-white font-bold">ALLE<span className="text-neon-purple">News</span></span> nasceu com a missão de decifrar a complexidade tecnológica para o mundo. Somos mais que um portal; somos o ponto de encontro de mentes brilhantes, desenvolvedores, investidores e entusiastas que moldam o amanhã.
            </p>
            <p className="text-white/40 text-lg mb-12 leading-relaxed">
              Nossa equipe editorial global trabalha 24/7 para entregar análises profundas, notícias de última hora e insights exclusivos sobre Inteligência Artificial, Criptomoedas, Cibersegurança e o Futuro da Tecnologia.
            </p>
            
            <div className="grid grid-cols-2 gap-8">
              {stats.map((stat, idx) => (
                <div key={idx} className="flex flex-col">
                  <stat.icon className="text-neon-blue mb-3" size={24} />
                  <span className="text-2xl font-bold text-white">{stat.value}</span>
                  <span className="text-white/40 text-sm uppercase tracking-wider">{stat.label}</span>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="aspect-square rounded-3xl overflow-hidden border border-white/10 relative group">
              <img 
                src="https://images.unsplash.com/photo-1485827404703-89b55fcc595e?q=80&w=1600&auto=format&fit=crop" 
                alt="Tecnologia Futurista" 
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-deep-black via-transparent to-transparent" />
              
              <div className="absolute bottom-8 left-8 right-8 p-6 bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl">
                <p className="text-white font-medium italic">
                  "Nossa visão é antecipar o futuro, para que nossos leitores possam construí-lo hoje."
                </p>
                <div className="mt-4 flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-neon-purple" />
                  <div>
                    <p className="text-white text-sm font-bold">Alexandre Alle</p>
                    <p className="text-white/40 text-xs">Editor-Chefe & Fundador</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Decorative Elements */}
            <div className="absolute -top-6 -right-6 w-32 h-32 border-t-2 border-r-2 border-neon-blue/30 rounded-tr-3xl" />
            <div className="absolute -bottom-6 -left-6 w-32 h-32 border-b-2 border-l-2 border-neon-purple/30 rounded-bl-3xl" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
