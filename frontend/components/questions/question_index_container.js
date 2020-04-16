import { connect } from 'react-redux';
import QuestionIndex from './question_index';
import { getQuestions } from './../../actions/question_actions';

const mapStateToProps = (state) => {
    return {
        questions: Object.values(state.entities.questions)
    };
};

const mapDispatchToProps = dispatch => {
    return {
        getQuestions: () => dispatch(getQuestions())
    };
};


export default connect(mapStateToProps, mapDispatchToProps)(QuestionIndex);