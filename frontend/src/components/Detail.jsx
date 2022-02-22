import React, { useState } from "react"
import { useParams } from "react-router-dom"

import Qualfs from "./Qualfs"
import UnivDetail from "./UnivDetail"

import { loadProgram, loadUniversity } from "../utils/repo"
import { getListItems } from "../utils/elements"

const Recruit = ({ program }) => {
  return (
    <div>
      <h3>Recruit</h3>
      <ul>
        <li>Number : {program['recruit-number']}</li>
        <li>Period : {getListItems(program.period).map(e => (
          <span key={e.text}>{e.text}</span>
        ))}</li>
      </ul>
    </div>
  )
}

const Detail = (props) => {
  let { seq } = useParams();
  seq = parseInt(seq);
  
  const [program] = useState(loadProgram(seq));
  const [univ] = useState(loadUniversity(program['university-name']));

  console.log(program);
  console.log(univ);

  return (
    <>
      <div>
        {/* Header */}
        <button>go back</button>
      </div>

      <div>
        {/* Summary */}
        <img />
        <h2>{program.name}</h2>
        <span>Region : {program.region}</span>
        <span>Country : {program.country}</span>
        <button>pin</button>
      </div>

      <Recruit program={program} />

      <Qualfs program={program} />
      
      <UnivDetail univ={univ} />
    </>
  );
}

export default Detail;
