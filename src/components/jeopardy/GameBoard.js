import React from "react";

import AnswerForm from "./AnswerForm";

function GameBoard(props) {
  // const category = props.data.category && props.data.category.title;

  return (
    <div className="GameBoard">
      <h2>{props.category}</h2>
      <h3>${props.value}</h3>
      <div className="clue">{props.question}</div>
      <AnswerForm checkAnswer={props.checkAnswer} />
      <div className="score">Score: ${props.score}</div>
    </div>
  );
}

export default GameBoard;
