import React from 'react';
import './index.css';
import { useTranslation } from "react-i18next";
import LanguageSwitcher from "./LanguageSwitcher";

const Home = () => {

  const { t } = useTranslation();

  return (
    <div className="background-container">
      <div className="homepage-text-container">
        <h1>{t('landing-header')}</h1>
        <p>{t('landing-sub')}</p>
      </div>
    </div>
  );
};

export default Home;
