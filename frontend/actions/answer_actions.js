import * as APIUtil from './../util/answer_api_util';

export const RECEIVE_ANSWER = 'RECEIVE_ANSWER';
export const RECEIVE_ANSWERS = 'RECEIVE_ANSWERS';


const receiveAnswer = (answer) => ({
    type: RECEIVE_ANSWER,
    answer,
});

const receiveAnswers = answers => {
    ;
    return ({
        type: RECEIVE_ANSWERS,
        answers
    })
};

export const createAnswer = (answer, questionId) => dispatch => {
    return (APIUtil.createAnswer(answer, questionId).then(answer => 
           dispatch(receiveAnswer(answer)))
    )
};
         
export const requestAnswers = (questionId) => dispatch => {
    return (APIUtil.getAnswers(questionId).then((answers) =>
            dispatch(receiveAnswers(answers)))
    );
};

export const requestAnswer = (questionId, answerId) => dispatch => {
    return (APIUtil.getAnswer(questionId, answerId)
        .then(answer => dispatch(receiveAnswer(answer))));
}