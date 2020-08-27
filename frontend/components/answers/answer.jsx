import React from 'react';
import { Link } from 'react-router-dom';
import ReactQuill from 'react-quill';

class Answer extends React.Component {
    constructor(props) {
      super(props);
      this.deleteQuestion = this.deleteQuestion.bind(this);
    }

    componentDidMount() {
      this.props.getAnswer(this.props.questionId);
    }

    deleteQuestion() {
      this.props.deleteQuestion(this.props.questionId)
       .then( () => this.props.history.push('/questions'))
    }

    render() {
      if (this.props.question === undefined) {
        return null;
      } else {
        return (
          <>
          <AltNavbarContainer id="qsidebar"/>
            <Sidebar />
            <div className="question-show-page">
              <div className="qshow-top">
                <p>{this.props.question.title}</p>
                <div className="ask-question">
                    <Link to="questions/new">Ask Question</Link>
                </div>   
              </div>
              
              <ReactQuill
                  className="qshow-form"
                  value={this.props.question.body}
                  readOnly={true}
                  modules={{toolbar: false}}
                />

              {this.props.question.author_id === this.props.currentUserId ? 
                (<div className="qshow-buttons">
                  <Link to={`/questions/${this.props.questionId}/edit`}>
                    edit
                  </Link>
                  <a onClick={this.deleteQuestion}>
                    delete
                  </a>
                </div>) : null}

              <AnswerFormContainer questionId={this.props.questionId}/>
            </div>
            <Footer/>
          </>
        );
      }
    }

}

export default Answer;