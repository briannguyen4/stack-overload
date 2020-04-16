import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import QuestionShow from './question_show';
import { getQuestion, deleteQuestion } from './../../actions/question_actions';

const mapStateToProps = (state, ownProps) => {
    const questionId = parseInt(ownProps.match.params.questionId);
    const question = state.entities.questions[questionId] || {};
    
    return {
        questionId: questionId,
        question: question
    };
};

const mapDispatchToProps = dispatch => {
    return {
        deleteQuestion: () => dispatch(deleteQuestion()),
        getQuestion: questionId => dispatch(getQuestion(questionId))
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(QuestionShow);

