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
      score: 0
    };
  }

  // //get a new random question from the API and add it to the data object in state
  // getNewQuestion() {
  //   return this.client.getQuestion().then(result => {
  //     this.setState({
  //       data: result.data
  //     });
  //   });
  // }

  //when the component mounts, get the first question
  componentDidMount() {
    this.props.getQuestion();
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
    console.log(this.props);
    return (
      <div className="Jeopardy">
        <GameBoard
          question={this.props.question}
          category={this.props.category}
          data={this.state.data}
          score={this.state.score}
          checkAnswer={this.checkAnswer}
        />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  question: state.question,
  score: state.score,
  category: state.category,
  value: state.value,
  solution: state.solution
});

const mapDispatchToProps = dispatch => {
  return bindActionCreators(JeopardyActions, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(Jeopardy);
