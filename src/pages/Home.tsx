import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import HowItWorks from '../components/HowItWorks';
import Benefits from '../components/Benefits';
import Testimonials from '../components/Testimonials';
import Gallery from '../components/Gallery';
import PricingSection from '../components/PricingSection';
import PortalNewsSection from '../components/PortalNewsSection';
import Stats from '../components/Stats';
import TargetAudience from '../components/TargetAudience';
import EmailCapture from '../components/EmailCapture';
import Differential from '../components/Differential';
import CTA from '../components/CTA';
import FAQ from '../components/FAQ';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import KadamAd from '../components/KadamAd';
import MyBidAd from '../components/MyBidAd';

import InlineCTA from '../components/InlineCTA';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      {/* 3 Anúncios MyBid no Topo */}
      <div className="max-w-7xl mx-auto px-6 pt-24 pb-4 w-full">
        <p className="text-center text-[10px] text-slate-500 uppercase tracking-widest mb-4">Publicidade</p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <MyBidAd admpid="434873" />
          <MyBidAd admpid="434873" />
          <MyBidAd admpid="434873" />
        </div>
      </div>

      <Hero />
      <Stats />
      
      {/* 1 Anúncio Kadam Isolado */}
      <div className="max-w-7xl mx-auto px-6 py-8 w-full">
        <p className="text-center text-[10px] text-slate-500 uppercase tracking-widest mb-2">Publicidade</p>
        <KadamAd />
      </div>

      {/* 1 Anúncio MyBid Isolado */}
      <div className="max-w-7xl mx-auto px-6 py-4 w-full">
        <p className="text-center text-[10px] text-slate-500 uppercase tracking-widest mb-2">Publicidade</p>
        <MyBidAd />
      </div>
      
      <HowItWorks />
      <Differential />
      
      <InlineCTA 
        title="Pronto para automatizar seu primeiro fluxo?" 
        buttonText="Começar grátis" 
      />
      
      <Benefits />
      <Gallery />
      
      {/* Grid de 4 Anúncios Kadam */}
      <div className="max-w-7xl mx-auto px-6 py-16 w-full">
        <p className="text-center text-[10px] text-slate-500 uppercase tracking-widest mb-6">Publicidade</p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <KadamAd />
          <KadamAd />
          <KadamAd />
          <KadamAd />
        </div>
      </div>
      
      <TargetAudience />
      
      <InlineCTA 
        title="Junte-se a milhares de profissionais de elite." 
        buttonText="Testar agora" 
      />
      
      <Testimonials />
      <PricingSection />
      
      {/* Portal News Section - SEO & Authority */}
      <PortalNewsSection />
      
      <EmailCapture />
      <CTA />
      <FAQ />
      <Contact />
      
      {/* 1 Anúncio Kadam Isolado */}
      <div className="max-w-7xl mx-auto px-6 py-8 w-full">
        <p className="text-center text-[10px] text-slate-500 uppercase tracking-widest mb-2">Publicidade</p>
        <KadamAd />
      </div>

      {/* 1 Anúncio MyBid Isolado */}
      <div className="max-w-7xl mx-auto px-6 py-4 w-full">
        <p className="text-center text-[10px] text-slate-500 uppercase tracking-widest mb-2">Publicidade</p>
        <MyBidAd />
      </div>

      <Footer />
    </div>
  );
}
