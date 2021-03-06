import * as APIUtil from '../util/question_api_util';
import * as VoteAPIUtil from '../util/vote_api_util';

export const RECEIVE_QUESTIONS = "RECEIEVE_QUESTIONS";
export const RECEIVE_QUESTION = "RECEIVE_QUESTION";
export const DELETE_QUESTION = "DELETE_QUESTION";
export const RECEIVE_QUESTION_ERRORS = "RECEIEVE_QUESTION_ERRORS";
export const REMOVE_QUESTION = 'REMOVE_QUESTION';
export const CLEAR_QUESTION_ERRORS = 'CLEAR_QUESTION_ERRORS';
export const CLEAR_QUESTION_SEARCH = 'CLEAR_QUESTION_SEARCH';

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

export const clearQuestionErrors = () => ({
    type: CLEAR_QUESTION_ERRORS
});

export const clearQuestionSearch = () => ({
    type: CLEAR_QUESTION_SEARCH
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
         errors => dispatch(receiveQuestionErrors(errors.responseJSON)))
    );
}

export const updateQuestion = (question) => dispatch => {
    return (
        APIUtil.updateQuestion(question)
         .then(question => dispatch(receiveQuestion(question)))
    );
}

export const searchQuestions = (searchQuery) => {
    return dispatch => {
        return APIUtil.searchQuestions(searchQuery)
            .then((questions) => dispatch(receiveQuestions(questions)))
    }
}

export const deleteQuestion = (questionId) => dispatch => {
    return (
        APIUtil.deleteQuestion(questionId)
         .then(question => dispatch(removeQuestion(question)))
    );
}

export const upvoteQuestion = (questionId) => {
    return dispatch => {
        return VoteAPIUtil.questionUpvote(questionId)
            .then((question) => dispatch(receiveQuestion(question)))
    }
}

export const downvoteQuestion = (questionId) => {
    return dispatch => {
        return VoteAPIUtil.questionDownvote(questionId)
            .then((question) => dispatch(receiveQuestion(question)))
    }
}





