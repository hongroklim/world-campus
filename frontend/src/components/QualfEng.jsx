import React, { useState } from "react"

const QualfEng = ({ program }) => {
  const [label, setLabel] = useState(null);
 
  const hasDetail = (program, input) => {
    for(const e of ['r', 'l', 's', 'w']){
      if(program[`${input}-${e}`])
        return true;
    }
    return false;
  }
  
  const handleToggle = tobeLabel => {
    // Close when trying to set same one
    setLabel(label !== tobeLabel ? tobeLabel : null);
  }

  return (
    <>
      <div>
        {program.ibt ?
          <div>
            <span>TOEFL IBT</span><span>{program.ibt}</span>
            {hasDetail(program, 'ibt') ?
              <button onClick={()=>handleToggle('ibt')}
                      className={label === 'ibt' ? 'btn-active' : null}>
              +</button> : null}
          </div> : null}
        {program.ielts ?
          <div>
            <span>IELTS</span><span>{program.ielts}</span>
            {hasDetail(program, 'ielts') ?
              <button onClick={()=>handleToggle('ielts')}
                      className={label === 'ielts' ? 'btn-active' : null}>
              +</button> : null}
          </div> : null}
        {program.itp ?
          <div>
            <span>TOEFL ITP</span><span>{program.itp}</span>
          </div> : null}
      </div>
      {label ? 
        <div>
          <button onClick={()=>handleToggle(null)}>close</button>
          <table>
            <thead>
              <tr>
                <th>Reading</th>
                <th>Listening</th>
                <th>Speaking</th>
                <th>Writing</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{program[`${label}-r`]}</td>
                <td>{program[`${label}-l`]}</td>
                <td>{program[`${label}-s`]}</td>
                <td>{program[`${label}-w`]}</td>
              </tr>
            </tbody>
          </table>
        </div> : null}
    </>
  )
}

export default QualfEng;
