import { RECEIVE_QUESTION, RECEIVE_QUESTIONS, REMOVE_QUESTION, CLEAR_QUESTION_SEARCH } from '../actions/question_actions';

const questionReducer = (state = {}, action) => {
    Object.freeze(state);
    let newState;
    switch (action.type) {
        case RECEIVE_QUESTION:
            newState = Object.assign({}, state);
            newState[action.question.id] = action.question;
            return newState;
        case RECEIVE_QUESTIONS:
            return Object.assign({}, state, action.questions);
        case REMOVE_QUESTION:
            newState = Object.assign({}, state);
            delete newState[action.question.id];
            return newState;
        case CLEAR_QUESTION_SEARCH: 
            return [];
        default:
            return state;
    }
}


export default questionReducer;