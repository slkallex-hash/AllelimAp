import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Home from './pages/Home';
import Privacy from './pages/Privacy';
import PrivacyMemoMatch from './pages/PrivacyMemoMatch';
import Terms from './pages/Terms';
import Pricing from './pages/Pricing';
import NewsIndex from './pages/NewsIndex';
import NewsArticle from './pages/NewsArticle';

function ScrollToTop() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (!hash) {
      window.scrollTo(0, 0);
    } else {
      const id = hash.replace('#', '');
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [pathname, hash]);

  return null;
}

export default function App() {
  return (
    <Router>
      <div className="relative min-h-screen bg-deep-black selection:bg-neon-blue/30 selection:text-neon-blue">
        {/* Futuristic Background Elements - Optimized for performance */}
        <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
          <div className="absolute inset-0 bg-deep-black" />
          <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.1),transparent_70%)]" />
          <div className="absolute inset-0 opacity-10 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:40px_40px]" />
        </div>
        
        <div className="relative z-10 pt-[60px] pb-[60px]">
          <ScrollToTop />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/planos" element={<Pricing />} />
            <Route path="/noticias" element={<NewsIndex />} />
            <Route path="/noticias/:slug" element={<NewsArticle />} />
            <Route path="/politica-de-privacidade" element={<Privacy />} />
            <Route path="/privacidade" element={<Privacy />} />
            <Route path="/privacy" element={<Privacy />} />
            <Route path="/privacidade-memomatch" element={<PrivacyMemoMatch />} />
            <Route path="/termos" element={<Terms />} />
            <Route path="/terms" element={<Terms />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}
