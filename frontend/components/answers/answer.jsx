import React from 'react';
import { Link } from 'react-router-dom';
import ReactQuill from 'react-quill';

class Answer extends React.Component {
    constructor(props) {
      super(props);
    }

    componentDidMount() {
      this.props.getAnswer(this.props.answer.id, this.props.questionId);
    }

    upvote() {
      this.props.upvote(this.props.questionId, this.props.answer.id)
    }

    downvote() {
      this.props.downvote(this.props.questionId, this.props.answer.id)
    }

    render() {
      if (this.props.answer === undefined) {
        return null;
      } else {
        return (
          <>
            <div className="answer-show">
            {this.props.answer.votes ? 
              (<div className="question-show-left__votes">
                  <div className="question-show-left__votes__upvote" onClick={this.upvote}></div>
                  <div className="question-show-left__votes__score">{this.props.answer.votes.score}</div>
                  <div className="question-show-left__votes__downvote" onClick={this.downvote}></div>
                </div>
                ) : null}
              <ReactQuill
                  value={this.props.answer.body}
                  readOnly={true}
                  modules={{toolbar: false}}
                />
            </div>
          </>
        );
      }
    }
}

export default Answer;