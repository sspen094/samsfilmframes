import React, { useState, useEffect } from 'react';
import FilterBar from './FilterBar';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import images from './images'


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

  return (
    <div>
      <FilterBar filters={filters} setFilters={setFilters}></FilterBar>
      <div className="image-gallery">
        {filteredImages.map(image => (
          <Link to={"/gallery/" + image.id} className="gallery-link">
            <img key={image.id} src={process.env.PUBLIC_URL + "/" + image.url} alt={image.category} />
          </Link>

        ))}
      </div>
    </div>
  );
};

export default Gallery;
