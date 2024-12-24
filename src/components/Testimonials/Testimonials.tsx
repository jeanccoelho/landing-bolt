import React from 'react';
import { useLanguage } from '../../contexts/LanguageContext';
import { TestimonialCard } from './TestimonialCard';

export function Testimonials() {
  const { t } = useLanguage();

  const testimonials = [
    {
      name: "Ana Silva",
      role: "CEO",
      company: "TechStore",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=150",
      content: t('testimonials.ana'),
      rating: 5
    },
    {
      name: "Carlos Santos",
      role: "CTO",
      company: "PaySmart",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=150",
      content: t('testimonials.carlos'),
      rating: 5
    },
    {
      name: "Mariana Costa",
      role: "Founder",
      company: "ShopNow",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=150",
      content: t('testimonials.mariana'),
      rating: 5
    }
  ];

  return (
    <section className="section-container bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="section-title text-gradient">{t('testimonials.title')}</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard key={index} {...testimonial} />
          ))}
        </div>
      </div>
    </section>
  );
}