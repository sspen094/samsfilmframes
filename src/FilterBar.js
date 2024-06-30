// src/FilterBar.js
import React from 'react';

const FilterBar = ({ filters, setFilters }) => {
  
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
        <h3>Colour</h3>
        <label>
          <input
            type="checkbox"
            //checked={filters.colour.includes('b/w')}
            onChange={() => handleChange('colour', 'B/W')}
          />
          B/W
        </label>
        <label>
          <input
            type="checkbox"
           // checked={filters.colour.includes('colour')}
            onChange={() => handleChange('colour', 'Colour')}
          />
          Colour
        </label>
      </div>
      <div className="filter-category">
        <h3>Location</h3>
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
          St Lawrence River
        </label>
        <label>
          <input
            type="checkbox"
            //checked={filters.location.includes('Rocky Mountains')}
            onChange={() => handleChange('location', 'Rocky Mountains')}
          />
          Rocky Mountains
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
        <h3>Theme</h3>
        <label>
          <input
            type="checkbox"
            //checked={filters.theme.includes('landscape')}
            onChange={() => handleChange('theme', 'Landscape')}
          />
          Landscape
        </label>
        <label>
          <input
            type="checkbox"
            //checked={filters.theme.includes('animals')}
            onChange={() => handleChange('theme', 'Animals')}
          />
          Animals
        </label>
        <label>
          <input
            type="checkbox"
           // checked={filters.theme.includes('people')}
            onChange={() => handleChange('theme', 'People')}
          />
          People
        </label>
        <label>
          <input
            type="checkbox"
            //checked={filters.theme.includes('architecture')}
            onChange={() => handleChange('theme', 'Architecture')}
          />
          Architecture
        </label>
      </div>
    </div>
  );
};

export default FilterBar;
