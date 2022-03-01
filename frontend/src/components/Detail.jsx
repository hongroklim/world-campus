import React, { useState } from "react"
import { useParams } from "react-router-dom"

import Qualfs from "./Qualfs"
import UnivDetail from "./UnivDetail"
import Courses from "./Courses"
import Accomm from "./Accomm"
import Weather from "./Weather"
import Covid19 from "./Covid19"
import Map from "./Map"

import { loadProgram, loadUniversity } from "../utils/repo"
import { getLinkBtn, getListItems } from "../utils/elements"

const Recruit = ({ program }) => {
  return (
    <div>
      <h3>
        Recruit
        {getLinkBtn(program['official-link'])}
      </h3>
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
      
      <UnivDetail univ={univ} univName={program['university-name']} />

      <Courses program={program} />
      
      <Accomm program={program} />

      {univ['map-iframe'] ? <Map link={univ['map-iframe']} /> : null}

      {univ['city-id'] ? <Weather cityId={univ['city-id']} /> : null}

      {univ['country-code'] ? <Covid19 ctryCode={univ['country-code']} /> : null}
    </>
  );
}

export default Detail;
