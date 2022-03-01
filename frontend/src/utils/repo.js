import rawData from "../world-campus"

const DEFAULT_PROFILE = {
  "major": "", "loa": "N", "gpa": "", "gpa-max": "4.5",
  "ibt": {"r": 0, "l": 0, "s": 0, "w": 0},
  "ielts": {"ielts": 0, "r": 0, "l": 0, "s": 0, "w": 0},
  "itp": 0
};

export const loadProfile = () => ({
  "gpa": "4.34",
  "gpa-max": "4.5",
  "ibt": {r: "28", l: "26", s: "20", w: "20"},
  "ielts": {ielts: 0, r: 0, l: 0, s: 0, w: 0},
  "itp": 0,
  "loa": "N",
  "major": "Information Systems"
});

export const DEFAULT_FILTERS = {
  "program": '',
  "region": [],
  "country": [],
  "isAppliable": false,
  "isFavorite": false,
  "allowLoa": false,
  "courseEng": false,
  "otherMajor": false,
  "accomodation": 'all'
};

export const loadPrograms = () => (rawData.program || []);
export const loadUniversities = () => (rawData.university || []);
export const loadWeathers = () => (rawData.weather || []);

export const loadLocations = () => {
  const result = {};
  const programs = loadPrograms();

  for(const prgm of programs){
    // Skip invalid items
    if(!prgm.region || !prgm.country)
      continue;

    // Initialize region (Array)
    if(!result.hasOwnProperty(prgm.region))
      result[prgm.region] = [];

    // Append country
    if(!result[prgm.region].includes(prgm.country))
      result[prgm.region].push(prgm.country);
  }

  return result;
};

export const loadProgram = (seq) => {
  for(const e of loadPrograms()){
    if(e.sequence === seq)
      return e;
  }

  return {};
};

export const loadUniversity = (name) => {
  return (loadUniversities()[name] || {});
};

export const loadWeather = (cityId) => {
  return (loadWeathers()[cityId] || {});
};
