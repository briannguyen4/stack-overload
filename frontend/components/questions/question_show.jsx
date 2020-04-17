import React from 'react';
import AltNavbarContainer from '../navbar/alt_navbar_container';
import Sidebar from '../navbar/sidebar';
import AnswerFormContainer from '../answers/answer_form_container';

class QuestionShow extends React.Component {
    constructor(props) {
      super(props);
    }

    componentDidMount() {
      this.props.getQuestion(this.props.questionId);
      
  }
  
    render() {
      if (this.props.question === undefined) {
        return null;
      } else {
        return (
          <>
            <AltNavbarContainer />
            <Sidebar />
            <div className="question-show-page">
              <h1>question show page</h1>
              <h2>{this.props.question.title}</h2>
              <h3>{this.props.question.body}</h3>
              <AnswerFormContainer questionId={this.props.questionId}/>
            </div>

            
          </>
      )
      }
    }

  
}

export default QuestionShow;