import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { ArrowRight, Gift } from 'lucide-react';

export function Hero() {
  const { t } = useLanguage();

  return (
    <section
      id="home"
      className="section-container pt-24 md:pt-16 overflow-hidden" // Increased top padding for mobile
    >
      <div className="absolute inset-0 pointer-events-none">
        <div className="w-[400px] h-[400px] bg-[#E3B04B] opacity-20 rounded-full blur-3xl absolute -top-20 -left-20"></div>
        <div className="w-[300px] h-[300px] bg-[#5dc4b8] opacity-20 rounded-full blur-2xl absolute top-20 right-0"></div>
      </div>

      <div className="relative flex-1 flex items-center max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center w-full">
          <div data-aos="fade-right" className="text-white">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm mb-6 mt-8 md:mt-0">
              <Gift className="w-5 h-5 text-[#E3B04B]" />
              <span className="text-[#E3B04B] font-medium">Feliz Natal e Próspero Ano Novo!</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-extrabold leading-tight mb-6">
              {t('hero.title')}
            </h1>
            <p className="text-lg md:text-xl text-gray-200 mb-8 max-w-lg">
              {t('hero.subtitle')}
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-[#E3B04B] text-white px-8 py-4 rounded-full hover:bg-[#c49841] transition-all flex items-center justify-center shadow-lg hover:shadow-xl">
                {t('hero.cta')}
                <ArrowRight className="ml-2 w-5 h-5" />
              </button>
              <button className="border-2 border-white text-white px-8 py-4 rounded-full hover:bg-white/10 transition-all shadow-lg hover:shadow-xl">
                {t('hero.secondary')}
              </button>
            </div>
          </div>

          <div className="relative" data-aos="fade-left">
            <div className="relative rounded-lg shadow-xl overflow-hidden festive-border">
              <img
                src="https://images.unsplash.com/photo-1563013544-824ae1b704d3?auto=format&fit=crop&w=800"
                alt="PIX Payment Platform"
                className="w-full h-auto"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-30"></div>
            </div>
            <div className="absolute -bottom-10 -right-10 bg-[#E3B04B] w-40 h-40 rounded-full -z-10 blur-2xl opacity-30"></div>
          </div>
        </div>
      </div>
    </section>
  );
}