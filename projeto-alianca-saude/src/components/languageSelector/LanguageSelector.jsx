import React, { useState } from 'react';
import './languageSelector.css';

import iconBrazil from '../../assets/icons/country/brazil.svg';
import iconUS from '../../assets/icons/country/united-states.svg';

const LanguageSelector = ({ language, setLanguage }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleSelect = (value) => {
    setLanguage(value);
    setIsOpen(false);
  };

  const languages = [
    { value: 'pt-BR', label: 'Português', icon: iconBrazil },
    { value: 'en-US', label: 'English', icon: iconUS },
  ];

  const selectedLanguage = languages.find((lang) => lang.value === language);

  return (
    <div className="language-selector">
      <div
        className="selected-language"
        onClick={() => setIsOpen(!isOpen)}
      >
        <img
          className="language-country-icon"
          src={selectedLanguage.icon}
          alt={selectedLanguage.label}
        />
        <span>{selectedLanguage.label}</span>
      </div>
      {isOpen && (
        <ul className="language-options">
          {languages.map((lang) => (
            <li
              key={lang.value}
              onClick={() => handleSelect(lang.value)}
              className="language-option"
            >
              <img
                className="language-country-icon"
                src={lang.icon}
                alt={lang.label}
              />
              <span>{lang.label}</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default LanguageSelector;
