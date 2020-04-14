import { RECEIVE_QUESTION_ERRORS } from '../actions/question_actions';

const questionErrorsReducer = (state = [], action) => {
    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_QUESTION_ERRORS:
            return action.errors;
        default:
            return state;
    }
};

export default questionErrorsReducer;