import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { Laptop, Key, Zap } from 'lucide-react';
import { StepCard } from './StepCard';

export function HowItWorks() {
  const { t } = useLanguage();
  
  const steps = [
    {
      icon: Key,
      title: t('howItWorks.step1.title'),
      description: t('howItWorks.step1.description'),
      number: 1,
    },
    {
      icon: Laptop,
      title: t('howItWorks.step2.title'),
      description: t('howItWorks.step2.description'),
      number: 2,
    },
    {
      icon: Zap,
      title: t('howItWorks.step3.title'),
      description: t('howItWorks.step3.description'),
      number: 3,
    },
  ];

  return (
    <section id="howItWorks" className="section-container bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="section-title text-gradient">{t('howItWorks.title')}</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <StepCard key={index} {...step} />
          ))}
        </div>
      </div>
    </section>
  );
}