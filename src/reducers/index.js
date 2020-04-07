const defaultState = {
  question: "",
  score: 0,
  category: "",
  value: 0,
  solution: "",
  answeredQuestions: [],
};

const jeopardy = (state = defaultState, action) => {
  switch (action.type) {
    case "GET_QUESTION":
      const newQuestionState = {
        question: action.question.question,
        value: action.question.value,
        category:
          (action.question.category && action.question.category.title) || "",
        solution: action.question.answer,
      };
      return Object.assign({}, state, newQuestionState);
    case "ANSWERED_QUESTION":
      const answeredQuestionsState = {
        question: action.question,
        value: action.value,
        category: action.category,
        solution: action.solution,
        answer: action.answer,
        previousScore: action.previousScore,
        newScore: action.newScore,
      };
      state.answeredQuestions.push(answeredQuestionsState);
      return Object.assign({}, state, answeredQuestionsState);
    default:
      return state;
  }
};

export { jeopardy, defaultState };
