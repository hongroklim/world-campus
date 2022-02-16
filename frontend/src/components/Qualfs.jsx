import { getLinkText } from "../utils/elements"

const Qualfs = ({ program }) => {

  console.log(program);

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
        </div>
        
        <div>
          <span>Majors</span>
        </div>

        <div>
          <span>Nationality</span>
        </div>

        <div>
          <span>Others</span>
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
        </div>
      </div>
    </div>
  );
}

export default Qualfs;
