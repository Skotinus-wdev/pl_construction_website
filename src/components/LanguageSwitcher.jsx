import React from 'react';

const LanguageSwitcher = ({ currentLanguage, onLanguageChange }) => {
  return (
    <div className="flex items-center space-x-2">
      <button
        onClick={() => onLanguageChange('pl')}
        className={`px-3 py-1 rounded-md text-sm font-medium transition-all duration-200 ${
          currentLanguage === 'pl'
            ? 'bg-orange-500 text-white shadow-lg'
            : 'text-gray-300 hover:text-white hover:bg-white/10'
        }`}
      >
        PL
      </button>
      <span className="text-gray-400">|</span>
      <button
        onClick={() => onLanguageChange('en')}
        className={`px-3 py-1 rounded-md text-sm font-medium transition-all duration-200 ${
          currentLanguage === 'en'
            ? 'bg-orange-500 text-white shadow-lg'
            : 'text-gray-300 hover:text-white hover:bg-white/10'
        }`}
      >
        EN
      </button>
    </div>
  );
};

export default LanguageSwitcher;
