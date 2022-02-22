import { getLinkText, getListItems } from "../utils/elements"

import QualfEng from "./QualfEng"

const Qualfs = ({ program }) => {
  return (
    <div>
      <h3>Qualifications</h3>
      <div>
        <div>
          <span>GPA</span>
          <span>{program.gpa} / {program["gpa-max"]}</span>
        </div>

        <div>
          <span>English Requirements</span>
          <QualfEng program={program} />
        </div>
        
        <div>
          <span>Majors</span>
          <ul>
            {getListItems(program['restrict-major']).map(e => (
              <li key={e.text}>
                {e.yn ? 'O' : 'X'}
                {getLinkText(e.text)}
              </li>
            ))}
          </ul>
        </div>

        <div>
          <span>Nationality</span>
          <ul>
            {getListItems(program['restrict-nationality']).map(e => (
              <li key={e.text}>
                {e.text}
              </li>
            ))}
          </ul>
        </div>

        <div>
          <span>Others</span>
          <ul>
            <li>
              Leave of Absence :&nbsp; 
              {program["restrict-loa"] === 'X' ? 'Available' : 'Restrict'}
            </li>
            {(program["restrict-others"]||'').split('\n')
                .filter(e => e.trim()).map(e => (
              <li key={e[0]}>
                {getLinkText(e)}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Qualfs;
