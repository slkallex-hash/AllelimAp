import React from 'react';
import { motion } from 'motion/react';

export default function Stats() {
  const stats = [
    { label: 'Downloads', value: '1M+' },
    { label: 'Países', value: '150+' },
    { label: 'Avaliação', value: '4.9/5' },
    { label: 'Uptime', value: '99.9%' },
  ];

  return (
    <section className="py-20 bg-deep-black border-y border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="text-center"
            >
              <div className="text-4xl md:text-5xl font-display font-bold text-white mb-2 tracking-tighter">
                {stat.value}
              </div>
              <div className="text-xs text-slate-500 uppercase tracking-[0.3em] font-bold">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
