import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import HowItWorks from '../components/HowItWorks';
import Benefits from '../components/Benefits';
import Testimonials from '../components/Testimonials';
import Gallery from '../components/Gallery';
import PricingSection from '../components/PricingSection';
import NewsSection from '../components/NewsSection';
import Stats from '../components/Stats';
import TargetAudience from '../components/TargetAudience';
import EmailCapture from '../components/EmailCapture';
import CTA from '../components/CTA';
import FAQ from '../components/FAQ';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

import InlineCTA from '../components/InlineCTA';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <Hero />
      <Stats />
      <HowItWorks />
      <InlineCTA 
        title="Pronto para automatizar seu primeiro fluxo?" 
        buttonText="Começar agora" 
      />
      <Benefits />
      <TargetAudience />
      <InlineCTA 
        title="Junte-se a milhares de profissionais de elite." 
        buttonText="Testar grátis" 
      />
      <Gallery />
      <Testimonials />
      <PricingSection />
      <NewsSection />
      <EmailCapture />
      <CTA />
      <FAQ />
      <Contact />
      <Footer />
    </div>
  );
}
