import React, { useState, useEffect } from "react"

import PrgmFilter from "./PrgmFilter"
import PrgmItem from "./PrgmItem"

import { loadProfile, loadPrograms } from "../utils/repo"

import { isAppliable } from "../utils/wizardSupport"

const PrgmList = (props) => {
  const userProfile = loadProfile();
  
  return (
    <ul>
      {props.prgms.map(e => (
        <li key={e.sequence}>
          <PrgmItem info={e}
                isFavorite={props.favorites.includes(e.sequence)}
                isAppliable={isAppliable(userProfile, e)}
                onChangeFavorite={props.onChangeFavorite} />
        </li>
      ))}
    </ul>
  )
}

const Programs = () => {
  const [filters, setFilters] = useState([]);
  const [favorites, setFavorites] = useState([])
  const [prgms, setPrgms] = useState(loadPrograms());

  const handleFilter = data => {
    // TODO setFilters
  };
  
  const handleFavorite = seq => {
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
