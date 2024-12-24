import React from 'react';
import { LucideIcon } from 'lucide-react';

interface StepCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  number: number;
}

export function StepCard({ icon: Icon, title, description, number }: StepCardProps) {
  return (
    <div className="card relative">
      <div className="absolute -top-4 -right-4 w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center font-bold">
        {number}
      </div>
      <div className="mb-4 inline-block p-3 bg-primary/10 rounded-lg">
        <Icon className="w-6 h-6 text-primary" />
      </div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
}