import React from 'react';
import { Link } from 'react-router-dom';
import AltNavbarContainer from '../navbar/alt_navbar_container';
import Sidebar from '../main/sidebar';
import Footer from '../main/footer';


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
            <Sidebar />
            <AltNavbarContainer />
            <div className="questions-body">
                <div className="ask-question">
                    <Link to="questions/new">Ask Question</Link>
                </div>   
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
            <Footer/>
            </>
        );
    }
}

export default QuestionIndex;
