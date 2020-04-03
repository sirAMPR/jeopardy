import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

//import our service
import JeopardyService from "../../jeopardyService";
import GameBoard from "./GameBoard";
import * as JeopardyActions from "../../actions";

class Jeopardy extends Component {
  //set our initial state and set up our service as this.client on this component
  constructor(props) {
    super(props);
    // this.client = new JeopardyService();
    this.state = {
      data: {},
      score: 0,
    };
  }

  //when the component mounts, get the first question
  componentDidMount() {
    this.props.getQuestion();
  }

  checkAnswer = (answer) => {
    let score = this.state.score;
    if (answer.toUpperCase() === this.props.solution.toUpperCase()) {
      score += this.props.value;
    } else {
      score -= this.props.value;
    }
    this.props.answeredQuestion(this.props.question, this.state.score, score);
    this.setState({ score, answer: "" });
    this.props.getQuestion();
  };

  //display the results on the screen
  render() {
    return (
      <div className="Jeopardy">
        <GameBoard
          question={this.props.question}
          category={this.props.category}
          score={this.props.score}
          value={this.props.value}
          checkAnswer={this.checkAnswer}
        />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  question: state.question,
  score: state.score,
  category: state.category,
  value: state.value,
  solution: state.solution,
  answeredQuestions: state.answeredQuestions,
});

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(JeopardyActions, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(Jeopardy);
