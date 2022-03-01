import { useState } from "react";

import EngScore from "./EngScore"

import { loadProfile } from "../utils/repo"

const nationalities = ['Israel', 'Singapore'];

const loaItems = [
  {"label": 'No', "value": 'N'},
  {"label": 'Yes', "value": 'Y'}
]

const Profile = () => {
  const [values, setValues] = useState(loadProfile());
  
  const updateValue = (name, value) => {
    setValues({ ...values, [name]: value });
  }

  const handleChange = event => {
    const { name, value } = event.target;
    updateValue(name, value);
  }
  
  const handleSubmit = async (event) => {
    event.preventDefault();
    // TODO save into IndexDB
    console.log(values);
  }

  return (
    <>
      <h1>Profile</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <span>Major</span>
          <input name="major" type="text" value={values.major}
                 onChange={handleChange} />
        </div>

        <div>
          <span>Nationality</span>
          <select name="nationality" value={values.nationality}
                  onChange={handleChange}>
            <option value="">-</option>
            {nationalities.map(e => (
              <option value={e} key={e}>{e}</option>
            ))}
          </select>
        </div>
        
        <div>
          <span>Is Leave of Absence</span>
          <div>
            {loaItems.map(e => (
              <label>
                <input name="loa" type="radio" key={e.value} value={e.value}
                       onChange={handleChange} checked={values.loa === e.value} />
                {e.label}
              </label>
            ))}
          </div>
        </div>
        
        <div>
          <span>GPA</span>
          <div>
            <input name="gpa" type="number" value={values.gpa}
                   onChange={handleChange} />
            <span>/</span>
            <select name="gpa-max" value={values['gpa-max']}
                    onChange={handleChange} >
              <option value="4.0">4.0</option>
              <option value="4.3">4.3</option>
              <option value="4.5">4.5</option>
              <option value="100">100</option>
            </select>
          </div>
        </div>

        <EngScore testName="TOEFL IBT" testKey="ibt" scores={values.ibt}
                  isScoreSum={true} onUpdateScore={updateValue} />

        <EngScore testName="IELTS" testKey="ielts" scores={values.ielts}
                  isScoreSum={false} onUpdateScore={updateValue} />

        <div>
          <span>TOEFL ITP</span>
          <input name="itp" type="number" value={values.itp}
                 onChange={handleChange} />
        </div>

        <div>
          <input type="submit" value="Save" formNoValidate />
        </div>
      </form>
    </>
  )
}

export default Profile
