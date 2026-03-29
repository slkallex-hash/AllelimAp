import React from 'react';
import { motion } from 'motion/react';
import { CheckCircle2, XCircle } from 'lucide-react';

const comparison = [
  {
    feature: "Facilidade de Uso",
    alleapp: "Interface intuitiva, zero código",
    others: "Complexo, exige programação",
    better: true
  },
  {
    feature: "Velocidade de Execução",
    alleapp: "Processamento em tempo real",
    others: "Delay de minutos ou horas",
    better: true
  },
  {
    feature: "Custo-Benefício",
    alleapp: "Planos acessíveis e escaláveis",
    others: "Taxas ocultas e preços altos",
    better: true
  },
  {
    feature: "Suporte",
    alleapp: "Atendimento humano 24/7",
    others: "Tickets lentos e bots genéricos",
    better: true
  }
];

export default function Differential() {
  return (
    <section className="py-24 bg-deep-black relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-display font-extrabold text-white mb-6 tracking-tight">
            Por que o <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-blue to-neon-purple">AlleApp</span> é superior?
          </h2>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto font-light">
            Não somos apenas mais uma ferramenta. Somos a evolução da automação digital.
          </p>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-white/10">
                <th className="py-6 px-4 text-white font-bold text-lg">Recurso</th>
                <th className="py-6 px-4 text-neon-blue font-bold text-lg">AlleApp</th>
                <th className="py-6 px-4 text-slate-500 font-bold text-lg">Outros Apps</th>
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
                  className="border-b border-white/5 hover:bg-white/5 transition-colors"
                >
                  <td className="py-6 px-4 text-white font-medium">{item.feature}</td>
                  <td className="py-6 px-4 text-white">
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="text-emerald-500" size={20} />
                      {item.alleapp}
                    </div>
                  </td>
                  <td className="py-6 px-4 text-slate-500">
                    <div className="flex items-center gap-2">
                      <XCircle className="text-rose-500/50" size={20} />
                      {item.others}
                    </div>
                  </td>
                </motion.tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
