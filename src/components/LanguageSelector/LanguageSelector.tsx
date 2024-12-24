import React, { useRef, useState, useEffect } from 'react';
import { ChevronDown } from 'lucide-react';
import { languages } from './languages';
import { LanguageOption } from './LanguageOption';
import type { LanguageSelectorProps } from './types';

export function LanguageSelector({ selectedLanguage, onLanguageChange }: LanguageSelectorProps) {
  const [isOpen, setIsOpen] = useState(false);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const listRef = useRef<HTMLUListElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const selectedLang = languages.find(lang => lang.code === selectedLanguage) || languages[0];

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen]);

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Escape') {
      setIsOpen(false);
      buttonRef.current?.focus();
    } else if (e.key === 'ArrowDown' || e.key === 'ArrowUp') {
      e.preventDefault();
      const options = listRef.current?.querySelectorAll('[role="option"]');
      if (!options?.length) return;

      const currentIndex = Array.from(options).findIndex(
        option => option.getAttribute('aria-selected') === 'true'
      );
      
      let nextIndex = e.key === 'ArrowDown' ? currentIndex + 1 : currentIndex - 1;
      if (nextIndex < 0) nextIndex = options.length - 1;
      if (nextIndex >= options.length) nextIndex = 0;

      (options[nextIndex] as HTMLElement).click();
    }
  };

  return (
    <div className="relative" ref={containerRef} onKeyDown={handleKeyDown}>
      <button
        ref={buttonRef}
        className="md:min-w-[200px] px-2 md:px-4 py-2 flex items-center gap-2 border rounded-lg hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
        aria-haspopup="listbox"
        aria-label="Selecionar idioma"
        role="combobox"
      >
        <img
          src={selectedLang.flag}
          alt=""
          className="w-6 h-4 md:w-8 md:h-6 object-cover rounded"
          aria-hidden="true"
        />
        <span className="hidden md:block flex-1 text-left font-medium">
          {selectedLang.nativeName}
        </span>
        <ChevronDown 
          className={`hidden md:block w-5 h-5 transition-transform ${isOpen ? 'rotate-180' : ''}`}
          aria-hidden="true"
        />
      </button>

      {isOpen && (
        <>
          <div className="md:hidden fixed inset-0 bg-black/20 z-40" onClick={() => setIsOpen(false)} />
          <ul
            ref={listRef}
            className={`
              fixed md:absolute 
              left-0 right-0 
              md:left-auto md:right-0 
              top-[var(--navbar-height)] md:top-full 
              z-50 
              md:w-[280px]
              bg-white 
              md:rounded-lg 
              shadow-lg 
              border 
              overflow-y-auto
              max-h-[calc(100vh-var(--navbar-height))] md:max-h-[320px]
            `}
            role="listbox"
            aria-label="Selecione um idioma"
            style={{ '--navbar-height': '64px' } as React.CSSProperties}
          >
            <div className="md:hidden sticky top-0 px-4 py-3 border-b bg-white">
              <h3 className="text-lg font-semibold">Selecionar idioma</h3>
            </div>
            {languages.map(language => (
              <LanguageOption
                key={language.code}
                language={language}
                isSelected={language.code === selectedLanguage}
                onSelect={(code) => {
                  onLanguageChange(code);
                  setIsOpen(false);
                }}
              />
            ))}
          </ul>
        </>
      )}
    </div>
  );
}