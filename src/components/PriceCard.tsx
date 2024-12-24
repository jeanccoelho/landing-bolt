import React from 'react';
import { Check, LucideIcon } from 'lucide-react';

interface PriceCardProps {
  name: string;
  price: string;
  highlight: string;
  features: string[];
  isPopular: boolean;
  buttonText: string;
  icon: LucideIcon;
}

export function PriceCard({ 
  name, 
  price, 
  highlight, 
  features, 
  isPopular, 
  buttonText,
  icon: Icon 
}: PriceCardProps) {
  return (
    <div className={`card relative overflow-hidden ${isPopular ? 'border-primary' : 'border border-gray-200'}`}>      
      <div className="flex items-center gap-3 mb-6">
        <div className="p-3 bg-primary/10 rounded-lg">
          <Icon className="w-6 h-6 text-primary" />
        </div>
        <h3 className="text-xl font-semibold">{name}</h3>
      </div>

      <div className="mb-6">
        <div className="flex items-baseline">
          <span className="text-4xl font-bold text-primary">{price}</span>
          <span className="text-gray-600 ml-2">{highlight}</span>
        </div>
      </div>

      <ul className="space-y-4 mb-8">
        {Array.isArray(features) && features.map((feature, index) => (
          <li key={index} className="flex items-start gap-3">
            <Check className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
            <span className="text-gray-600">{feature}</span>
          </li>
        ))}
      </ul>

      <a 
        href="https://www.annabank.com.br/register" 
        target="_blank" 
        rel="noopener noreferrer"
        className={`block w-full py-3 px-6 rounded-lg transition-colors text-center ${
          isPopular 
            ? 'bg-primary text-white hover:bg-primary/90' 
            : 'border border-primary text-primary hover:bg-primary/10'
        }`}
      >
        {buttonText}
      </a>
    </div>
  );
}