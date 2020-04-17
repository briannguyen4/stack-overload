import { connect } from 'react-redux';
import QuestionForm from './question_form';
import { createQuestion, clearQuestionErrors } from '../../actions/question_actions';



const mapStateToProps = (state) => {
    return {
      errors: state.errors.question,
      author_id: state.session.id,
      formType: 'Post your question'
    };
  };
  
  const mapDispatchToProps = (dispatch) => {
    return {
      action: (question) => dispatch(createQuestion(question)), 
      clearErrors: () => dispatch(clearQuestionErrors())
    };
  };

  export default connect(mapStateToProps, mapDispatchToProps)(QuestionForm);