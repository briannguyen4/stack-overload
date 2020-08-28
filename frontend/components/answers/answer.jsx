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

    render() {
      if (this.props.answer === undefined) {
        return null;
      } else {
        return (
          <>
            <div className="answer-show">
              <ReactQuill
                  className="answerquill"
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