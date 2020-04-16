import React from 'react';
import ReactDOM from "react-dom";
import AltNavbarContainer from '../navbar/alt_navbar_container';
import {Route} from 'react-router-dom';
import QuestionShowContainer from './question_show_container';

class QuestionIndex extends React.Component {
    constructor(props) {
        super(props);
    }
    
    componentDidMount() {
        this.props.getQuestions();
    }


    render() {
        return (
            <>
            {/* <Route exact path="/questions/:questionId" component={QuestionShowContainer} /> */}
            <AltNavbarContainer />
            <div className="questions-body">
                <h1>Questions</h1>
                {this.props.questions.map((question, idx) => (
                  <ul key={idx}>
                    <li>{question.title}hi</li>
                  </ul>
                ))}
                    
            </div>
            </>
        );
    }
}

export default QuestionIndex;
