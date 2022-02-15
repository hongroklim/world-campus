import React, { useState, useEffect } from "react"

import PrgmFilter from "./PrgmFilter"
import PrgmList from "./PrgmList"

import { loadPrograms } from "../utils/repo"

const defaultFilters = {
  "program": '',
  "region": [],
  "country": [],
  "isAppliable": false,
  "isFavorite": false
};

const Programs = () => {
  const [filters, setFilters] = useState(defaultFilters);
  const [favorites, setFavorites] = useState([])
  const [prgms, setPrgms] = useState(loadPrograms());

  const handleFilter = data => {
    setFilters(data||defaultFilters);
  };
  
  const handleFavorite = seq => {
    // Add or Remove favorites for the given sequence
    setFavorites(favorites.includes(seq) ?
      favorites.filter(e => e !== seq) : favorites.concat([seq]));
  }

  useEffect(() => {
    // TODO filter program list 

  }, [filters, favorites]);

  return (
    <>
      <h1>Exchange Programs</h1>
      <PrgmFilter filters={filters} defaults={defaultFilters}
                  onUpdate={handleFilter} /> 
      <PrgmList prgms={prgms} filters={filters} favorites={favorites}
                onChangeFavorite={handleFavorite} />
    </>
  )
}

export default Programs;
