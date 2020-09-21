export const questionUpvote = (question_id) => {
    return $.ajax({
        method: 'POST',
        url: `/api/questions/${question_id}/upvote`,
        data: { question_id }
    })
}

export const questionDownvote = (question_id) => {
    return $.ajax({
        method: 'POST',
        url: `/api/questions/${question_id}/downvote`,
        data: { question_id }
    })
}

export const answerUpvote = (question_id, answer_id) => {
    return $.ajax({
        method: 'POST',
        url: `/api/questions/${question_id}/answers/${answer_id}/upvote`,
        data: { answer_id }
    })
}

export const answerDownvote = (question_id, answer_id) => {
    return $.ajax({
        method: 'POST',
        url: `/api/questions/${question_id}/answers/${answer_id}/downvote`,
        data: { answer_id }
    })
}
