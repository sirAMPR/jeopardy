import React from "react";

function PreviousQuestions(props) {
  return (
    <div className="PreviousQuestions">
      <h3>Answered Questions</h3>
      <ol>
        <li>
          <h4>
            {props.question} ({props.category})
          </h4>
          <ul>
            <li>Previous Score: ${props.previousScore}</li>
            <li>New Score: ${props.newScore}</li>
            <li>Submitted Answer: {props.answer}</li>
            <li>Correct Answer: {props.solution}</li>
          </ul>
        </li>
      </ol>
    </div>
  );
}

export default PreviousQuestions;
