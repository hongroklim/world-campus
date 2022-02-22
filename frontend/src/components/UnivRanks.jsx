import React, { useState } from "react"

const ranks = {
  "tot": 'Total',
  "cse": "Computer Science",
  "hum": "Humanity"
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

  return (
    <div>
      <div>
        {Object.keys(ranks).map(e => (
          <div key={e} className={label === e ? 'label-active' : null}
                onClick={()=>handleChange(e)}>
            {ranks[e]}
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
