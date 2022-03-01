import React, { useState, useEffect } from "react"

import { loadLocations, DEFAULT_FILTERS } from "../utils/repo"

const checkboxItems = [
  {"key": 'isAppliable', "label": 'Appliable'},
  {"key": 'isFavorite', "label": 'Favorites'},
  {"key": 'allowLoa', "label": 'Allow Leave of Absence'},
  {"key": 'courseEng', "label": 'Courses in English'},
  {"key": 'otherMajor', "label": 'Taking Other Majors'}
];

const PrgmFilter = (props) => {
  const [filters, setFilters] = useState(props.filters);
  const hiddenItems = props.hidden || [];
  
  const locations = loadLocations();

  const handleChange = (event) => {
    const key = event.target.getAttribute('data-key');
    const value = event.target.getAttribute('data-value');
    
    if(checkboxItems.some(e => key === e.key)){
      setFilters({ ...filters, [key]: !filters[key] });

    }else if(key === 'program'){
      const prgmName = event.target.value;
      setFilters({ ...filters, [key]: prgmName });

    }else if(key === 'region'){
      let regions = filters[key];
      const isAppend = !regions.includes(value);

      regions = !isAppend
                ? regions.filter(e => e !== value)
                : regions.concat([value]);
      
      const accepts = regions.reduce((l, e) => l.concat(locations[e]), []);
      let countries = filters.country;
      countries = countries.filter(e => accepts.includes(e));
      
      setFilters({ ...filters, [key]: regions, "country": countries });

    }else if(key === 'country'){
      let countries = filters[key];
      countries = countries.includes(value)
                  ? countries.filter(e => e !== value)
                  : countries.concat([value]);
      setFilters({ ...filters, [key]: countries });
    }
  };
 
  useEffect(() => {
    props.onUpdate(filters);
  }, [filters]);

  return (
    <div>
      <div>
        {!hiddenItems.includes('program') ?
          <input data-key="program" type="text" placeholder="Program Name"
                  value={filters.program} onChange={handleChange} />
        : null}

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
          {/* Checkbox Items */}
          {checkboxItems.map(e => (
            <label key={e.key}>
              <input type="checkbox" defaultChecked={filters[e.key]}
                      onChange={handleChange} data-key={e.key} />
              {e.label}
            </label>
          ))}
        </div>

        <div>
          <button type="button" onClick={() => setFilters(DEFAULT_FILTERS)}>
            clear
          </button>
        </div>
      </div>
    </div>
  )
}

export default PrgmFilter;
