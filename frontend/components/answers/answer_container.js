import { connect } from 'react-redux';
import Answer from './answer';
import { upvoteAnswer, downvoteAnswer, getAnswer } from "./../../actions/answer_actions";

const mapStateToProps = (state, ownProps) => {
    return {
        questionId: ownProps.questionId,
        answer: ownProps.answer
    };
};

const mapDispatchToProps = dispatch => {
    return {
        getAnswer: (answerId, questionId) => dispatch(getAnswer(answerId, questionId)),
        upvote: (questionId, answerId) => dispatch(upvoteAnswer(questionId, answerId)),
        downvote: (questionId, answerId) => dispatch(downvoteAnswer(questionId, answerId))
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Answer);

