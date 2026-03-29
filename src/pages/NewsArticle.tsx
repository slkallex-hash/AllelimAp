import React, { useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { motion } from 'motion/react';
import { ArrowLeft, Clock, User, Share2, Calendar, TrendingUp, ChevronRight, Eye, MessageSquare } from 'lucide-react';
import { newsData } from '../data/news';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function NewsArticle() {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  
  const article = newsData.find(a => a.slug === slug);
  
  // Related articles (same category, excluding current)
  const relatedArticles = newsData
    .filter(a => a.category === article?.category && a.id !== article?.id)
    .slice(0, 3);
    
  // Trending sidebar
  const trendingArticles = newsData
    .filter(a => a.trending && a.id !== article?.id)
    .slice(0, 5);

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
            className="px-6 py-3 bg-white text-deep-black rounded-full font-bold hover:shadow-[0_0_20px_rgba(255,255,255,0.3)] hover:scale-105 transition-all"
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
      <main className="flex-grow pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-6">
          
          <div className="grid lg:grid-cols-12 gap-12">
            
            {/* Main Content (8 cols) */}
            <div className="lg:col-span-8">
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

              <motion.header 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="mb-12"
              >
                <div className="flex items-center gap-3 mb-6">
                  <span className="px-3 py-1 bg-neon-purple text-white text-[10px] font-bold uppercase tracking-wider rounded-sm">
                    {article.category}
                  </span>
                  <span className="text-white/40 text-xs flex items-center gap-1 font-mono">
                    <Clock size={12} /> {article.readTime} de leitura
                  </span>
                  <span className="text-white/40 text-xs flex items-center gap-1 font-mono">
                    <Eye size={12} /> {article.views?.toLocaleString()} views
                  </span>
                </div>
                
                <h1 className="text-4xl md:text-6xl font-bold text-white mb-8 leading-[1.05] tracking-tight">
                  {article.title}
                </h1>
                
                <p className="text-xl text-white/60 mb-10 font-light leading-relaxed italic border-l-4 border-neon-blue pl-6">
                  {article.excerpt}
                </p>
                
                <div className="flex flex-wrap items-center justify-between gap-6 py-8 border-y border-white/10">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-brand-primary to-neon-purple flex items-center justify-center text-white font-bold text-lg">
                      {article.author.charAt(0)}
                    </div>
                    <div>
                      <p className="font-bold text-white">{article.author}</p>
                      <p className="text-white/40 text-xs flex items-center gap-1 font-mono">
                        <Calendar size={12} /> {article.date}
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-3">
                    <button className="p-3 rounded-full bg-white/5 border border-white/10 text-white/60 hover:text-white hover:bg-white/10 transition-all">
                      <Share2 size={18} />
                    </button>
                    <button className="p-3 rounded-full bg-white/5 border border-white/10 text-white/60 hover:text-white hover:bg-white/10 transition-all">
                      <MessageSquare size={18} />
                    </button>
                    <button className="px-6 py-2.5 rounded-full bg-neon-blue text-deep-black font-bold hover:shadow-[0_0_20px_rgba(0,242,255,0.4)] transition-all text-sm">
                      Seguir Autor
                    </button>
                  </div>
                </div>
              </motion.header>

              <motion.div 
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2 }}
                className="w-full aspect-video rounded-3xl overflow-hidden mb-16 border border-white/10 shadow-2xl"
              >
                <img 
                  src={article.imageUrl} 
                  alt={article.title} 
                  className="w-full h-full object-cover"
                />
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="prose prose-invert prose-xl max-w-none prose-headings:text-white prose-headings:font-bold prose-headings:tracking-tight prose-p:text-white/80 prose-p:leading-relaxed prose-a:text-neon-blue hover:prose-a:text-brand-primary prose-strong:text-white prose-img:rounded-3xl prose-blockquote:border-neon-purple prose-blockquote:bg-white/5 prose-blockquote:p-6 prose-blockquote:rounded-r-2xl"
                dangerouslySetInnerHTML={{ __html: article.content }}
              />
              
              {/* Ad Placement */}
              <div className="my-16 p-10 rounded-3xl bg-gradient-to-br from-white/5 to-transparent border border-white/10 text-center">
                <span className="text-white/20 text-[10px] font-mono uppercase tracking-widest mb-4 block">Publicidade</span>
                <h4 className="text-white font-bold text-2xl mb-2">AlleApp Premium</h4>
                <p className="text-white/60 mb-6">Acesse ferramentas exclusivas de automação e IA.</p>
                <Link to="/pricing" className="px-8 py-3 bg-white text-deep-black rounded-full font-bold hover:scale-105 transition-all inline-block">
                  Conhecer Planos
                </Link>
              </div>

              {/* Author Bio Section */}
              <div className="mt-20 p-8 rounded-3xl bg-white/5 border border-white/10 flex flex-col md:flex-row gap-8 items-center md:items-start">
                <div className="w-24 h-24 rounded-full bg-gradient-to-br from-neon-purple to-neon-blue flex-shrink-0 flex items-center justify-center text-3xl font-bold text-white">
                  {article.author.charAt(0)}
                </div>
                <div>
                  <h4 className="text-xl font-bold text-white mb-2">Sobre {article.author}</h4>
                  <p className="text-white/60 leading-relaxed mb-4">
                    Especialista em tecnologia e inovação com mais de 10 anos de experiência cobrindo o mercado global. Apaixonado por IA, blockchain e o futuro da sociedade digital.
                  </p>
                  <div className="flex gap-4">
                    <a href="#" className="text-neon-blue hover:underline text-sm font-bold">Twitter</a>
                    <a href="#" className="text-neon-blue hover:underline text-sm font-bold">LinkedIn</a>
                    <a href="#" className="text-neon-blue hover:underline text-sm font-bold">Newsletter</a>
                  </div>
                </div>
              </div>

              {/* Related Articles */}
              <div className="mt-24">
                <div className="flex items-center justify-between mb-10">
                  <h3 className="text-2xl font-bold text-white">LEIA TAMBÉM</h3>
                  <Link to="/noticias" className="text-neon-blue text-sm font-bold hover:underline">Ver mais</Link>
                </div>
                <div className="grid md:grid-cols-3 gap-6">
                  {relatedArticles.map(rel => (
                    <Link key={rel.id} to={`/noticias/${rel.slug}`} className="group flex flex-col gap-4">
                      <div className="aspect-video rounded-xl overflow-hidden border border-white/10">
                        <img src={rel.imageUrl} alt={rel.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                      </div>
                      <h4 className="text-white font-bold group-hover:text-neon-blue transition-colors line-clamp-2 leading-tight">
                        {rel.title}
                      </h4>
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            {/* Sidebar (4 cols) */}
            <aside className="lg:col-span-4 flex flex-col gap-12">
              
              {/* Trending Sidebar */}
              <div className="p-8 rounded-3xl bg-white/5 border border-white/10">
                <div className="flex items-center gap-2 text-white font-bold text-xl mb-8">
                  <TrendingUp className="text-neon-purple" size={20} />
                  TENDÊNCIAS
                </div>
                <div className="flex flex-col gap-8">
                  {trendingArticles.map((trend, idx) => (
                    <Link key={trend.id} to={`/noticias/${trend.slug}`} className="group flex gap-4 items-start">
                      <span className="text-3xl font-black text-white/10 group-hover:text-neon-purple/40 transition-colors font-mono leading-none">
                        {idx + 1}
                      </span>
                      <div className="flex flex-col">
                        <h5 className="text-white text-sm font-bold group-hover:text-neon-blue transition-colors line-clamp-2 leading-snug">
                          {trend.title}
                        </h5>
                        <div className="flex items-center gap-2 mt-2 text-white/30 text-[10px] font-mono">
                          <span>{trend.category}</span>
                          <span>•</span>
                          <span>{trend.views?.toLocaleString()} views</span>
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>

              {/* Newsletter Sidebar */}
              <div className="p-8 rounded-3xl bg-gradient-to-br from-neon-blue/20 to-transparent border border-neon-blue/20">
                <h4 className="text-white font-bold text-xl mb-4">Newsletter AlleNews</h4>
                <p className="text-white/60 text-sm mb-6">Receba o resumo das notícias mais importantes da semana diretamente no seu e-mail.</p>
                <div className="flex flex-col gap-3">
                  <input 
                    type="email" 
                    placeholder="Seu melhor e-mail" 
                    className="w-full px-4 py-3 bg-deep-black border border-white/10 rounded-xl text-white text-sm focus:border-neon-blue outline-none transition-colors"
                  />
                  <button className="w-full py-3 bg-white text-deep-black font-bold rounded-xl hover:bg-neon-blue transition-colors">
                    INSCREVER AGORA
                  </button>
                </div>
                <p className="text-white/30 text-[10px] mt-4 text-center">Respeitamos sua privacidade. Cancele a qualquer momento.</p>
              </div>

              {/* Categories Sidebar */}
              <div className="p-8 rounded-3xl bg-white/5 border border-white/10">
                <h4 className="text-white font-bold text-xl mb-6">CATEGORIAS</h4>
                <div className="flex flex-col gap-2">
                  {['Inteligência Artificial', 'Criptomoedas', 'Mercado Tech', 'Gadgets', 'Futuro da Tecnologia'].map(cat => (
                    <Link key={cat} to="/noticias" className="flex items-center justify-between py-2 text-white/60 hover:text-white transition-colors group">
                      <span className="text-sm font-medium">{cat}</span>
                      <ChevronRight size={14} className="group-hover:translate-x-1 transition-transform" />
                    </Link>
                  ))}
                </div>
              </div>

            </aside>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
