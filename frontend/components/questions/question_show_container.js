import { connect } from 'react-redux';
import QuestionShow from './question_show';
import { getQuestion, deleteQuestion, upvoteQuestion, downvoteQuestion } from './../../actions/question_actions';

const mapStateToProps = (state, ownProps) => {
    
    const questionId = parseInt(ownProps.match.params.questionId);
    const question = state.entities.questions[questionId] || {votes: {score: 0}};
    // const score = state.entities.questions[questionId].votes.score || {}
    

    return {
        questionId: questionId,
        question: question,
        currentUserId: state.session.id 
        // score: score
    };
};

const mapDispatchToProps = dispatch => {
    return {
        deleteQuestion: question => dispatch(deleteQuestion(question)),
        getQuestion: questionId => dispatch(getQuestion(questionId)),
        upvote: questionId => dispatch(upvoteQuestion(questionId)),
        downvote: questionId => dispatch(downvoteQuestion(questionId))
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(QuestionShow);

