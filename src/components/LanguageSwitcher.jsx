import React from 'react';
import { useTranslation } from 'react-i18next';

export default function LanguageSwitcher() {
  const { i18n } = useTranslation();

  return (
    <div className="flex items-center space-x-1 text-sm">
      <button
        onClick={() => i18n.changeLanguage('fr')}
        className={`px-2 py-1 rounded ${i18n.language === 'fr' ? 'text-[#007d6f] font-medium' : 'text-gray-500 hover:text-[#007d6f]'}`}
      >
        FR
      </button>
      <span className="text-gray-300">|</span>
      <button
        onClick={() => i18n.changeLanguage('en')}
        className={`px-2 py-1 rounded ${i18n.language === 'en' ? 'text-[#007d6f] font-medium' : 'text-gray-500 hover:text-[#007d6f]'}`}
      >
        EN
      </button>
    </div>
  );
} 