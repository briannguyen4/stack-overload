import { connect } from 'react-redux';
import QuestionForm from './question_form';
import { createQuestion } from '../../actions/question_actions';



const mapStateToProps = (state) => {
    return {
      errors: state.errors.question,
      author_id: state.session.id
    };
  };
  
  const mapDispatchToProps = (dispatch) => {
    return {
      createQuestion: (question) => dispatch(createQuestion(question))
    };
  };

  export default connect(mapStateToProps, mapDispatchToProps)(QuestionForm);