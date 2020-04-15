import { connect } from 'react-redux';
import QuestionForm from './question_index';
import { createQuestion } from '../../actions/question_actions';



const mapStateToProps = (state) => {
    return {
      errors: state.errors.questions
    };
  };
  
  const mapDispatchToProps = (dispatch) => {
    return {
      createQuestion: (question) => dispatch(createQuestion(question))
    };
  };

  export default connect(mapStateToProps, mapDispatchToProps)(QuestionForm);