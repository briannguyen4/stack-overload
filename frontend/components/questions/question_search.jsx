import React from 'react';
import { Link } from 'react-router-dom';
import NavbarContainer from '../navbar/navbar_container';
import Sidebar from '../main/sidebar';
import Footer from '../main/footer';

class QuestionSearch extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            searchQuery: this.props.searchQuery,
        }
        this.askQuestion = this.askQuestion.bind(this);
    }

    componentDidMount() {
        this.props.clearSearch();
        this.props.search(this.props.searchQuery);
    }

    componentDidUpdate() {
        if (this.state.searchQuery !== this.props.match.params.searchQuery) {
            this.setState({
                searchQuery: this.props.searchQuery
            });
            this.props.clearSearch();
            this.props.search(this.props.searchQuery)
        } 
    }

    askQuestion() {
        this.props.history.push(`/login`);
    }

    render() {
        var parse = require('html-react-parser');

        return (
            <>
            <NavbarContainer/>
            <div className="questions-search-container">
                <Sidebar />
                <div className="questions-search">
                    <div className="questions-search-top">
                        <h1>Search Results</h1>
                        <div className="questions-index__top__btn">
                            <div onClick={this.askQuestion}>Ask Question</div>
                        </div> 
                    </div>  
                    <div className="questions-search-top-results">Results for {this.props.searchQuery}</div>
                    <div className="questions-search-top-number">{this.props.questions.length} results</div>
                    <div>
                    {this.props.questions.map((question, idx) => (
                        <div className="questions-search-question" key={`question${idx}`}>
                            <div className="questions-index__question__left">
                                <span>{question.score}</span>
                                <p>votes</p>
                                <span>{question.answers.length}</span>
                                <p>answers</p>
                            </div>
                            <div className="questions-index__question__info">
                                <Link to={`/questions/${question.id}`}>
                                    <span className="questions-search-question__title">{question.title}</span>
                                    <br/>
                                </Link>
                                <div className="questions-index__question__info__body">{parse(question.body)}</div>
                            </div>
                        </div>
                        ))}
                    </div>
                </div>
            </div>
            <Footer/>
            </>
        );
    }
}

export default QuestionSearch;