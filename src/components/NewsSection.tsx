import React from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { ArrowRight, Clock } from 'lucide-react';
import { newsData } from '../data/news';

export default function NewsSection() {
  // Get the 3 most recent articles
  const recentNews = newsData.slice(0, 3);

  return (
    <section id="news" className="py-24 bg-deep-black relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(139,92,246,0.05),transparent_50%)]" />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-2xl"
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white tracking-tight">
              Últimas <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-purple to-neon-blue">Notícias</span>
            </h2>
            <p className="text-white/60 text-lg">
              Fique por dentro das novidades do mundo da tecnologia, inovação e atualidades.
            </p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <Link 
              to="/noticias" 
              className="group flex items-center gap-2 px-6 py-3 rounded-full bg-transparent border border-neon-blue/50 text-neon-blue hover:bg-neon-blue hover:text-deep-black font-bold transition-all duration-300 hover:shadow-[0_0_20px_rgba(0,242,255,0.4)]"
            >
              Ver todas as notícias
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {recentNews.map((article, index) => (
            <motion.div
              key={article.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Link 
                to={`/noticias/${article.slug}`}
                className="group block h-full bg-white/5 border border-white/10 rounded-2xl overflow-hidden hover:border-neon-purple/50 transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_10px_30px_rgba(139,92,246,0.1)]"
              >
                <div className="relative h-48 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-t from-deep-black/80 to-transparent z-10" />
                  <img 
                    src={article.imageUrl} 
                    alt={article.title} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute top-4 left-4 z-20">
                    <span className="px-3 py-1 bg-deep-black/60 backdrop-blur-md border border-white/10 text-white/90 text-[10px] font-bold uppercase tracking-wider rounded-full">
                      {article.category}
                    </span>
                  </div>
                </div>
                
                <div className="p-6 flex flex-col h-[calc(100%-12rem)]">
                  <div className="flex items-center gap-2 text-white/40 text-xs mb-3">
                    <Clock size={12} />
                    <span>{article.date}</span>
                    <span className="w-1 h-1 rounded-full bg-white/20 mx-1" />
                    <span>{article.readTime}</span>
                  </div>
                  
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-neon-blue transition-colors line-clamp-2 leading-tight">
                    {article.title}
                  </h3>
                  
                  <p className="text-white/60 text-sm line-clamp-3 mb-6 flex-grow">
                    {article.excerpt}
                  </p>
                  
                  <div className="mt-auto flex items-center text-neon-purple text-sm font-bold group-hover:text-neon-blue transition-colors">
                    Ler artigo <ArrowRight size={16} className="ml-1 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
