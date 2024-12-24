import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { SocialLinks } from './SocialLinks';

export function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Anna Bank</h3>
            <p className="text-gray-400 mb-2">{t('footer.description')}</p>
            <p className="text-gray-400">{t('footer.address')}</p>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">{t('footer.product')}</h4>
            <ul className="space-y-2">
              <li><a href="#features" className="text-gray-400 hover:text-white">{t('nav.features')}</a></li>
              <li><a href="#pricing" className="text-gray-400 hover:text-white">{t('nav.pricing')}</a></li>
              <li>
                <a 
                  href="https://developers.annabank.com.br/" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-gray-400 hover:text-white"
                >
                  {t('nav.docs')}
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">{t('footer.company')}</h4>
            <ul className="space-y-2">
              <li><a href="#about" className="text-gray-400 hover:text-white">{t('footer.about')}</a></li>
              <li><a href="#contact" className="text-gray-400 hover:text-white">{t('footer.contact')}</a></li>
              <li><a href="#blog" className="text-gray-400 hover:text-white">{t('footer.blog')}</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">{t('footer.social')}</h4>
            <SocialLinks />
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-gray-800 text-center text-gray-400">
          <p>&copy; 2024 Anna Bank. {t('footer.rights')}</p>
        </div>
      </div>
    </footer>
  );
}