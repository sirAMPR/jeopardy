import React, { Component } from "react";

//import our service
import JeopardyService from "../../jeopardyService";
import AnswerForm from "./AnswerForm";

class Jeopardy extends Component {
  //set our initial state and set up our service as this.client on this component
  constructor(props) {
    super(props);
    this.client = new JeopardyService();
    this.state = {
      data: {},
      score: 0
    };
  }

  //get a new random question from the API and add it to the data object in state
  getNewQuestion() {
    return this.client.getQuestion().then(result => {
      this.setState({
        data: result.data
      });
    });
  }

  //when the component mounts, get the first question
  componentDidMount() {
    this.getNewQuestion();
  }

  checkAnswer = answer => {
    if (answer.toUpperCase() === this.state.data.answer.toUpperCase()) {
      this.setState((state, props) => ({
        score: state.score + state.data.value
      }));
    } else {
      this.setState((state, props) => ({
        score: state.score - state.data.value
      }));
    }

    this.getNewQuestion();
  };

  //display the results on the screen
  render() {
    const category = this.state.data.category && this.state.data.category.title;

    return (
      <div className="Jeopardy">
        <h2>{category}</h2>
        <h3>${this.state.data.value}</h3>
        <div className="clue">{this.state.data.question}</div>
        <AnswerForm checkAnswer={this.checkAnswer} />
        <div className="score">Score: ${this.state.score}</div>
      </div>
    );
  }
}

export default Jeopardy;
