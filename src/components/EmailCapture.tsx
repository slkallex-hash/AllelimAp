import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Send, CheckCircle } from 'lucide-react';

export default function EmailCapture() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubmitted(true);
      setEmail('');
    }
  };

  return (
    <section className="py-24 bg-deep-black relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(139,92,246,0.1),transparent_70%)]" />
      
      <div className="max-w-4xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass-card p-12 md:p-20 rounded-[3rem] border border-white/10 text-center"
        >
          {!submitted ? (
            <>
              <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 tracking-tight">
                Receba novidades e <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-blue to-neon-purple">dicas de automação.</span>
              </h2>
              <p className="text-xl text-white/60 mb-10 max-w-xl mx-auto">
                Junte-se à nossa newsletter e receba estratégias exclusivas para escalar sua produtividade.
              </p>
              
              <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <input
                  type="email"
                  required
                  placeholder="Seu melhor e-mail"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="flex-1 px-6 py-4 rounded-2xl bg-white/5 border border-white/10 text-white focus:border-neon-blue/50 outline-none transition-all"
                />
                <button
                  type="submit"
                  className="px-8 py-4 bg-white text-deep-black font-bold rounded-2xl hover:scale-105 transition-all flex items-center justify-center gap-2"
                >
                  <Send size={18} />
                  Inscrever
                </button>
              </form>
              <p className="mt-6 text-xs text-white/30">Prometemos não enviar spam. Cancele a qualquer momento.</p>
            </>
          ) : (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="flex flex-col items-center"
            >
              <div className="w-20 h-20 rounded-full bg-emerald-500/20 flex items-center justify-center text-emerald-500 mb-6">
                <CheckCircle size={40} />
              </div>
              <h2 className="text-3xl font-bold text-white mb-4">Inscrição Confirmada!</h2>
              <p className="text-xl text-white/60">Obrigado por se juntar a nós. Em breve você receberá nossas dicas.</p>
              <button
                onClick={() => setSubmitted(false)}
                className="mt-8 text-neon-blue hover:underline font-bold"
              >
                Voltar
              </button>
            </motion.div>
          )}
        </motion.div>
      </div>
    </section>
  );
}
