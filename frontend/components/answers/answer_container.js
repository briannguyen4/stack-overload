import { connect } from 'react-redux';
import Answer from './answer';
import { upvoteAnswer, downvoteAnswer, getAnswer } from "./../../actions/answer_actions";

const mapStateToProps = (state, ownProps) => {
    // const answerId = ownProps.answer
    // let score = 0;
    // if (typeof state.entities.answers != "undefined ") {
    //     score = state.entities.answers[ownProps.answer.id].id.score
    // }

    return {
        questionId: ownProps.questionId,
        answer: ownProps.answer,
        // score: score
    };
};

const mapDispatchToProps = dispatch => {
    return {
        getAnswer: (answerId, questionId) => dispatch(getAnswer(answerId, questionId)),
        upvote: (questionId, answerId) => dispatch(upvoteAnswer(questionId, answerId)),
        downvote: (questionId, answerId) => dispatch(downvoteAnswer(questionId))
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Answer);


