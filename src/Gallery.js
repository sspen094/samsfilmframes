import React, { useState, useEffect, useTransition } from 'react';
import FilterBar from './FilterBar';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import images from './images'
import { useTranslation } from "react-i18next";
import LanguageSwitcher from "./LanguageSwitcher";
import { Tooltip } from 'react-tooltip';


const Gallery = () => {
  const [filters, setFilters] = useState({
    colour: [],
    location: [],
    theme: []
  });


  const filteredImages = images.filter(image => {
    return (
      (filters.colour.length === 0 || filters.colour.includes(image.colour)) &&
      (filters.location.length === 0 || filters.location.includes(image.location)) &&
      (filters.theme.length === 0 || filters.theme.includes(image.theme))
    );
  });

  const { t } = useTranslation();

  return (
    <div>
      <div className="gallery-header">
      <h2>{t('navbar-gallery')}</h2>
      </div>
      <FilterBar filters={filters} setFilters={setFilters}></FilterBar>
      <div className="image-gallery">
        {filteredImages.map(image => (
          <Link to={"/gallery/" + image.id} className="gallery-link">
            <img id={"gallery-image-" + image.id} key={image.id} src={process.env.PUBLIC_URL + "/" + image.url} alt={image.category}/>
            <Tooltip anchorId={"gallery-image-" + image.id} content={image.title} place="top-end"/>
          </Link>

        ))}
      </div>
    </div>
  );
};

export default Gallery;
