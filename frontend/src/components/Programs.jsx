import React, { useState, useEffect } from "react"

import PrgmFilter from "./PrgmFilter"
import PrgmList from "./PrgmList"

import { loadPrograms, DEFAULT_FILTERS } from "../utils/repo"

const Programs = () => {
  const [filters, setFilters] = useState(DEFAULT_FILTERS);
  const [favorites, setFavorites] = useState([])
  const [prgms, setPrgms] = useState(loadPrograms());

  const handleFilter = data => {
    setFilters(data);
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
      <PrgmFilter filters={filters} onUpdate={handleFilter} /> 
      <PrgmList prgms={prgms} filters={filters} favorites={favorites}
                onChangeFavorite={handleFavorite} />
    </>
  )
}

export default Programs;
