/**
 * Check the applicant's english proficiency to the university
 *
 * @param {Object} profile - must contains either TOEFL IBT, IELTS, TOEFL ITP
 * @param {Object} univ - same as profile's one
 * @return {Boolean}
 */
const isEnglishEligible = (profile, univ) => {
  // TOEFL ITP
  if(univ.itp && parseInt(profile.itp||0) > 0
      && parseInt(profile.itp) >= parseInt(univ.itp)){
    return true;
  }

  // TOEFL IBT
  if(univ.ibt && profile.ibt){
    // Calculate per subject
    for(const e of ['r', 'l', 's', 'w']){
      if(univ[`ibt-${e}`]
            && parseInt(profile.ibt[`${e}`]) < parseInt(univ[`ibt-${e}`]))
        return false;
    }

    // Calculate total score
    const ibtSum = Object.values(profile.ibt)
                        .reduce((sum, e) => sum + parseInt(e||0), 0);

    if(ibtSum >= parseInt(univ.ibt))
      return true;
  }

  // IELTS
  if(univ.ielts && profile.ielts){
    for(const e of ['r', 'l', 's', 'w']){
      if(univ[`ielts-${e}`]
            && parseFloat(profile.ielts[`${e}`]) < parseFloat(univ[`ielts-${e}`]))
        return false;
    }

    if(parseFloat(profile.ielts.ielts||0) >= parseFloat(univ['ielts']))
      return true;
  }

  return true;
}

/**
 * Check whether the candidate is able to apply the university
 *
 * @param {Object} profile - The user's profile
 * @param {Object} univ - The university's information to apply
 * @returns {Boolean}
 */
export const isAppliable = (profile, univ) => {
  // Major
  if(profile.major && univ['restrict-major']){
    const userMajor = profile.major.toLowerCase();
    const majorConds = univ['restrict-major'].split('|').map(e => e.trim());

    let acceptedMajor = null;
    for(let i=0; i < majorConds.length; i++){
      if(majorConds[i].startsWith('(X)')){
        // Restrictions
        if(majorConds[i].toLowerCase().includes(userMajor)){
          return false;
        }

      }else{ // startsWith (O)
        // Acceptance
        if(!acceptedMajor){
          acceptedMajor = majorConds[i].toLowerCase().includes(userMajor);
        }
      }
    }

    if(acceptedMajor === false)
      return false;
  }

  // Nationality
  if(profile.nationality && univ.nationality){
    if(profile.nationality.toLowerCase() === univ.nationality.toLowerCase())
      return false;
  }

  // Leave of Abscence
  if(univ.loa === "N" && profile.loa === "Y")
    return false;

  // GPA
  if(profile.gpa && profile['gpa-max'] && univ.gpa && univ['gpa-max']){
    const myGpa = parseFloat(profile.gpa) / parseFloat(profile['gpa-max']);
    const univGpa = parseFloat(univ.gpa) / parseFloat(univ['gpa-max']);

    if(myGpa < univGpa)
      return false;
  }

  // English Proficiency
  if(!isEnglishEligible(profile, univ))
    return false;

  return true;
}

/**
 * Compare two arrays ignoring their sequences
 *
 * @params {Array} arr1 - comparing one
 * @params {Array} arr2 - comparing one
 * @returns {Boolean}
 */
export const arrEquals = (arr1, arr2) => {
  if(!Array.isArray(arr1) || typeof arr1 !== typeof arr2)
    return false;

  if(arr1.length !== arr2.length)
    return false;

  return arr1.sort().toString() === arr2.sort().toString();
}

/**
 * Compare two objects
 *
 * @params {Object} obj1
 * @params {Object} obj2
 * @returns {Boolean}
 */
export const objEquals = (obj1, obj2) => {
  const key1 = Object.keys(obj1);
  const key2 = Object.keys(obj2);

  if(!arrEquals(key1, key2))
    return false;

  for(const k of key1){
    if(Array.isArray(obj1[k])){
      if(!arrEquals(obj1[k], obj2[k]))
        return false;

    }else if(obj1[k] !== obj2[k]){
      return false;
    }
  }

  return true;
}
