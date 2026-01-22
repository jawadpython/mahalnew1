'use client';

import { useState, useRef, useEffect } from 'react';
import { FiGlobe, FiChevronDown } from 'react-icons/fi';
import { useLanguage } from '@/contexts/LanguageContext';
import { Locale, localeNames } from '@/lib/i18n';

export default function LanguageSwitcher() {
  const { locale, setLocale, dir } = useLanguage();

  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const locales: Locale[] = ['en', 'fr', 'ar'];

  useEffect(() => {
    if (typeof document === 'undefined') return;
    
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleLocaleChange = (newLocale: Locale) => {
    setLocale(newLocale);
    setIsOpen(false);
  };

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 px-4 py-2 rounded-lg bg-dark-lighter hover:bg-dark-lightest border border-gray-800 text-gray-300 hover:text-primary transition-all"
        aria-label="Change language"
      >
        <FiGlobe size={18} />
        <span className="font-medium hidden sm:inline">{localeNames[locale]}</span>
        <div className={`transition-transform ${isOpen ? 'rotate-180' : ''}`}>
          <FiChevronDown size={16} />
        </div>
      </button>

      {isOpen && (
        <div
          className={`absolute top-full mt-2 bg-dark-lighter border border-gray-800 rounded-lg shadow-xl overflow-hidden z-50 min-w-[150px] ${
            dir === 'rtl' ? 'left-0' : 'right-0'
          }`}
        >
            {locales.map((loc) => (
              <button
                key={loc}
                onClick={() => handleLocaleChange(loc)}
                className={`w-full px-4 py-3 text-sm font-medium transition-colors hover:bg-primary/10 ${
                  locale === loc
                    ? 'text-primary bg-primary/5'
                    : 'text-gray-300 hover:text-primary'
                } ${dir === 'rtl' ? 'text-right' : 'text-left'}`}
              >
                {localeNames[loc]}
              </button>
            ))}
        </div>
      )}
    </div>
  );
}
