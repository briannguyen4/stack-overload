import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import ReactQuill from 'react-quill';
import VoteContainer from '../main/vote'

class Answer extends React.Component {
    constructor(props) {
      super(props);
      this.upvote = this.upvote.bind(this);
      this.downvote = this.downvote.bind(this);
    }

    upvote() {
      if (!this.props.currentUser) {
        this.props.history.push(`/signup`);
      } else {
        this.props.upvote(this.props.questionId, this.props.answer.id);
      }
    }

    downvote() {
      if (!this.props.currentUser) {
        this.props.history.push(`/signup`);
      } else {
        this.props.downvote(this.props.questionId, this.props.answer.id);
      }
    }

    render() {
      if (this.props.answer === undefined) {
        return null;
      } else {
          return (
            <>
              <div className="answer-show">
              {this.props.answer ? 
                (<div className="question-show-body__votes">
                    <div className="question-show-body__votes__upvote" onClick={this.upvote}></div>
                    <div className="question-show-body__votes__score">{this.props.answer.score}</div>
                    <div className="question-show-body__votes__downvote" onClick={this.downvote}></div>
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

export default withRouter(Answer);