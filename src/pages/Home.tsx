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
      
      {/* Native Ad Section */}
      <NativeAdSection count={2} />
      
      {/* Anúncios no Topo (6 blocos) */}
      <AdSection count={6} />
      
      {/* Native Ad Section */}
      <NativeAdSection count={2} />
      
      <About />
      
      {/* Native Ad Section */}
      <NativeAdSection count={2} />
      
      {/* Anúncios no Meio (12 blocos) */}
      <AdSection 
        count={12} 
        title={<>Nossos <span className="text-neon-blue">Parceiros</span></>}
        subtitle="Conheça as marcas que apoiam o AlleApp e ajudam a manter nossa plataforma."
        id="parceiros"
      />
      
      {/* Native Ad Section */}
      <NativeAdSection count={4} />
      
      <Gallery />
      
      {/* Native Ad Section */}
      <NativeAdSection count={2} />
      
      <CTA />
      
      {/* Native Ad Section */}
      <NativeAdSection count={2} />
      
      <FAQ />
      
      {/* Anúncios no Final (12 blocos) */}
      <AdSection count={12} />
      
      {/* Native Ad Section */}
      <NativeAdSection count={4} />
      
      <Contact />
      
      {/* Native Ad Section */}
      <NativeAdSection count={2} />
      
      <Footer />
    </div>
  );
}
