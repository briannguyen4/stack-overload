import { connect } from 'react-redux';
import Answer from './answer';
import { getAnswer } from "./../../actions/answer_actions";

const mapStateToProps = (state, ownProps) => {
    return {
        questionId: ownProps.questionId,
        answer: ownProps.answer
    };
};

const mapDispatchToProps = dispatch => {
    return {
        getAnswer: (answerId, questionId) => dispatch(getAnswer(answerId, questionId))
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Answer);


