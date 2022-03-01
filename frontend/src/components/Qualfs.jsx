import { getLinkText, getListItems } from "../utils/elements"

import QualfEng from "./QualfEng"

const Qualfs = ({ program }) => {
  const majors = getListItems(program['restrict-major']);
  const nationalities = getListItems(program['restrict-nationality']);

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
        
        {majors.length > 0 ?
          <div>
            <span>Majors</span>
            <ul>
              {majors.map(e => (
                <li key={e.text}>
                  {e.yn ? 'O' : 'X'}
                  {e.text}
                </li>
              ))}
            </ul>
          </div> : null}

        {nationalities.length > 0 ?
          <div>
            <span>Nationality</span>
            <ul>
              {nationalities.map(e => (
                <li key={e.text}>
                  {e.yn ? 'O' : 'X'}
                  {e.text}
                </li>
              ))}
            </ul>
          </div> : null}

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
