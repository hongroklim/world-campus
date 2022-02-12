import React, { useState, useEffect } from "react"

import PrgmFilter from "./PrgmFilter"
import PrgmItem from "./PrgmItem"

import mainData from "../world-campus-220212-1.json"

const PrgmList = (props) => {
  return (
    <ul>
      {props.prgms.map(e => (
        <li key={e.sequence}>
          <PrgmItem info={e} onChangeFavorite={props.onChangeFavorite} />
        </li>
      ))}
    </ul>
  )
}

const Programs = () => {
  const [filters, setFilters] = useState([]);
  const [favorites, setFavorites] = useState([])
  const [prgms, setPrgms] = useState(mainData.program || []);

  const handleFilter = data => {
    // TODO setFilters
  };
  
  const handleFavorite = seq => {
    setFavorites(favorites.includes(seq) ?
      favorites.filter(e => e !== seq) : favorites.concat([seq]));
  }

  useEffect(() => {
    // TODO filter program list 
    
    // Update Favorites
    setPrgms(prgms.map(e => {
      return {...e, "isFavorite": favorites.includes(e.sequence)};
    }));
  }, [filters, favorites]);

  return (
    <>
      <h1>Exchange Programs</h1>
      <PrgmFilter filters={filters} onUpdate={handleFilter} />
      <PrgmList prgms={prgms} onChangeFavorite={handleFavorite} />
    </>
  )
}

export default Programs;
