import React from 'react';
import { motion } from 'motion/react';
import { CheckCircle2, XCircle, Zap, Shield, Clock, DollarSign } from 'lucide-react';

const comparison = [
  {
    feature: "Curva de Aprendizado",
    alleapp: "Interface No-Code intuitiva",
    others: "Exige semanas de treinamento",
    icon: <Zap size={18} className="text-neon-blue" />
  },
  {
    feature: "Latência de Execução",
    alleapp: "Processamento Real-Time (< 50ms)",
    others: "Delay de 5 a 15 minutos",
    icon: <Clock size={18} className="text-neon-purple" />
  },
  {
    feature: "Infraestrutura & Segurança",
    alleapp: "Criptografia Militar End-to-End",
    others: "Vulnerabilidades em plugins",
    icon: <Shield size={18} className="text-emerald-400" />
  },
  {
    feature: "Custo Operacional",
    alleapp: "ROI positivo em menos de 30 dias",
    others: "Custos ocultos e manutenção cara",
    icon: <DollarSign size={18} className="text-brand-primary" />
  }
];

export default function Differential() {
  return (
    <section id="differential" className="py-32 bg-deep-black relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-24">
          <div className="inline-block px-4 py-1.5 rounded-lg bg-neon-blue/10 border border-neon-blue/20 text-neon-blue text-xs font-bold uppercase tracking-[0.2em] mb-6">
            Diferencial Competitivo
          </div>
          <h2 className="text-4xl md:text-6xl font-display font-extrabold text-white mb-8 tracking-tighter">
            Por que o <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-blue to-neon-purple">AlleApp</span> é a escolha lógica?
          </h2>
          <p className="text-xl text-white/40 max-w-2xl mx-auto font-light leading-relaxed">
            Não somos apenas uma alternativa. Somos o novo padrão para quem não aceita menos que a excelência técnica.
          </p>
        </div>

        <div className="glass-card rounded-[3rem] border border-white/10 overflow-hidden bg-white/[0.02] backdrop-blur-xl">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-white/10 bg-white/[0.02]">
                  <th className="py-8 px-8 text-white/50 font-bold text-sm uppercase tracking-widest">Recurso</th>
                  <th className="py-8 px-8 text-neon-blue font-bold text-xl tracking-tight">AlleApp</th>
                  <th className="py-8 px-8 text-white/20 font-bold text-xl tracking-tight">Outras Soluções</th>
                </tr>
              </thead>
              <tbody>
                {comparison.map((item, index) => (
                  <motion.tr
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="border-b border-white/5 hover:bg-white/[0.03] transition-colors group"
                  >
                    <td className="py-8 px-8">
                      <div className="flex items-center gap-4">
                        <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center group-hover:scale-110 transition-transform">
                          {item.icon}
                        </div>
                        <span className="text-white font-medium text-lg">{item.feature}</span>
                      </div>
                    </td>
                    <td className="py-8 px-8">
                      <div className="flex items-center gap-3 text-white font-semibold">
                        <div className="w-6 h-6 rounded-full bg-emerald-500/20 flex items-center justify-center">
                          <CheckCircle2 className="text-emerald-500" size={14} />
                        </div>
                        {item.alleapp}
                      </div>
                    </td>
                    <td className="py-8 px-8">
                      <div className="flex items-center gap-3 text-white/30">
                        <div className="w-6 h-6 rounded-full bg-rose-500/10 flex items-center justify-center">
                          <XCircle className="text-rose-500/30" size={14} />
                        </div>
                        {item.others}
                      </div>
                    </td>
                  </motion.tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
        
        <div className="mt-16 text-center">
          <p className="text-white/30 text-sm font-light italic">
            * Dados baseados em benchmarks internos comparando com as 5 principais ferramentas do mercado em 2025.
          </p>
        </div>
      </div>
    </section>
  );
}
