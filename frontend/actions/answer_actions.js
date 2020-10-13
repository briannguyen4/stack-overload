import * as APIUtil from './../util/answer_api_util';
import * as VoteAPIUtil from '../util/vote_api_util';

export const RECEIVE_ANSWER = 'RECEIVE_ANSWER';
export const RECEIVE_ANSWERS = 'RECEIVE_ANSWERS';

const receiveAnswer = (answer) => ({
    type: RECEIVE_ANSWER,
    answer,
});

const receiveAnswers = (answers) => ({
    type: RECEIVE_ANSWERS,
    answers
});

export const createAnswer = (answer, questionId) => dispatch => {
    return (APIUtil.createAnswer(answer, questionId)
        .then(answer => dispatch(receiveAnswer(answer)))
    );
}; 

export const getAnswer = (answerId, questionId) => dispatch => {
    return (APIUtil.getAnswer(answerId, questionId)
        .then(answer => dispatch(receiveAnswer(answer)))
    );
}

export const getAnswers = (questionId) => dispatch => {
    return (APIUtil.getAnswers(questionId)
        .then(answers => dispatch(receiveAnswers(answers)))
    );
}

export const upvoteAnswer = (questionId, answerId) => {
    return dispatch => {
        return VoteAPIUtil.answerUpvote(questionId, answerId)
            .then((answer) => dispatch(receiveAnswer(answer)))
    }
}

export const downvoteAnswer = (questionId, answerId) => {
    return dispatch => {
        return VoteAPIUtil.answerDownvote(questionId, answerId)
            .then((answer) => dispatch(receiveAnswer(answer)))
    }
}