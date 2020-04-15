import { RECEIVE_ANSWER, RECEIVE_ANSWERS } from './../actions/answer_actions';

const answersReducer = (state = {}, action) => {
    Object.freeze(state);

    switch (action.type) {
        case RECEIVE_ANSWERS:
            return Object.assign({}, state, action.answers);
        case RECEIVE_ANSWER:
            let answer = {[action.answer.id]: action.answer}
            return Object.assign({}, state, answer);
        default:
            return state;
    }
}

export default answersReducer;