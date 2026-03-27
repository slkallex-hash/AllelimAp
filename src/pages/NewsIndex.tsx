import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { Clock, User, ChevronRight, Tag } from 'lucide-react';
import { newsData, categories } from '../data/news';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function NewsIndex() {
  const [activeCategory, setActiveCategory] = useState('Todas');

  const filteredNews = activeCategory === 'Todas' 
    ? newsData 
    : newsData.filter(article => article.category === activeCategory);

  // Find a trending article for the featured spot, or just use the first one
  const featuredArticle = filteredNews.find(article => article.trending) || filteredNews[0];
  
  // Exclude the featured article from the recent articles list
  const recentArticles = filteredNews.filter(article => article.id !== featuredArticle?.id);

  return (
    <div className="min-h-screen bg-deep-black flex flex-col">
      <Navbar />
      <main className="flex-grow pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-6">
          
          {/* Header */}
        <div className="mb-12 text-center md:text-left">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-bold text-white mb-4 tracking-tight"
          >
            Portal de <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-primary to-neon-purple">Notícias</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-white/60 text-lg max-w-2xl"
          >
            Acompanhe as últimas novidades sobre tecnologia, inovação, segurança e atualidades do mundo digital.
          </motion.p>
        </div>

        {/* Categories */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="flex flex-wrap gap-3 mb-12"
        >
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                activeCategory === category 
                  ? 'bg-brand-primary text-white shadow-[0_0_15px_rgba(59,130,246,0.4)]' 
                  : 'bg-white/5 text-white/60 hover:bg-white/10 hover:text-white border border-white/10'
              }`}
            >
              {category}
            </button>
          ))}
        </motion.div>

        {/* Featured Article */}
        {featuredArticle && (
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="mb-16"
          >
            <Link to={`/noticias/${featuredArticle.slug}`} className="group block relative rounded-3xl overflow-hidden border border-white/10 bg-white/5">
              <div className="grid md:grid-cols-2 gap-0">
                <div className="relative h-[300px] md:h-[450px] overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-t from-deep-black/80 via-transparent to-transparent z-10 md:hidden" />
                  <img 
                    src={featuredArticle.imageUrl} 
                    alt={featuredArticle.title} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute top-6 left-6 z-20">
                    <span className="px-3 py-1 bg-brand-primary/90 backdrop-blur-md text-white text-xs font-bold uppercase tracking-wider rounded-full">
                      {featuredArticle.category}
                    </span>
                  </div>
                </div>
                <div className="p-8 md:p-12 flex flex-col justify-center relative z-20 -mt-20 md:mt-0 bg-deep-black/90 md:bg-transparent backdrop-blur-xl md:backdrop-blur-none">
                  <div className="flex items-center gap-4 text-white/50 text-sm mb-4">
                    <span className="flex items-center gap-1"><Clock size={14} /> {featuredArticle.date}</span>
                    <span className="w-1 h-1 rounded-full bg-white/30" />
                    <span className="flex items-center gap-1"><User size={14} /> {featuredArticle.author}</span>
                  </div>
                  <h2 className="text-2xl md:text-4xl font-bold text-white mb-4 group-hover:text-brand-primary transition-colors leading-tight">
                    {featuredArticle.title}
                  </h2>
                  <p className="text-white/60 text-lg mb-8 line-clamp-3">
                    {featuredArticle.excerpt}
                  </p>
                  <div className="flex items-center text-neon-blue font-medium group-hover:translate-x-2 transition-transform w-fit">
                    Ler artigo completo <ChevronRight size={18} className="ml-1" />
                  </div>
                </div>
              </div>
            </Link>
          </motion.div>
        )}

        {/* Grid of Articles */}
        {recentArticles.length > 0 && (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {recentArticles.map((article, index) => (
              <motion.div
                key={article.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 + (index * 0.1) }}
              >
                <Link to={`/noticias/${article.slug}`} className="group flex flex-col h-full bg-white/5 border border-white/10 rounded-2xl overflow-hidden hover:border-brand-primary/50 transition-all duration-300 hover:shadow-[0_0_30px_rgba(59,130,246,0.1)]">
                  <div className="relative h-48 overflow-hidden">
                    <img 
                      src={article.imageUrl} 
                      alt={article.title} 
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1 bg-deep-black/70 backdrop-blur-md text-white text-xs font-bold uppercase tracking-wider rounded-full border border-white/10">
                        {article.category}
                      </span>
                    </div>
                  </div>
                  <div className="p-6 flex flex-col flex-grow">
                    <div className="flex items-center gap-3 text-white/40 text-xs mb-3">
                      <span>{article.date}</span>
                      <span className="w-1 h-1 rounded-full bg-white/20" />
                      <span>{article.readTime} de leitura</span>
                    </div>
                    <h3 className="text-xl font-bold text-white mb-3 group-hover:text-brand-primary transition-colors line-clamp-2">
                      {article.title}
                    </h3>
                    <p className="text-white/60 text-sm mb-6 line-clamp-3 flex-grow">
                      {article.excerpt}
                    </p>
                    <div className="flex items-center text-white/80 text-sm font-medium group-hover:text-neon-blue transition-colors mt-auto">
                      Ler mais <ChevronRight size={16} className="ml-1 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        )}

        {filteredNews.length === 0 && (
          <div className="text-center py-20">
            <p className="text-white/50 text-lg">Nenhuma notícia encontrada para esta categoria.</p>
          </div>
        )}
        </div>
      </main>
      <Footer />
    </div>
  );
}
