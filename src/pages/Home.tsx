import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import About from '../components/About';
import CTA from '../components/CTA';
import Gallery from '../components/Gallery';
import FAQ from '../components/FAQ';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import AdSection from '../components/AdSection';
import NativeAdSection from '../components/NativeAdSection';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <Hero />
      
      {/* Anúncios no Topo (6 blocos) */}
      <AdSection count={6} />
      
      {/* Native Ad Section */}
      <NativeAdSection />
      
      <About />
      
      {/* Anúncios no Meio (12 blocos) */}
      <AdSection 
        count={12} 
        title={<>Nossos <span className="text-neon-blue">Parceiros</span></>}
        subtitle="Conheça as marcas que apoiam o AlleApp e ajudam a manter nossa plataforma."
        id="parceiros"
      />
      
      {/* Native Ad Section */}
      <NativeAdSection />
      
      <Gallery />
      <CTA />
      <FAQ />
      
      {/* Anúncios no Final (12 blocos) */}
      <AdSection count={12} />
      
      {/* Native Ad Section */}
      <NativeAdSection />
      
      <Contact />
      <Footer />
    </div>
  );
}
