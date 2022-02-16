import React, { useState } from "react"
import { useParams } from "react-router-dom"

import Qualfs from "./Qualfs"

import { loadProgram } from "../utils/repo"

const Detail = (props) => {
  let { seq } = useParams();
  seq = parseInt(seq);
  
  const [program] = useState(loadProgram(seq));
  // console.log(program);
  
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

      <div>
        <h3>Recruit</h3>
        <ul>
          <li>Number : {program['recruit-number']}</li>
          <li>Period : {program.period}</li>
        </ul>
      </div>

      <Qualfs program={program} />
    </>
  );
}

export default Detail;
