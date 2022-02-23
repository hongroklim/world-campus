import UnivRanks from "./UnivRanks"

const labelList = [
  {"key": 'established', "label": 'Established'},
  {"key": 'student-number', "label": 'Students'},
  {"key": 'faculty-number', "label": 'Faculties'},
  {"key": 'campus-size', "label": 'Campus Size'}
]
  
const UnivDetail = ({ univ }) => {
  return (
    <div>
      <h3>University</h3>
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
