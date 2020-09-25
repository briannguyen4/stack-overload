import { connect } from 'react-redux';
import Answer from './answer';
import { upvoteAnswer, downvoteAnswer } from "./../../actions/answer_actions";

const mapStateToProps = (state, ownProps) => {
    const answerId = ownProps.answerId
    const answer = state.entities.answers[answerId] || {};
    // let score = 0;
    // if (typeof state.entities.answers != "undefined ") {
    //     score = state.entities.answers[answerId].score
    // }
    return {
        questionId: ownProps.questionId,
        answer: ownProps.answer,
        score: answer.score
    };
};

const mapDispatchToProps = dispatch => {
    return {
        upvote: (questionId, answerId) => dispatch(upvoteAnswer(questionId, answerId)),
        downvote: (questionId, answerId) => dispatch(downvoteAnswer(questionId, answerId))
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Answer);


