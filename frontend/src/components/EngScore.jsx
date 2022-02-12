import React, { useState, useEffect } from "react"

const EngScore = (props) => {
  const [score, setScore] = useState(props.scores);

  useEffect(() => setScore(props.scores), [props.scores]);

  const handleChange = event => {
    const {name, value} = event.target;

    // Create new state
    const newScore = { ...score, [name]: value }; 
    setScore(newScore);

    // Propagate to its parent
    props.onUpdateScore(props.testKey, newScore);
  }
  
  // get Summation of all parts
  const getSumScore = scores => {
    let sumScore = 0;
    Object.values(scores).map(e => sumScore+=parseFloat(e || 0));
    return sumScore;
  }

  return (
    <div>
      <span>{props.testName}</span>
      <div>
        {/* Total Score */}
        <span>Score</span>
        <input type="number" value={getSumScore(score)} readOnly />

        {Object.keys(score).map(k => (
          <label key={k}>
            {k.toUpperCase()}
            <input name={k} type="number" value={score[k]}
                   onChange={handleChange} />
          </label>
        ))}
      </div>
    </div>
  )
};

export default EngScore;
