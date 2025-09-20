import { createContext, useContext, useState, ReactNode } from 'react';
import enTranslations from '../localization/en.json';
import mrTranslations from '../localization/mr.json';

type Language = 'en' | 'mr';
type Translations = {
  [key: string]: string;
};

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState<Language>('en'); // Default to English

  const translations: Record<Language, Translations> = {
    en: enTranslations,
    mr: mrTranslations,
  };

  const t = (key: string): string => {
    return translations[language][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
