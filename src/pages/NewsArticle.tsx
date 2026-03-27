import React, { useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { motion } from 'motion/react';
import { ArrowLeft, Clock, User, Share2, Calendar } from 'lucide-react';
import { newsData } from '../data/news';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function NewsArticle() {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  
  const article = newsData.find(a => a.slug === slug);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!article) {
    return (
      <div className="min-h-screen bg-deep-black flex flex-col">
        <Navbar />
        <main className="flex-grow flex flex-col items-center justify-center text-white p-6 pt-32">
          <h1 className="text-4xl font-bold mb-4">Artigo não encontrado</h1>
          <p className="text-white/60 mb-8">A notícia que você está procurando não existe ou foi removida.</p>
          <button 
            onClick={() => navigate('/noticias')}
            className="px-6 py-3 bg-brand-primary text-white rounded-full font-bold hover:shadow-[0_0_20px_rgba(59,130,246,0.5)] transition-all"
          >
            Voltar para Notícias
          </button>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-deep-black flex flex-col">
      <Navbar />
      <article className="flex-grow pt-32 pb-20">
        <div className="max-w-4xl mx-auto px-6">
          
          {/* Back Button */}
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="mb-8"
        >
          <Link to="/noticias" className="inline-flex items-center text-white/60 hover:text-neon-blue transition-colors group text-sm font-medium">
            <ArrowLeft size={16} className="mr-2 group-hover:-translate-x-1 transition-transform" />
            Voltar para Notícias
          </Link>
        </motion.div>

        {/* Article Header */}
        <motion.header 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="mb-12"
        >
          <div className="flex items-center gap-3 mb-6">
            <span className="px-3 py-1 bg-brand-primary/20 text-brand-primary border border-brand-primary/30 text-xs font-bold uppercase tracking-wider rounded-full">
              {article.category}
            </span>
            <span className="text-white/40 text-sm flex items-center gap-1">
              <Clock size={14} /> {article.readTime} de leitura
            </span>
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-[1.1] tracking-tight">
            {article.title}
          </h1>
          
          <p className="text-xl text-white/60 mb-8 font-light leading-relaxed">
            {article.excerpt}
          </p>
          
          <div className="flex flex-wrap items-center justify-between gap-4 py-6 border-y border-white/10">
            <div className="flex items-center gap-6">
              <div className="flex items-center gap-2 text-white/80">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-brand-primary to-neon-purple flex items-center justify-center text-white font-bold">
                  {article.author.charAt(0)}
                </div>
                <div>
                  <p className="font-medium text-sm">{article.author}</p>
                  <p className="text-white/40 text-xs flex items-center gap-1">
                    <Calendar size={12} /> {article.date}
                  </p>
                </div>
              </div>
            </div>
            
            <button className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 text-white/80 transition-colors text-sm font-medium">
              <Share2 size={16} /> Compartilhar
            </button>
          </div>
        </motion.header>

        {/* Featured Image */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="w-full h-[300px] md:h-[500px] rounded-3xl overflow-hidden mb-16 border border-white/10 shadow-[0_0_50px_rgba(0,0,0,0.5)] relative"
        >
          <img 
            src={article.imageUrl} 
            alt={article.title} 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-deep-black/50 to-transparent" />
        </motion.div>

        {/* Article Content */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="prose prose-invert prose-lg max-w-none prose-headings:text-white prose-headings:font-bold prose-p:text-white/70 prose-p:leading-relaxed prose-a:text-neon-blue hover:prose-a:text-brand-primary prose-strong:text-white"
          dangerouslySetInnerHTML={{ __html: article.content }}
        />
        
        {/* Footer Tags */}
        <div className="mt-16 pt-8 border-t border-white/10 flex flex-wrap gap-3">
          <span className="text-white/40 text-sm font-medium mr-2 flex items-center">Tags:</span>
          {['Tecnologia', 'Inovação', 'Futuro', 'AlleApp'].map(tag => (
            <span key={tag} className="px-3 py-1 bg-white/5 border border-white/10 text-white/60 text-xs rounded-full hover:bg-white/10 hover:text-white cursor-pointer transition-colors">
              #{tag}
            </span>
          ))}
        </div>
        </div>
      </article>
      <Footer />
    </div>
  );
}
