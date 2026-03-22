import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronDown } from 'lucide-react';
import { cn } from '../lib/utils';

export default function FAQ() {
  const faqs = [
    {
      question: "O aplicativo é gratuito?",
      answer: "Sim! O AppLaunch possui uma versão gratuita completa. Oferecemos também um plano Premium para usuários que desejam recursos avançados de automação e armazenamento ilimitado."
    },
    {
      question: "Como baixar o aplicativo?",
      answer: "Você pode baixar o aplicativo diretamente através dos botões de download nesta página ou procurando por 'AlleApp' na Google Play Store."
    },
    {
      question: "O aplicativo é seguro?",
      answer: "Absolutamente. Utilizamos criptografia AES-256 para todos os dados armazenados e não compartilhamos suas informações com terceiros. Sua privacidade é nossa prioridade número um."
    },
    {
      question: "Precisa de internet para usar?",
      answer: "Muitas funcionalidades básicas funcionam offline. No entanto, para sincronizar seus dados entre dispositivos e receber atualizações em tempo real, uma conexão com a internet é necessária."
    }
  ];

  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="py-32 bg-deep-black relative">
      <div className="max-w-3xl mx-auto px-6 relative z-10">
        <div className="text-center mb-24">
          <div className="inline-block px-4 py-1.5 rounded-lg bg-neon-cyan/10 border border-neon-cyan/20 text-neon-cyan text-xs font-bold uppercase tracking-[0.2em] mb-6">
            Suporte Técnico
          </div>
          <h3 className="text-4xl md:text-6xl font-display font-extrabold text-white mb-8 tracking-tighter">
            Perguntas <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-cyan to-brand-primary">Frequentes</span>
          </h3>
        </div>

        <div className="space-y-6">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={cn(
                "rounded-2xl border transition-all duration-500 overflow-hidden",
                activeIndex === index 
                  ? "bg-white/10 border-neon-blue/50 shadow-[0_0_30px_rgba(0,242,255,0.1)]" 
                  : "bg-white/5 border-white/5 hover:border-white/20"
              )}
            >
              <button
                onClick={() => setActiveIndex(activeIndex === index ? null : index)}
                className="w-full p-8 text-left flex items-center justify-between group"
              >
                <span className={cn(
                  "text-xl font-display font-bold transition-colors duration-300",
                  activeIndex === index ? "text-neon-blue" : "text-white group-hover:text-neon-blue"
                )}>
                  {faq.question}
                </span>
                <div className={cn(
                  "w-8 h-8 rounded-full border flex items-center justify-center transition-all duration-300",
                  activeIndex === index 
                    ? "bg-neon-blue border-neon-blue text-deep-black rotate-180" 
                    : "border-white/10 text-white/40 group-hover:border-neon-blue group-hover:text-neon-blue"
                )}>
                  <ChevronDown size={20} />
                </div>
              </button>
              <AnimatePresence>
                {activeIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.4, ease: "circOut" }}
                  >
                    <div className="px-8 pb-8 text-slate-400 leading-relaxed font-light text-lg">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
