import rawData from "../world-campus"

const defaultProfile = {
  "major": "", "loa": "N", "gpa": "", "gpa-max": "4.5",
  "ibt": {"r": 0, "l": 0, "s": 0, "w": 0},
  "ielts": {"r": 0, "l": 0, "s": 0, "w": 0},
  "itp": 0
};

export const loadProfile = () => ({
  "gpa": "4.34",
  "gpa-max": "4.5",
  "ibt": {r: "28", l: "26", s: "20", w: "20"},
  "ielts": {r: 0, l: 0, s: 0, w: 0},
  "itp": 0,
  "loa": "N",
  "major": "Information Systems"
});

export const loadPrograms = () => rawData.program || [];
