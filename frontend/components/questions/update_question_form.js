import { connect } from "react-redux";
import { updateQuestion, getQuestion, clearQuestionErrors } from "../../actions/question_actions";
import QuestionForm from './question_form';

const mapStateToProps = (state ,ownProps) => {
    const question = state.entities.questions[ownProps.match.params.questionId];
    return {
        formType: 'Save Edits',
        errors: state.errors.question,
        question: {
            id: question ? question.id : null,
            title: question ? question.title : null,
            body: question ? question.body : null,
            author_id: question ? question.author_id : null 
        }
       
    }
};

const mapDispatchToProps = dispatch => ({
    action: question => dispatch(updateQuestion(question)),
    fetchQuestion: questionId => dispatch(getQuestion(questionId)),
    clearErrors: () => dispatch(clearQuestionErrors())
});

export default connect(mapStateToProps, mapDispatchToProps)(QuestionForm);