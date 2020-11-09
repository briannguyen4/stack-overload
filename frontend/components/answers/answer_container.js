import { connect } from 'react-redux';
import Answer from './answer';
import { upvoteAnswer, downvoteAnswer } from "./../../actions/answer_actions";

const mapStateToProps = (state, ownProps) => {
    const answerId = ownProps.answerId
    const users = state.entities.users;
    // let score = 0;
    // if (typeof state.entities.answers != "undefined ") {
    //     score = state.entities.answers[answerId].score
    // }
    return {
        questionId: ownProps.questionId,
        answer: ownProps.answer,
        currentUser: state.entities.users[state.session.id]
    };
};

const mapDispatchToProps = dispatch => {
    return {
        upvote: (questionId, answerId) => dispatch(upvoteAnswer(questionId, answerId)),
        downvote: (questionId, answerId) => dispatch(downvoteAnswer(questionId, answerId))
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Answer);


