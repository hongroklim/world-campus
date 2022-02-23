import { getLinkText } from "../utils/elements"

const Courses = ({ program }) => {
  return (
    <div>
      <h3>Courses</h3>
      <ul>
        <li>In English : {program['course-english'] === 'O' ? 'O' : 'X'}</li>
        <li>Taking Other Majors : {program['course-taking-others'] === 'O' ? 'O' : 'X'}</li>
      </ul>
      {program['course-notes'] ?
        <div>
          <h4>Notes</h4>
          <div>{getLinkText(program['course-notes'])}</div>
        </div> : null}
      <div>
        <h4>Restrictions</h4>
        <div>{getLinkText(program['course-restriction'])}</div>
      </div>
    </div>
  )
}

export default Courses;
