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
      // this.props.upvote(this.props.questionId)
    }

    downvote() {
      // this.props.downvote(this.props.questionId)
    }

    render() {
      if (this.props.answer === undefined) {
        return null;
      } else {
        return (
          <>
            <div className="answer-show">
              <div className="question-show-left__votes">
                <div className="question-show-left__votes__upvote" onClick={this.upvote}></div>
                <div className="question-show-left__votes__score"></div>
                <div className="question-show-left__votes__downvote" onClick={this.downvote}></div>
              </div>
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