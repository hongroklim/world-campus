import React, { useState } from "react"

import "chart.js/auto"
import { Bar } from "react-chartjs-2"

import { months, CHART_COLORS } from "../utils/chartUtils"
import { loadWeather } from "../utils/repo"

const chartOptions = {
  "responsive": true,
  "plugins": {
    "legend": false
  }
}

const labels = {
  "t": {"label": 'Temperature'},
  "r": {"label": 'Rainfall'}
};

const Weather = (props) => {
  const [weather] = useState(loadWeather(props.cityId));
  const [label, setLabel] = useState(Object.keys(labels)[0]);
  console.log(weather);

  const getOptions = () => {
    const opt = { ...chartOptions };

    if(label === 't'){
      opt.scales = {
        "y": {
          "suggestedMin": 10,
          "suggestedMax": 30
        }
      }
    }

    return opt;
  }

  const getDatasets = () => {
    if(label === 't'){
      return [
        {
          "label": weather.cityName,
          "data": weather.climate.climateMonth.map((e) => (
            [e.minTemp, e.maxTemp]
          )),
          "backgroundColor": CHART_COLORS.red
        }
      ];

    }else if(label === 'r'){
      return [
        {
          "label": 'Rainfall',
          "data": weather.climate.climateMonth.map((e) => e.rainfall),
          "backgroundColor": CHART_COLORS.blue
        }
      ];
    }

    return [];
  }

  return (
    <div>
      <h3>Weather</h3>
      <div>
        {Object.keys(labels).map(e => (
          <div onClick={()=>setLabel(e)} key={e}>{labels[e].label}</div>
        ))}
      </div>
      <div>
        <Bar
          datasetIdKey={label}
          options={getOptions()}
          data={{
            labels: months({"section": 3}),
            datasets: getDatasets(),
          }}
        />
      </div>
    </div>
  )
}

export default Weather;
