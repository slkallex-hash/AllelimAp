import React from 'react';
import { motion } from 'motion/react';
import { Zap, RefreshCw, Shield, Layout, Activity, Smartphone } from 'lucide-react';

export default function Gallery() {
  const screens = [
    { 
      id: 1, 
      title: "Painel de Automação", 
      description: "Crie e gerencie fluxos de trabalho complexos com apenas alguns cliques.",
      icon: <Zap size={24} />,
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=800&auto=format&fit=crop"
    },
    { 
      id: 2, 
      title: "Agendamento Inteligente", 
      description: "Deixe a IA decidir o melhor momento para executar suas tarefas.",
      icon: <RefreshCw size={24} />,
      image: "https://images.unsplash.com/photo-1504868584819-f8eec0b21750?q=80&w=800&auto=format&fit=crop"
    },
    { 
      id: 3, 
      title: "Segurança de Dados", 
      description: "Suas credenciais e integrações protegidas com criptografia militar.",
      icon: <Shield size={24} />,
      image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=800&auto=format&fit=crop"
    },
    { 
      id: 4, 
      title: "Integrações Nativas", 
      description: "Conecte WhatsApp, Instagram, Gmail e mais de 500 outras ferramentas.",
      icon: <Layout size={24} />,
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=800&auto=format&fit=crop"
    },
    { 
      id: 5, 
      title: "Relatórios de Ganhos", 
      description: "Acompanhe o dinheiro gerado pelas suas automações em tempo real.",
      icon: <Activity size={24} />,
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=800&auto=format&fit=crop"
    },
    { 
      id: 6, 
      title: "App Mobile", 
      description: "Controle seu império digital diretamente do seu smartphone.",
      icon: <Smartphone size={24} />,
      image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?q=80&w=800&auto=format&fit=crop"
    },
  ];

  return (
    <section id="gallery" className="py-32 bg-deep-black relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-24">
          <div className="inline-block px-4 py-1.5 rounded-lg bg-neon-blue/10 border border-neon-blue/20 text-neon-blue text-xs font-bold uppercase tracking-[0.2em] mb-6">
            Demonstração
          </div>
          <h3 className="text-4xl md:text-6xl font-display font-extrabold text-white mb-8 tracking-tighter">
            Veja o AlleApp em <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-blue to-neon-purple">Ação</span>
          </h3>
          <p className="text-slate-400 text-xl font-light">
            Interface real. Resultados reais. Controle todas as suas automações em um painel simples e intuitivo.
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
              className="group relative aspect-video rounded-3xl overflow-hidden shadow-2xl transition-all cursor-pointer border border-white/10 bg-white/5 hover:bg-white/10"
            >
              <img 
                src={screen.image} 
                alt={screen.title} 
                className="absolute inset-0 w-full h-full object-cover opacity-40 group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-deep-black via-deep-black/40 to-transparent p-8 flex flex-col justify-end">
                <div className="flex justify-between items-start mb-4">
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
                  <p className="text-slate-400 text-sm font-light leading-relaxed">
                    {screen.description}
                  </p>
                </div>
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
