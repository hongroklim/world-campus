import { useEffect, useState } from "react";

const nationalities = ['Israel', 'Singapore']

const Profile = () => {
  const [values, setValues] = useState({ "major": "", "loa": "N", "gpa": "" });
  
  const handleChange = event => {
    const { name, value } = event.target;
    setValues({ ...values, [name]: value });
  }
  
  useEffect(() => {
    console.log(values);
  }, [values]);

  return (
    <>
      <h1>Profile</h1>
      <form>
        <div>
          <label>Major</label>
          <input name="major" type="text" value={values.major}
                 onChange={handleChange} />
        </div>

        <div>
          <label>Nationality</label>
          <select name="nationality" value={values.nationality}
                  onChange={handleChange}>
            <option value="">-</option>
            {nationalities.map(e => (
              <option value={e} key={e}>{e}</option>
            ))}
          </select>
        </div>
        
        <div>
          <label>Is Leave of Absence</label>
          <div>
            <label>
              <input name="loa" type="radio" value='N'
                     onChange={handleChange} checked={values.loa === 'N'} />
              No
            </label>
            &nbsp;
            <label>
              <input name="loa" type="radio" value='Y'
                     onChange={handleChange} checked={values.loa === 'Y'} />
              Yes
            </label>
          </div>
        </div>
        
        <div>
          <label>GPA</label>
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
      </form>
    </>
  )
}

export default Profile
