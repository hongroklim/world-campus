import React, { useState } from "react"

import { loadWeather } from "../utils/repo"

const labels = {
  "t": {"label": 'Temperature'},
  "r": {"label": 'Rainfall'}
};

const Weather = (props) => {
  const [weather] = useState(loadWeather(props.cityId));
  const [label, setLabel] = useState(Object.keys(labels)[0]);
  console.log(weather);

  return (
    <div>
      <h3>Weather</h3>
      <div>
        {Object.keys(labels).map(e => (
          <div onClick={()=>setLabel(e)} key={e}>{labels[e].label}</div>
        ))}
      </div>
      <div>
      </div>
    </div>
  )
}

export default Weather;
