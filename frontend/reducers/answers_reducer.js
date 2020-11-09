import { RECEIVE_ANSWER, RECEIVE_ANSWERS, CLEAR_ANSWERS } from './../actions/answer_actions';

const answersReducer = (state = {}, action) => {
    Object.freeze(state);

    switch (action.type) {
        case RECEIVE_ANSWER:
            let answer = {[action.answer.id]: action.answer}
            return Object.assign({}, state, answer);
        case RECEIVE_ANSWERS:
            return Object.assign({}, state, action.answers);
        case CLEAR_ERRORS:
            return [];
        default:
            return state;
    }
}

export default answersReducer;