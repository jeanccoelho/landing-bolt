import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { LanguageSelector } from './LanguageSelector/LanguageSelector';
import { Logo } from './Logo';

export function Navbar() {
  const { t, language, setLanguage } = useLanguage();

  return (
    <nav className="fixed w-full bg-white/90 backdrop-blur-sm z-50 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex items-center">
            <a href="#home" className="flex items-center">
              <Logo />
            </a>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <a href="#features" className="text-gray-700 hover:text-[#00579f]">{t('nav.features')}</a>
            <a href="#howItWorks" className="text-gray-700 hover:text-[#00579f]">{t('nav.howItWorks')}</a>
            <a href="#pricing" className="text-gray-700 hover:text-[#00579f]">{t('nav.pricing')}</a>
            <a 
              href="https://developers.annabank.com.br/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-gray-700 hover:text-[#00579f]"
            >
              {t('nav.docs')}
            </a>
          </div>

          <div className="flex items-center space-x-4">
            <LanguageSelector
              selectedLanguage={language}
              onLanguageChange={setLanguage}
            />
            
            <a 
              href="https://www.annabank.com.br/register" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-[#00579f] text-white px-4 py-2 rounded-md hover:bg-[#004a8c] transition-colors"
            >
              {t('nav.register')}
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}