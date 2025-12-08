import {
  africaQuestions,
  antarcticaQuestions,
  asiaQuestions,
  australiaQuestions,
  englishQuestionsBase,
  europeQuestions,
  mathQuestionsBase,
  northAmericaQuestions,
  scienceQuestionsBase,
  southAmericaQuestions,
  biologyQuestionsBase,
  chemistryQuestionsBase,
  geographyQuestionsBase,
  healthQuestionsBase,
  historyQuestionsBase,
  computerQuestionsBase,
} from "./raw.js"; // Your existing raw questions

// Duplicate the same question set for all grades
function wrapGrades(base) {
  return {
    kindergarten: base,
    grade1: base,
    grade2: base,
    grade3: base,
    grade4: base,
    grade5: base,
  };
}

export const englishQuestions = wrapGrades(englishQuestionsBase);
export const mathQuestions     = wrapGrades(mathQuestionsBase);
export const scienceQuestions  = wrapGrades(scienceQuestionsBase);
export const biologyQuestions  = wrapGrades(biologyQuestionsBase);
export const chemistryQuestions = wrapGrades(chemistryQuestionsBase);
export const geographyQuestions = wrapGrades(geographyQuestionsBase);
export const healthQuestions    = wrapGrades(healthQuestionsBase);
export const historyQuestions   = wrapGrades(historyQuestionsBase);
export const computerQuestions  = wrapGrades(computerQuestionsBase);

// Your continent sets (unchanged)
export {
  africaQuestions,
  antarcticaQuestions,
  asiaQuestions,
  australiaQuestions,
  europeQuestions,
  northAmericaQuestions,
  southAmericaQuestions,
};
