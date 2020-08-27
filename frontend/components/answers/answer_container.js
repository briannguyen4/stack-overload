import { connect } from 'react-redux';
import Answer from './answer';
import { getAnswer } from "./../../actions/answer_actions";

const mapStateToProps = (state, ownProps) => {
    const questionId = parseInt(ownProps.match.params.questionId);
    const question = state.entities.questions[questionId] || {};
    
    return {
        questionId: questionId,
        question: question,
        currentUserId: state.session.id
    };
};

const mapDispatchToProps = dispatch => {
    return {
        getAnswer: (answerId, questionId) => dispatch(getAnswer(answerId, questionId))
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Answer);

