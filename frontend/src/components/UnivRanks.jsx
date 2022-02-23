import React, { useState } from "react"

const ranks = {
  "tot": 'Total',
  "cse": "Computer Science",
  "hum": "Humanity"
}

const existRank = (univ, rankLabel) => {
  return univ[`${rankLabel}-rank`];
}

const matchRank = (label, key) => {
  return key.startsWith(`${label}-`) && !key.endsWith('-score');
}

const keyToLabel = (key) => {
  return key.replace(/^[a-z]+-/g, '').replace(/-/gi, ' ')
          .replace(/\b\w/g, l => l.toUpperCase());
}

const UnivRanks = ({ univ }) => {
  const [label, setLabel] = useState(null);
  
  const handleChange = (tobeLabel) => {
    setLabel(label !== tobeLabel ? tobeLabel : null);
  }

  if(!Object.keys(ranks).some(e => existRank(univ, e)))
    return (<></>);

  return (
    <div>
      <div>
        {Object.keys(ranks)
            .filter(e => existRank(univ, e)).map(e => (
          <div key={e} className={label === e ? 'label-active' : null}
                onClick={()=>handleChange(e)}>
            <span>{ranks[e]}</span>
            <span>{univ[`${e}-rank`]}</span>
          </div>
        ))}
      </div>

      {label ? <div>
        {Object.keys(univ)
            .filter(e => matchRank(label, e)).map(e => (
          <div key={e}>
            <div>{keyToLabel(e)}</div><div>{univ[e]}</div>
          </div>
        ))}
      </div> : null}
    </div>
  )
}

export default UnivRanks;
