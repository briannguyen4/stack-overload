import React from 'react';
import Link from 'react-router-dom';


class VoteContainer extends React.Component {
    constructor(props) {
        super(props);
    }
 
    render() {
        return (
            <div className="question-show-body__votes">
                <div className="question-show-body__votes__upvote" onClick={this.upvote}></div>
                <div className="question-show-body__votes__score">{this.props.answer.score}</div>
                <div className="question-show-body__votes__downvote" onClick={this.downvote}></div>
            </div>
        );
    }
}

export default VoteContainer; 
