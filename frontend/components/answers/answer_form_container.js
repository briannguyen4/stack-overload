import { connect } from "react-redux";
import { getQuestion } from "../../actions/question_actions";
import { createAnswer } from "./../../actions/answer_actions";
import AnswerForm from './answer_form';


const mapStateToProps = (state, ownProps) => {
    return({
        answer: {
            body: "",
            question_id: ownProps.questionId,
            author_id: state.session.id
        },
    
    questionId: ownProps.questionId 
    }); 
};

const mapDispatchToProps = (dispatch) => ({
    getQuestion: questionId => dispatch(getQuestion(questionId)),
    createAnswer: (answer, questionId) => dispatch(createAnswer(answer, questionId))
});

export default connect(mapStateToProps, mapDispatchToProps)(AnswerForm);