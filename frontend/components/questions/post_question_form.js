import { connect } from 'react-redux';
import QuestionForm from './question_form';
import { createQuestion, clearQuestionErrors } from '../../actions/question_actions';



const mapStateToProps = (state) => {
    return {
      formType: 'Post your question',
      errors: state.errors.question,
      question: {
        title: "",
        body: "",
        author_id:  state.session.id
      }
    };
  };
  
  const mapDispatchToProps = (dispatch) => {
    return {
      action: (question) => dispatch(createQuestion(question)), 
      clearErrors: () => dispatch(clearQuestionErrors())
    };
  };

  export default connect(mapStateToProps, mapDispatchToProps)(QuestionForm);