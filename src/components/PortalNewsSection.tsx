import React from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { ArrowRight, Clock, TrendingUp, Zap, Cpu, Globe, Rocket, Eye } from 'lucide-react';
import { newsData } from '../data/news';

export default function PortalNewsSection() {
  // Data processing
  const featuredArticle = newsData.find(a => a.featured) || newsData[0];
  const trendingArticles = newsData.filter(a => a.trending).slice(0, 5);
  const latestArticles = newsData.filter(a => a.id !== featuredArticle.id).slice(0, 6);
  
  const aiArticles = newsData.filter(a => a.category === 'Inteligência Artificial').slice(0, 4);
  const cryptoArticles = newsData.filter(a => a.category === 'Criptomoedas').slice(0, 4);
  const futureTechArticles = newsData.filter(a => a.category === 'Futuro da Tecnologia').slice(0, 4);

  return (
    <section id="portal-news" className="py-24 bg-deep-black relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(139,92,246,0.03),transparent_50%)]" />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <div className="flex items-center justify-between mb-12">
          <div>
            <h2 className="text-3xl md:text-5xl font-bold text-white tracking-tighter flex items-center gap-3">
              <Zap className="text-neon-purple animate-pulse" />
              ALLE<span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-purple to-neon-blue">NEWS</span>
            </h2>
            <p className="text-white/40 mt-2 font-mono text-sm uppercase tracking-widest">O pulso da tecnologia global</p>
          </div>
          <Link to="/noticias" className="hidden md:flex items-center gap-2 text-white/60 hover:text-white transition-colors text-sm font-bold group">
            VER TUDO <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* Main Grid: Featured + Trending Sidebar */}
        <div className="grid lg:grid-cols-12 gap-8 mb-20">
          
          {/* Featured Article (8 cols) */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-8"
          >
            <Link to={`/noticias/${featuredArticle.slug}`} className="group relative block aspect-[16/9] rounded-3xl overflow-hidden border border-white/10 bg-white/5">
              <img 
                src={featuredArticle.imageUrl} 
                alt={featuredArticle.title} 
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-deep-black via-deep-black/20 to-transparent z-10" />
              
              <div className="absolute bottom-0 left-0 p-8 md:p-12 z-20 w-full">
                <div className="flex items-center gap-3 mb-4">
                  <span className="px-3 py-1 bg-neon-purple text-white text-[10px] font-black uppercase tracking-widest rounded-sm">
                    DESTAQUE
                  </span>
                  <span className="text-white/60 text-xs flex items-center gap-1 font-mono">
                    <Clock size={12} /> {featuredArticle.date}
                  </span>
                </div>
                <h3 className="text-2xl md:text-5xl font-bold text-white mb-4 group-hover:text-neon-blue transition-colors leading-[1.1] tracking-tight">
                  {featuredArticle.title}
                </h3>
                <p className="text-white/60 text-lg line-clamp-2 max-w-2xl mb-6 hidden md:block">
                  {featuredArticle.excerpt}
                </p>
                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-2 text-white/80 text-sm font-bold">
                    <span className="w-8 h-8 rounded-full bg-gradient-to-br from-neon-purple to-neon-blue flex items-center justify-center text-[10px]">
                      {featuredArticle.author.charAt(0)}
                    </span>
                    {featuredArticle.author}
                  </div>
                </div>
              </div>
            </Link>
          </motion.div>

          {/* Trending Sidebar (4 cols) */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-4 flex flex-col gap-6"
          >
            <div className="flex items-center gap-2 text-white font-bold text-xl mb-2">
              <TrendingUp className="text-neon-blue" size={20} />
              MAIS LIDAS
            </div>
            <div className="flex flex-col gap-6">
              {trendingArticles.map((article, idx) => (
                <Link key={article.id} to={`/noticias/${article.slug}`} className="group flex gap-4 items-start">
                  <span className="text-4xl font-black text-white/10 group-hover:text-neon-purple/40 transition-colors font-mono leading-none">
                    0{idx + 1}
                  </span>
                  <div className="flex flex-col">
                    <span className="text-neon-blue text-[10px] font-bold uppercase tracking-widest mb-1">{article.category}</span>
                    <h4 className="text-white font-bold group-hover:text-neon-blue transition-colors line-clamp-2 leading-snug">
                      {article.title}
                    </h4>
                    <div className="flex items-center gap-3 mt-2 text-white/30 text-[10px] font-mono">
                      <span className="flex items-center gap-1"><Eye size={10} /> {article.views?.toLocaleString()} views</span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Latest News Grid */}
        <div className="mb-20">
          <div className="flex items-center gap-4 mb-10">
            <h3 className="text-2xl font-bold text-white whitespace-nowrap">ÚLTIMAS NOTÍCIAS</h3>
            <div className="h-px bg-white/10 w-full" />
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {latestArticles.map((article, index) => (
              <motion.div
                key={article.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Link to={`/noticias/${article.slug}`} className="group flex flex-col h-full bg-white/5 border border-white/10 rounded-2xl overflow-hidden hover:border-neon-purple/50 transition-all duration-300">
                  <div className="relative aspect-video overflow-hidden">
                    <img src={article.imageUrl} alt={article.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                    <div className="absolute top-4 left-4">
                      <span className="px-2 py-1 bg-deep-black/80 backdrop-blur-md border border-white/10 text-white/90 text-[9px] font-bold uppercase tracking-widest rounded">
                        {article.category}
                      </span>
                    </div>
                  </div>
                  <div className="p-6 flex flex-col flex-grow">
                    <div className="flex items-center gap-2 text-white/40 text-[10px] font-mono mb-3">
                      <Clock size={10} /> {article.date} • {article.readTime}
                    </div>
                    <h4 className="text-lg font-bold text-white mb-3 group-hover:text-neon-blue transition-colors line-clamp-2">
                      {article.title}
                    </h4>
                    <p className="text-white/50 text-sm line-clamp-2 mb-4 flex-grow">
                      {article.excerpt}
                    </p>
                    <div className="flex items-center text-neon-purple text-xs font-bold group-hover:text-neon-blue transition-colors">
                      LER ARTIGO <ArrowRight size={14} className="ml-1 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Vertical Sections (AI, Crypto, Future) */}
        <div className="grid lg:grid-cols-3 gap-12">
          
          {/* AI Section */}
          <div>
            <div className="flex items-center gap-2 mb-8 text-white font-bold text-xl border-b border-white/10 pb-4">
              <Cpu className="text-neon-purple" size={20} />
              AI EM FOCO
            </div>
            <div className="flex flex-col gap-6">
              {aiArticles.map(article => (
                <Link key={article.id} to={`/noticias/${article.slug}`} className="group flex gap-4 items-center">
                  <div className="w-20 h-20 rounded-lg overflow-hidden flex-shrink-0 border border-white/10">
                    <img src={article.imageUrl} alt={article.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                  </div>
                  <div className="flex flex-col">
                    <h5 className="text-white text-sm font-bold group-hover:text-neon-purple transition-colors line-clamp-2 leading-tight">
                      {article.title}
                    </h5>
                    <span className="text-white/40 text-[10px] mt-1 font-mono">{article.date}</span>
                  </div>
                </Link>
              ))}
            </div>
          </div>

          {/* Crypto Section */}
          <div>
            <div className="flex items-center gap-2 mb-8 text-white font-bold text-xl border-b border-white/10 pb-4">
              <Globe className="text-neon-blue" size={20} />
              CRYPTO NOW
            </div>
            <div className="flex flex-col gap-6">
              {cryptoArticles.map(article => (
                <Link key={article.id} to={`/noticias/${article.slug}`} className="group flex gap-4 items-center">
                  <div className="w-20 h-20 rounded-lg overflow-hidden flex-shrink-0 border border-white/10">
                    <img src={article.imageUrl} alt={article.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                  </div>
                  <div className="flex flex-col">
                    <h5 className="text-white text-sm font-bold group-hover:text-neon-blue transition-colors line-clamp-2 leading-tight">
                      {article.title}
                    </h5>
                    <span className="text-white/40 text-[10px] mt-1 font-mono">{article.date}</span>
                  </div>
                </Link>
              ))}
            </div>
          </div>

          {/* Future Tech Section */}
          <div>
            <div className="flex items-center gap-2 mb-8 text-white font-bold text-xl border-b border-white/10 pb-4">
              <Rocket className="text-brand-primary" size={20} />
              FUTURE TECH
            </div>
            <div className="flex flex-col gap-6">
              {futureTechArticles.map(article => (
                <Link key={article.id} to={`/noticias/${article.slug}`} className="group flex gap-4 items-center">
                  <div className="w-20 h-20 rounded-lg overflow-hidden flex-shrink-0 border border-white/10">
                    <img src={article.imageUrl} alt={article.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                  </div>
                  <div className="flex flex-col">
                    <h5 className="text-white text-sm font-bold group-hover:text-brand-primary transition-colors line-clamp-2 leading-tight">
                      {article.title}
                    </h5>
                    <span className="text-white/40 text-[10px] mt-1 font-mono">{article.date}</span>
                  </div>
                </Link>
              ))}
            </div>
          </div>

        </div>

        {/* Ad Placement Placeholder */}
        <div className="mt-24 p-8 rounded-3xl bg-white/5 border border-dashed border-white/20 flex flex-col items-center justify-center text-center">
          <span className="text-white/20 text-[10px] font-mono uppercase tracking-[0.3em] mb-4">Publicidade</span>
          <h4 className="text-white/40 font-bold text-xl">Espaço para Anúncio Premium</h4>
          <p className="text-white/20 text-sm mt-2">Alcance milhões de entusiastas de tecnologia</p>
          <button className="mt-6 px-6 py-2 rounded-full border border-white/10 text-white/40 text-xs hover:bg-white/5 transition-colors">
            Anuncie Conosco
          </button>
        </div>

      </div>
    </section>
  );
}
