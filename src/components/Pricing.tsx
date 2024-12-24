import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { Wallet, ArrowUpRight } from 'lucide-react';
import { PriceCard } from './PriceCard';

export function Pricing() {
  const { t } = useLanguage();

  const plans = [
    {
      name: t('pricing.receive.title'),
      price: t('pricing.receive.price'),
      highlight: t('pricing.receive.highlight'),
      icon: Wallet,
      features: t('pricing.receive.features') as string[],
      isPopular: true,
      buttonText: t('nav.register')
    },
    {
      name: t('pricing.transfer.title'),
      price: t('pricing.transfer.price'),
      highlight: t('pricing.transfer.highlight'),
      icon: ArrowUpRight,
      features: t('pricing.transfer.features') as string[],
      isPopular: false,
      buttonText: t('nav.register')
    },
  ];

  return (
    <section id="pricing" className="section-container bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="section-title text-gradient">{t('pricing.title')}</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {plans.map((plan, index) => (
            <PriceCard key={index} {...plan} />
          ))}
        </div>
      </div>
    </section>
  );
}