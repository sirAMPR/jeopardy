import React from "react";

function PreviousQuestions(props) {
  return (
    <div className="PreviousQuestions">
      <h3>Answered Questions</h3>
      {props.answeredQuestions && (
        <ol>
          {props.answeredQuestions.map((e) => (
            <li>
              <h4>
                {e.question} ({e.category})
              </h4>
              <ul>
                <li>Previous Score: ${e.previousScore}</li>
                <li>New Score: ${e.newScore}</li>
                <li>Submitted Answer: {e.answer}</li>
                <li>Correct Answer: {e.solution}</li>
              </ul>
            </li>
          ))}
        </ol>
      )}
    </div>
  );
}

export default PreviousQuestions;
