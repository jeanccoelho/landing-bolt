import React from 'react';
import { LanguageProvider } from './contexts/LanguageContext';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Features } from './components/Features';
import { HowItWorks } from './components/HowItWorks';
import { Pricing } from './components/Pricing';
import { Testimonials } from './components/Testimonials/Testimonials';
import { Footer } from './components/Footer';
import { BackToTop } from './components/BackToTop';
import { WhatsAppButton } from './components/WhatsAppButton';
import { HolidayEffects } from './components/HolidayEffects';

export default function App() {
  return (
    <LanguageProvider>
      <div className="min-h-screen bg-gradient-to-b from-[#0a1930] via-[#00579f] to-[#5dc4b8]">
        <HolidayEffects />
        <Navbar />
        <Hero />
        <Features />
        <HowItWorks />
        <Pricing />
        <Testimonials />
        <Footer />
        <WhatsAppButton />
        <BackToTop />
      </div>
    </LanguageProvider>
  );
}