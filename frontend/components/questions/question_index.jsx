import React from 'react';
import { Link, withRouter } from 'react-router-dom';
// import AltNavBar from '../navbar/alt_navbar_container';
import NavBarContainer from '../navbar/navbar_container';
import Sidebar from '../main/sidebar';
import Footer from '../main/footer';

class QuestionIndex extends React.Component {
    constructor(props) {
        super(props);
        this.askQuestion = this.askQuestion.bind(this);
    }
    
    componentDidMount() {
        this.props.getQuestions();
    }

    truncate(str) {
        return (str.length > 300) ? str.substr(0, 299) + ' ...' : str;
    }

    askQuestion() {
        this.props.history.push(`/questions/new`);
    }

    render() {
        var parse = require('html-react-parser');
        let navbar;
        // if(this.props.session.id === null) {
        //     navbar = <NavBar/>;
        // } else {
        //     navbar = <AltNavBar/>
        // }
        return (
                <>
                {/* {navbar} */}
                <NavBarContainer/>
                <div className="questions-container">
                    <Sidebar/>
                    <div className="questions-index">
                        <div className="questions-index__top">
                            <h1>All Questions</h1>
                            <div className="questions-index__top__btn">
                                <div onClick={this.askQuestion}>Ask Question</div>
                            </div> 
                        </div>  
                        <p className="questions-index__number">{this.props.questions.length} questions</p>
                        {this.props.questions.map((question, idx) => (
                        <div key={`question${idx}`} className="questions-index__questions">
                            <div className="questions-index__questions__left">
                                <span>{question.score}</span>
                                <p>votes</p>
                                <span>{question.answers.length}</span>
                                <p>answers</p>
                            </div>
                            <div className="questions-index__questions__info">
                                <Link to={`/questions/${question.id}`}>
                                    <span>{question.title}</span>
                                    <br/>
                                </Link>
                                <div className="questions-index__questions__info__body">{parse(this.truncate(question.body))}</div>
                            </div>
                            <div>
                                {question.author}
                            </div>
                        </div>
                        ))}
                    </div>
                </div>
                <Footer/>
                </>
                )
    }
}

export default QuestionIndex;