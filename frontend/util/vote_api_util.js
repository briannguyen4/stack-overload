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

