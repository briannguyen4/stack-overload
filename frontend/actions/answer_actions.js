import * as APIUtil from './../util/answer_api_util';
export const RECEIVE_ANSWER = 'RECEIVE_ANSWER';

const receiveAnswer = (answer) => ({
    type: RECEIVE_ANSWER,
    answer,
});


export const createAnswer = (answer, questionId) => dispatch => {
    return (APIUtil.createAnswer(answer, questionId)
        .then(answer => dispatch(receiveAnswer(answer)))
    );
};
         

export const getAnswer = (questionId, answerId) => dispatch => {
    return (APIUtil.getAnswer(questionId, answerId)
        .then(answer => dispatch(receiveAnswer(answer)))
    );
}