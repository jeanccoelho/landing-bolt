export interface Language {
  code: string;
  name: string;
  nativeName: string;
  flag: string;
  dir?: 'ltr' | 'rtl';
}

export interface LanguageOptionProps {
  language: Language;
  isSelected: boolean;
  onSelect: (code: string) => void;
}

export interface LanguageSelectorProps {
  selectedLanguage: string;
  onLanguageChange: (code: string) => void;
}