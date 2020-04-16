import { connect } from 'react-redux';
import QuestionShow from './question_index';
import { deleteQuestion } from './../../actions/question_actions';
import {} from '../../actions/session_actions';

const mapStateToProps = (state, ownProps) => {
    return {
        question: state.entities.questions[ownProps.match.params.questionId]
    };
};

const mapDispatchToProps = dispatch => {
    return {
        deleteQuestion: () => dispatch(deleteQuestion())
    };
};


export default connect(mapStateToProps, mapDispatchToProps)(QuestionShow);