import { connect } from "react-redux";
import { updateQuestion, getQuestion, clearQuestionErrors } from "../../actions/question_actions";
import QuestionForm from './question_form';

const mapStateToProps = (state ,ownProps) => {
    const question = state.entities.questions[ownProps.match.params.questionId];
    return {
        errors: state.errors.question,
        formType: 'Save Edits',
        question: {
            id: question ? question.id : null,
            title: question ? question.title : null,
            body: question ? question.body : null,
            author_id: question ? question.author_id : null 
        }
       
    }
};

const mapDispatchToProps = dispatch => ({
    fetchQuestion: questionId => dispatch(getQuestion(questionId)),
    action: question => dispatch(updateQuestion(question)),
    clearErrors: () => dispatch(clearQuestionErrors())
});

export default connect(mapStateToProps, mapDispatchToProps)(QuestionForm);