import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { Shield, Code2, HeadphonesIcon } from 'lucide-react';
import { FeatureCard } from './FeatureCard';

export function Features() {
  const { t } = useLanguage();

  const features = [
    {
      icon: Shield,
      title: t('features.security.title'),
      description: t('features.security.description'),
    },
    {
      icon: Code2,
      title: t('features.api.title'),
      description: t('features.api.description'),
    },
    {
      icon: HeadphonesIcon,
      title: t('features.support.title'),
      description: t('features.support.description'),
    },
  ];

  return (
    <section id="features" className="section-container bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="section-title text-gradient">{t('features.title')}</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <FeatureCard key={index} {...feature} />
          ))}
        </div>
      </div>
    </section>
  );
}