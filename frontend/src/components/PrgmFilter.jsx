import React, { useState, useEffect } from "react"

import { loadLocations } from "../utils/repo"

const PrgmFilter = (props) => {
  const [filters, setFilters] = useState(props.filters);
  
  const locations = loadLocations();

  const handleChange = event => {
    const key = event.target.getAttribute('data-key');
    const value = event.target.getAttribute('data-value');

    switch (key) {
      case 'program':
        const prgmName = event.target.value;
        setFilters({ ...filters, [key]: prgmName });
        break;

      case 'isAppliable':
      case 'isFavorite':
        setFilters({ ...filters, [key]: !filters[key] });
        break;

      case 'region':
        let regions = filters[key];
        const isAppend = !regions.includes(value);

        regions = !isAppend
                  ? regions.filter(e => e !== value)
                  : regions.concat([value]);
        
        // Remove not included countries
        if(key === 'region'){
          const accepts = regions.reduce((l, e) => l.concat(locations[e]), []);
          let countries = filters.country;
          countries = countries.filter(e => accepts.includes(e));
          
          setFilters({ ...filters, [key]: regions, "country": countries });
        }

        break;

      case 'country':
        let countries = filters[key];
        countries = countries.includes(value)
                    ? countries.filter(e => e !== value)
                    : countries.concat([value]);
        setFilters({ ...filters, [key]: countries });
        break;
      default:
    }
  };
 
  useEffect(() => {
    props.onUpdate(filters);
  }, [filters]);

  return (
    <div>
      <div>
        <input data-key="program" type="text" placeholder="Program Name"
                value={filters.program} onChange={handleChange} />

        <div>
          <span>Region</span>
          {Object.keys(locations)
              .sort((a, b) => filters.region.includes(b) - filters.region.includes(a))
              .map(region => (
            <button type="button" key={region} onClick={handleChange}
                    style={{"color": filters.region.includes(region) ? "red" : null}}
                    data-key="region" data-value={region}>
              {region}
            </button>
           ))}
        </div>

        <div>
          <span>Country</span>
          {Object.keys(locations)
              .filter(region => filters.region.length === 0
                                || filters.region.includes(region))
              .reduce((l, v) => l.concat(locations[v]), [])
              .sort((a, b) => filters.country.includes(b) - filters.country.includes(a))
              .map(country => (
                  <button type="button" key={country} onClick={handleChange}
                    style={{"color": filters.country.includes(country) ? "red" : null}}
                    data-key="country" data-value={country}>
                    {country}
                  </button>
           ))}
        </div>

        <div>
          <label>
            <input type="checkbox" defaultChecked={filters.isAppliable}
                    onChange={handleChange} data-key="isAppliable" />
            Appliable
          </label>
          <label>
            <input type="checkbox" defaultChecked={filters.isFavorite}
                    onChange={handleChange} data-key="isFavorite" />
            Favorites
          </label>

          <button type="button" onClick={() => setFilters(props.defaults)}>
            clear
          </button>
        </div>
      </div>
    </div>
  )
}

export default PrgmFilter;
