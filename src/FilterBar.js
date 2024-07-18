// src/FilterBar.js
import React from 'react';
import { useTranslation } from "react-i18next";
import LanguageSwitcher from "./LanguageSwitcher";

const FilterBar = ({ filters, setFilters }) => {
  
  const { t } = useTranslation();
  
  const handleChange = (category, value) => {
    const newFilters = { ...filters };
    if (newFilters[category].includes(value)) {
      newFilters[category] = newFilters[category].filter(item => item !== value);
    } else {
      newFilters[category].push(value);
    }
  setFilters(newFilters);
};
  return (
    <div className="filter-bar">
      <div className="filter-category">
        <div className='filter-header'>
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-palette-fill" viewBox="0 0 16 16">
            <path d="M12.433 10.07C14.133 10.585 16 11.15 16 8a8 8 0 1 0-8 8c1.996 0 1.826-1.504 1.649-3.08-.124-1.101-.252-2.237.351-2.92.465-.527 1.42-.237 2.433.07M8 5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3m4.5 3a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3M5 6.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0m.5 6.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3"/>
          </svg>
          <h4>{t("colour")}</h4>
        </div>        
        <label>
          <input
            type="checkbox"
            //checked={filters.colour.includes('b/w')}
            onChange={() => handleChange('colour', 'B/W')}
          />
          {t("b/w")}
        </label>
        <label>
          <input
            type="checkbox"
           // checked={filters.colour.includes('colour')}
            onChange={() => handleChange('colour', 'Colour')}
          />
          {t("colour")}
        </label>
      </div>
      <div className="filter-category">
        <div className="filter-header">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-geo-alt-fill" viewBox="0 0 16 16">
            <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10m0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6"/>
          </svg>
          <h4>{t('location')}</h4>
        </div>

        <label>
          <input
            type="checkbox"
            //checked={filters.location.includes('Johnstown')}
            onChange={() => handleChange('location', 'Johnstown')}
          />
          Johnstown
        </label>
        <label>
          <input
            type="checkbox"
            //checked={filters.location.includes('St Lawrence River')}
            onChange={() => handleChange('location', 'St Lawrence River')}
          />
          {t('stL')}
        </label>
        <label>
          <input
            type="checkbox"
            //checked={filters.location.includes('Rocky Mountains')}
            onChange={() => handleChange('location', 'Rocky Mountains')}
          />
          {t('rockies')}
        </label>
        <label>
          <input
            type="checkbox"
           // checked={filters.location.includes('Drumheller')}
            onChange={() => handleChange('location', 'Drumheller')}
          />
          Drumheller
        </label>
        <label>
          <input
            type="checkbox"
            //checked={filters.location.includes('Charleston Lake')}
            onChange={() => handleChange('location', 'Charleston Lake')}
          />
          Charleston Lake
        </label>
        <label>
          <input
            type="checkbox"
            //checked={filters.location.includes('Charleston Lake')}
            onChange={() => handleChange('location', 'Ottawa')}
          />
          Ottawa
        </label>
      </div>
      <div className="filter-category">
        <div className="filter-header">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-image" viewBox="0 0 16 16">
            <path d="M6.002 5.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0"/>
            <path d="M2.002 1a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2zm12 1a1 1 0 0 1 1 1v6.5l-3.777-1.947a.5.5 0 0 0-.577.093l-3.71 3.71-2.66-1.772a.5.5 0 0 0-.63.062L1.002 12V3a1 1 0 0 1 1-1z"/>
          </svg>
          <h4>{t('theme')}</h4>
        </div>
        <label>
          <input
            type="checkbox"
            //checked={filters.theme.includes('landscape')}
            onChange={() => handleChange('theme', 'Landscape')}
          />
          {t('landscape')}
        </label>
        <label>
          <input
            type="checkbox"
            //checked={filters.theme.includes('animals')}
            onChange={() => handleChange('theme', 'Animals')}
          />
          {t('animals')}
        </label>
        <label>
          <input
            type="checkbox"
           // checked={filters.theme.includes('people')}
            onChange={() => handleChange('theme', 'People')}
          />
          {t('people')}
        </label>
        <label>
          <input
            type="checkbox"
            //checked={filters.theme.includes('architecture')}
            onChange={() => handleChange('theme', 'Architecture')}
          />
          {t('architecture')}
        </label>
      </div>
    </div>
  );
};

export default FilterBar;
