import React from 'react';
import logoFull from '../assets/logoFull.svg';
import logoMobile from '../assets/logoMobile.svg';

interface LogoProps {
  className?: string;
}

export function Logo({ className = '' }: LogoProps) {
  return (
    <>
      <img 
        src={logoFull} 
        alt="Anna Bank" 
        className={`hidden md:block h-8 w-auto ${className}`}
      />
      <img 
        src={logoMobile} 
        alt="Anna Bank" 
        className={`block md:hidden h-8 w-auto ${className}`}
      />
    </>
  );
}