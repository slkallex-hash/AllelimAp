import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Check, Zap, Star } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import CTA from '../components/CTA';

export default function Pricing() {
  const [isAnnual, setIsAnnual] = useState(true);

  return (
    <div className="flex flex-col min-h-screen bg-deep-black">
      <Navbar />
      
      <main className="flex-grow pt-32 pb-20 relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-[-10%] right-[-10%] w-[50%] h-[50%] bg-brand-primary/10 blur-[120px] rounded-full animate-pulse" />
          <div className="absolute bottom-[-10%] left-[-10%] w-[40%] h-[40%] bg-neon-purple/10 blur-[120px] rounded-full animate-pulse delay-1000" />
        </div>

        {/* Pricing Hero */}
        <div className="max-w-7xl mx-auto px-6 text-center mb-20 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-block px-4 py-1.5 rounded-lg bg-brand-primary/10 border border-brand-primary/20 text-brand-primary text-[10px] font-bold uppercase tracking-[0.3em] mb-6">
              Planos & Preços
            </div>
            <h1 className="text-5xl md:text-7xl font-display font-extrabold text-white mb-8 tracking-tighter">
              Invista na sua <br className="md:hidden" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-white to-white/40">produtividade</span>
            </h1>
            <p className="text-slate-400 text-xl max-w-2xl mx-auto font-light mb-12">
              Comece de graça ou desbloqueie o poder total da Inteligência Artificial com o plano Premium.
            </p>

            {/* Toggle */}
            <div className="flex items-center justify-center gap-4">
              <span className={`text-sm font-medium ${!isAnnual ? 'text-white' : 'text-slate-500'}`}>Mensal</span>
              <button 
                onClick={() => setIsAnnual(!isAnnual)}
                className="relative w-16 h-8 rounded-full bg-white/10 border border-white/20 p-1 transition-colors hover:bg-white/20"
              >
                <motion.div 
                  className="w-6 h-6 rounded-full bg-brand-primary"
                  animate={{ x: isAnnual ? 32 : 0 }}
                  transition={{ type: "spring", stiffness: 500, damping: 30 }}
                />
              </button>
              <span className={`text-sm font-medium flex items-center gap-2 ${isAnnual ? 'text-white' : 'text-slate-500'}`}>
                Anual <span className="text-[10px] bg-neon-purple/20 text-neon-purple px-2 py-0.5 rounded-full uppercase tracking-wider font-bold">Economize 20%</span>
              </span>
            </div>
          </motion.div>
        </div>

        {/* Pricing Cards */}
        <div className="max-w-5xl mx-auto px-6 grid md:grid-cols-2 gap-8 relative z-10">
          {/* Free Plan */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="glass-card p-10 rounded-[2.5rem] flex flex-col h-full relative group hover:border-white/20 transition-all"
          >
            <div className="mb-8">
              <h3 className="text-2xl font-display font-bold text-white mb-2">Básico</h3>
              <p className="text-slate-400 text-sm">Perfeito para começar a se organizar.</p>
            </div>
            <div className="mb-8">
              <span className="text-5xl font-display font-bold text-white">Grátis</span>
            </div>
            <ul className="space-y-4 mb-10 flex-grow">
              {[
                'Organização de tarefas básicas',
                'Sincronização em 2 dispositivos',
                'Lembretes simples',
                'Interface escura premium'
              ].map((feature, i) => (
                <li key={i} className="flex items-center gap-3 text-slate-300">
                  <Check size={18} className="text-brand-primary" />
                  <span className="font-light">{feature}</span>
                </li>
              ))}
            </ul>
            <button className="w-full py-4 rounded-2xl bg-transparent border border-white/20 text-white font-bold hover:bg-white/10 hover:border-white/40 transition-all">
              Começar Grátis
            </button>
          </motion.div>

          {/* Pro Plan */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="glass-card p-10 rounded-[2.5rem] flex flex-col h-full relative border-brand-primary/30"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-brand-primary/10 to-transparent rounded-[2.5rem] pointer-events-none" />
            <div className="absolute -top-5 left-1/2 -translate-x-1/2 bg-gradient-to-r from-brand-primary to-neon-purple text-white px-4 py-1 rounded-full text-xs font-bold uppercase tracking-widest flex items-center gap-1 shadow-lg shadow-brand-primary/20">
              <Star size={12} /> Mais Popular
            </div>
            
            <div className="mb-8 relative z-10">
              <h3 className="text-2xl font-display font-bold text-white mb-2">Premium</h3>
              <p className="text-slate-400 text-sm">O poder máximo da IA para sua rotina.</p>
            </div>
            <div className="mb-8 relative z-10">
              <span className="text-5xl font-display font-bold text-white">R$ {isAnnual ? '19' : '24'}</span>
              <span className="text-slate-500">/mês</span>
            </div>
            <ul className="space-y-4 mb-10 flex-grow relative z-10">
              {[
                'Tudo do plano Básico',
                'IA Preditiva de rotina',
                'Sincronização ilimitada',
                'Criptografia de ponta a ponta',
                'Suporte prioritário 24/7'
              ].map((feature, i) => (
                <li key={i} className="flex items-center gap-3 text-slate-300">
                  <Zap size={18} className="text-neon-purple" />
                  <span className="font-light">{feature}</span>
                </li>
              ))}
            </ul>
            <button className="relative z-10 w-full py-4 rounded-2xl bg-white text-deep-black font-bold hover:scale-[1.02] active:scale-95 transition-all shadow-[0_0_20px_rgba(255,255,255,0.2)] hover:shadow-[0_0_30px_rgba(255,255,255,0.4)]">
              Assinar Premium
            </button>
          </motion.div>
        </div>
      </main>

      <CTA />
      <Footer />
    </div>
  );
}
