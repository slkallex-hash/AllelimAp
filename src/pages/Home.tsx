import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import About from '../components/About';
import Features from '../components/Features';
import CTA from '../components/CTA';
import Gallery from '../components/Gallery';
import FAQ from '../components/FAQ';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import AdWall from '../components/AdWall';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <Hero />
      <About />
      <Features />
      <Gallery />
      <CTA />
      <AdWall />
      <FAQ />
      <Contact />
      <Footer />
    </div>
  );
}
