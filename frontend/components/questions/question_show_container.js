import { connect } from 'react-redux';
import QuestionShow from './question_show';
import { getQuestion, deleteQuestion, upvoteQuestion, downvoteQuestion } from './../../actions/question_actions';
import { getAnswers } from './../../actions/answer_actions'

const mapStateToProps = (state, ownProps) => {
    const questionId = parseInt(ownProps.match.params.questionId);
    const question = state.entities.questions[questionId] || {};
    const answers = Object.values(state.entities.answers) || {};

    return {
        questionId: questionId,
        question: question,
        currentUserId: state.session.id,
        answers: answers
    };
};

const mapDispatchToProps = dispatch => {
    return {
        deleteQuestion: question => dispatch(deleteQuestion(question)),
        getQuestion: questionId => dispatch(getQuestion(questionId)),
        upvote: questionId => dispatch(upvoteQuestion(questionId)),
        downvote: questionId => dispatch(downvoteQuestion(questionId)),
        getAnswers: questionId => dispatch(getAnswers(questionId))   
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(QuestionShow);

