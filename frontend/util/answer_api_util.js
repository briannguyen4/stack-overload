export const createAnswer = (answer, question_id) => (
    $.ajax({
        url: `/api/questions/${question_id}/answers`,
        method: 'POST',
        data: {answer}
    })
);

export const getAnswer = (answer_id, question_id) => (
    $.ajax({
        url: `api/questions/${question_id}/answers/${answer_id}`,
        method: 'GET'
    })
);


export const getAnswers = (question_id) => (
    $.ajax({
        url: `api/questions/${question_id}/answers/`,
        method: 'GET'
    })
);
