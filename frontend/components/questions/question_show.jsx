import React from 'react';

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
            <h1>question show page</h1>
            <h2>{this.props.question.title}</h2>
          </>
      )
      }
    }

  
}

export default QuestionShow