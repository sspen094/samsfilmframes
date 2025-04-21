import React from 'react';
import { useTranslation } from 'react-i18next';
import { useState } from 'react';

const LanguageSwitcher = () => {
    
  const { i18n } = useTranslation();
  const [swapLang, setSwapLang] = useState("FR");


  const changeLanguage = () => {
    if (swapLang=="FR"){
        setSwapLang("EN");
        i18n.changeLanguage("FR");
    } else {
        setSwapLang("FR");
        i18n.changeLanguage("EN");
    }

  };

  return (
    <div>
      <button className="languageBtn" onClick={() => changeLanguage()}>{swapLang}</button>
    </div>
  );
};

export default LanguageSwitcher;
