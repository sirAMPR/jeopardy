const defaultState = {
  question: "",
  score: 0,
  category: "",
  value: 0,
  solution: "",
  answeredQuestions: []
};

const jeopardy = (state = defaultState, action) => {
  switch (action.type) {
    case "GET_QUESTION":
      const newQuestionState = {
        question: action.question.question,
        pointValue: action.question.value,
        category:
          (action.question.category && action.question.category.title) || "",
        solution: action.question.answer
      };
      return Object.assign({}, state, newQuestionState);
    case "ANSWERED_QUESTIONS":
      const answeredQuestionsState = {
        question: action.question,
        pointValue: action.pointValue
      };
      return Object.assign({}, state, answeredQuestionsState);
    default:
      return state;
  }
};

export { jeopardy, defaultState };
