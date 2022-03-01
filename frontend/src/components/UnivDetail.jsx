import UnivRanks from "./UnivRanks"

import { getLinkBtn, getSearchBtn } from "../utils/elements"

const labelList = [
  {"key": 'established', "label": 'Established'},
  {"key": 'student-number', "label": 'Students'},
  {"key": 'faculty-number', "label": 'Faculties'},
  {"key": 'campus-size', "label": 'Campus Size'}
]
  
const UnivDetail = ({ univ, univName }) => {
  return (
    <div>
      <h3>
        University
        {getLinkBtn(univ['official-link'])}
        {getSearchBtn(univName)}
      </h3>
      <div>
        {labelList.filter(e => univ[e.key]).map(e => (
          <div key={e.key}>
            <span>{e.label}</span>
            <span>{univ[e.key]}</span>
          </div>
        ))}
      </div>

      <UnivRanks univ={univ} />
    </div>
  );
}

export default UnivDetail;
