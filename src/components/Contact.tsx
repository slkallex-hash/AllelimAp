import React from 'react';
import { motion } from 'motion/react';
import { Send, Mail, User, MessageSquare } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-32 bg-deep-black relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-block px-4 py-1.5 rounded-lg bg-neon-purple/10 border border-neon-purple/20 text-neon-purple text-xs font-bold uppercase tracking-[0.2em] mb-6">
              Fale Conosco
            </div>
            <h3 className="text-4xl md:text-6xl font-display font-extrabold text-white mb-8 tracking-tighter">
              Ficou com alguma <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-purple to-neon-blue">dúvida?</span>
            </h3>
            <p className="text-slate-400 text-xl mb-10 leading-relaxed font-light">
              Nossa equipe de suporte está pronta para ajudar você. Preencha o formulário e responderemos em tempo recorde.
            </p>
            
            <div className="space-y-8">
              <div className="flex items-center gap-6 group">
                <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-neon-blue group-hover:border-neon-blue/50 transition-all duration-300">
                  <Mail size={28} />
                </div>
                <div>
                  <p className="text-xs text-slate-500 uppercase tracking-widest mb-1">E-mail de Suporte</p>
                  <p className="text-white font-display font-bold text-xl">contato@alleapp.space</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-neon-blue/10 to-neon-purple/10 blur-3xl rounded-[3rem]" />
            <div className="relative glass-morphism p-8 md:p-12 rounded-[3rem] border border-white/10 shadow-2xl">
              <form className="space-y-8" onSubmit={(e) => e.preventDefault()}>
                <div className="space-y-3">
                  <label className="text-xs font-bold text-slate-400 uppercase tracking-widest ml-1">Nome Completo</label>
                  <div className="relative group">
                    <User className="absolute left-5 top-1/2 -translate-y-1/2 text-slate-500 group-focus-within:text-neon-blue transition-colors" size={20} />
                    <input
                      type="text"
                      placeholder="Seu nome"
                      className="w-full pl-14 pr-6 py-5 rounded-2xl bg-white/5 border border-white/10 text-white focus:border-neon-blue/50 focus:bg-white/10 outline-none transition-all duration-300"
                    />
                  </div>
                </div>

                <div className="space-y-3">
                  <label className="text-xs font-bold text-slate-400 uppercase tracking-widest ml-1">E-mail Corporativo</label>
                  <div className="relative group">
                    <Mail className="absolute left-5 top-1/2 -translate-y-1/2 text-slate-500 group-focus-within:text-neon-blue transition-colors" size={20} />
                    <input
                      type="email"
                      placeholder="seu@email.com"
                      className="w-full pl-14 pr-6 py-5 rounded-2xl bg-white/5 border border-white/10 text-white focus:border-neon-blue/50 focus:bg-white/10 outline-none transition-all duration-300"
                    />
                  </div>
                </div>

                <div className="space-y-3">
                  <label className="text-xs font-bold text-slate-400 uppercase tracking-widest ml-1">Mensagem</label>
                  <div className="relative group">
                    <MessageSquare className="absolute left-5 top-6 text-slate-500 group-focus-within:text-neon-blue transition-colors" size={20} />
                    <textarea
                      rows={4}
                      placeholder="Como podemos ajudar?"
                      className="w-full pl-14 pr-6 py-5 rounded-2xl bg-white/5 border border-white/10 text-white focus:border-neon-blue/50 focus:bg-white/10 outline-none transition-all duration-300 resize-none"
                    ></textarea>
                  </div>
                </div>

                <button className="relative w-full group overflow-hidden rounded-2xl py-5 font-bold text-lg transition-all duration-300">
                  <div className="absolute inset-0 bg-gradient-to-r from-brand-primary to-neon-purple opacity-80 group-hover:opacity-100 transition-opacity" />
                  <div className="relative flex items-center justify-center gap-3 text-white">
                    <Send size={20} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                    Enviar Mensagem Digital
                  </div>
                </button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
