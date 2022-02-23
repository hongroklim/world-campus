import React, { useState } from "react"

const graphs = {
  'c': {"label": 'Case', "path": 'grapher/biweekly-covid-cases-per-million-people',
        "title": 'Biweekly confirmed COVID-19 cases per million people'},
  'd': {"label": 'Death', "path": 'grapher/biweekly-covid-deaths-per-million-people',
        "title": 'Biweekly confirmed COVID-19 deaths per million people'},
  'h': {"label": 'Hospitalization', "path": 'grapher/current-covid-patients-icu',
        "title": 'Weekly new ICU admissions for COVID-19'},
  'v': {"label": 'Vaccination', "path": 'explorers/coronavirus-data-explorer',
        "title": 'Share of people vaccinated against COVID-19'}
};

const Covid19 = ({ ctryCode }) => {
  const [label, setLabel] = useState('c');
 
  const getCtryParam = () => {
    return `KOR~USA~${ctryCode}`;
  }

  const getParam = (label, ctryCode) => {
    if(label !== 'v'){
      return {"tab": 'chart', "time": '2021-12-01..latest',
              "country": getCtryParam()};
    }else{
      return {"Metric": 'People vaccinated (by dose)',
              "Relative to Population": 'true',
              "hideControls": 'true',
              "time": 'latest',
              "country": getCtryParam()};
    }
  };

  const getFullPath = (key) => {
    const param = getParam(key, ctryCode);

    const query = Object.keys(param)
      .map(e => `${encodeURIComponent(e)}=${encodeURIComponent(param[e])}`)
      .join('&');

    return `https://ourworldindata.org/${graphs[key].path}?${query}`;
  };

  return (
    <div>
      <h3>Covid 19</h3>
      <div>
        {Object.keys(graphs).map(e => (
          <div className={label === e ? 'label-active' : null}
               onClick={()=>setLabel(e)} key={e}>{graphs[e].label}</div>
        ))}
      </div>
      <div>
        <iframe src={getFullPath(label)} title='covid19' loading='lazy'
                style={{"width": '100%', "height": '600px'}} />
      </div>
    </div>
  )
}

export default Covid19;
