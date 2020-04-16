import React from 'react';
import AltNavbarContainer from '../navbar/alt_navbar_container';
import { Link } from 'react-router-dom';


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
            <AltNavbarContainer />
            <div className="questions-body">
            <Link to="questions/new" >Ask Question</Link>
                <h1>Top Questions</h1>
                {this.props.questions.map((question, idx) => (
                  <ul key={idx}>
                    <Link to={`/questions/${question.id}`}>
                        <li key={question.id}>
                            {question.title}
                        </li>
                    </Link>
                  </ul>
                ))}
            </div>
            </>
        );
    }
}

export default QuestionIndex;
