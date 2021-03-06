import { getLinkBtn, getListItems, getLinkText } from "../utils/elements"

const Courses = ({ program }) => {
  return (
    <div>
      <h3>Courses {getLinkBtn(program['course-link'])}</h3>
      <ul>
        <li>In English : {program['course-english'] === 'O' ? 'O' : 'X'}</li>
        <li>Taking Other Majors : {program['course-taking-others'] === 'O' ? 'O' : 'X'}</li>
      </ul>
      {program['course-notes'] ?
        <div>
          <h4>Notes</h4>
          <div>{getLinkText(program['course-notes'])}</div>
        </div> : null}
      {program['course-restriction'] ?
        <div>
          <h4>Restrictions</h4>
          <ul>
            {getListItems(program['course-restriction']).map(e => (
              <li key={e.text}>{getLinkText(e.text)}</li>
            ))}
          </ul>
        </div> : null}
    </div>
  )
}

export default Courses;
