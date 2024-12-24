import React from 'react';
import type { LanguageOptionProps } from './types';

export function LanguageOption({ language, isSelected, onSelect }: LanguageOptionProps) {
  return (
    <li>
      <button
        className={`w-full px-4 py-3 md:py-2 flex items-center gap-3 text-left hover:bg-black/5 focus:bg-black/5 focus:outline-none ${
          isSelected ? 'bg-primary/10' : ''
        }`}
        onClick={() => onSelect(language.code)}
        role="option"
        aria-selected={isSelected}
      >
        <img
          src={language.flag}
          alt=""
          className="w-8 h-6 object-cover rounded"
          aria-hidden="true"
        />
        <span className="flex-1 min-w-0">
          <span className="block text-base md:text-sm font-medium text-gray-900">
            {language.nativeName}
          </span>
          <span className="block text-sm md:text-xs text-gray-500">
            {language.name}
          </span>
        </span>
      </button>
    </li>
  );
}