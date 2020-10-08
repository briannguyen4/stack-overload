import React from 'react';
import { Link } from 'react-router-dom';
import NavbarContainer from '../navbar/navbar_container';
import AltNavbarContainer from '../navbar/alt_navbar_container';
import Sidebar from '../main/sidebar';
import Footer from '../main/footer';

class QuestionSearch extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            searchQuery: this.props.searchQuery,
        }
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

    render() {
        var parse = require('html-react-parser');

        if (this.props.questions === undefined) {
            return null;
        } else {
            let navbar;
            if (this.props.currentUser) {
                navbar = <AltNavbarContainer />
            } else {
                navbar = <NavbarContainer /> 
            }
            return (
                <>
                {navbar}
                <div className="questions-search-container">
                    <Sidebar />
                    <div className="questions-search">
                        <div className="questions-search-top">
                            <h1>Search Results</h1>
                            <div className="ask-question">
                                <Link to="questions/new">Ask Question</Link>
                            </div> 
                        </div>  
                        <div className="questions-search-top-results">Results for {this.props.searchQuery}</div>
                        <div className="questions-search-top-number">{this.props.questions.length} results</div>
                        <div>
                        {this.props.questions.map((question, idx) => (
                            <div className="questions-search-question" key={`question${idx}`}>
                                <div className="q-vav">
                                    <span className="q-num">{question.score}</span>
                                    <p>votes</p>
                                    <span className="q-num">{question.answers.length}</span>
                                    <p>answers</p>
                                </div>
                                <div className="questions-search-question__container">
                                    <Link to={`/questions/${question.id}`}>
                                        <span className="questions-search-question__title">{question.title}</span>
                                        <br/>
                                    </Link>
                                    <div className="questions-search-question__body">{parse(question.body)}</div>
                                </div>
                            </div>
                            ))}
                        </div>
                    </div>
                    
                </div>
                </>
            );
        }
    }
}

export default QuestionSearch;
