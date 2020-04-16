import * as APIUtil from '../util/question_api_util';

export const RECEIVE_QUESTIONS = "RECEIEVE_QUESTIONS";
export const RECEIVE_QUESTION = "RECEIVE_QUESTION";
export const DELETE_QUESTION = "DELETE_QUESTION";
export const RECEIVE_QUESTION_ERRORS = "RECEIEVE_QUESTION_ERRORS";
export const REMOVE_QUESTION = 'REMOVE_QUESTION';

export const receiveQuestions = questions => ({
    type: RECEIVE_QUESTIONS,
    questions
});

export const receiveQuestion = question => ({
    type: RECEIVE_QUESTION,
    question
});

export const removeQuestion = question => ({
    type: REMOVE_QUESTION,
    question
});

export const receiveQuestionErrors = errors => ({
    type: RECEIVE_QUESTION_ERRORS,
    errors
});

export const getQuestions = () => dispatch => {
    return (
      APIUtil.getQuestions()
        .then(questions => dispatch(receiveQuestions(questions)))
    );
};

export const getQuestion = (questionId) => dispatch => {
    return (
      APIUtil.getQuestion(questionId)
        .then(question => dispatch(receiveQuestion(question)))
    );
};

export const createQuestion = (question) => dispatch => {
    return (
        APIUtil.createQuestion(question)
         .then(question => dispatch(receiveQuestion(question)),
         errors => dispatch(receiveQuestionErrors(errors)))
    );
}

export const updateQuestion = (question) => dispatch => {
    return (
        APIUtil.updateQuestion(question)
         .then(question => dispatch(receiveQuestion(question)))
    );
}

export const deleteQuestion = (question) => dispatch => {
    return (
        APIUtil.deleteQuestion(question)
         .then(question => dispatch(removeQuestion(question)))
    );
}

