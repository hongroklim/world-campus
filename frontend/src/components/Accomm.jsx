import { getLinkText } from "../utils/elements"

const Accomm = ({ program }) => {
  return (
    <div>
      <h3>Accomodation</h3>
      <ul>
        <li>On Campus : {program['on-campus'] === 'O' ? 'O' : 'X'}</li>
        <li>Off Campus: {program['off-campus'] === 'O' ? 'O' : 'X'}</li>
      </ul>

      {program['accomodation-others'] ? 
        <div>
          <h4>Notes</h4>
          <div>{getLinkText(program['accomodation-others'])}</div>
        </div> : null}
    </div>
  )
}

export default Accomm;
