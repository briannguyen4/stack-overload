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
                <div className="questions-search">
                    {this.props.questions.map((question, idx) => (
                        <div key={`question${idx}`}>
                            <h4>{question.title}</h4>
                            <div>{parse(question.body)}</div>
                        </div>
                    ))}
                </div>
                </>
            );
        }
    }
}

export default QuestionSearch;
