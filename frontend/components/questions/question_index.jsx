import React from 'react';
import { Link } from 'react-router-dom';
import AltNavbarContainer from '../navbar/alt_navbar_container';
import Sidebar from '../main/sidebar';
import Footer from '../main/footer';
import ReactQuill from 'react-quill';
import QuestionShow from './question_show';


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
                    <div className="questions-main">
                        <h1>All Questions</h1>
                        <p>{this.props.questions.length} questions</p>
                        <div className="ask-question">
                            <Link to="questions/new">Ask Question</Link>
                        </div>   
                    </div>
                    {this.props.questions.map((question, idx) => (
                        <div className="question-container">
                            <div className="q-vav">
                                <span className="q-num">0</span>
                                <p>votes</p>
                                <span className="q-num">0</span>
                                <p>answers</p>
                            </div>
                            <ul className="question">
                                <Link to={`/questions/${question.id}`}>
                                    <li key={question.id}>
                                        <span>{question.title}</span>
                                        <br/>
                                    </li>
                                </Link>
                                <li className="question-body">
                                    <ReactQuill
                                        id={`question-body`}
                                        value={question.body}
                                        readOnly={true}
                                        modules={{toolbar: false}}
                                        />
                                </li>
                            </ul>
                            <div>
                                {question.author}
                            </div>
                        </div>
                        )
                    )}
                </div>
                <div className="splash-footer"><Footer/></div>
                </>
                )
    }
}

export default QuestionIndex;
