const defaultState = {
  question: "",
  score: 0,
  category: "",
  value: 0,
  solution: ""
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
    default:
      return state;
  }
};

export { jeopardy, defaultState };
