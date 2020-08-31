export const questionUpvote = (questionId) => {
    return $.ajax({
        method: 'POST',
        url: `/api/questions/${questionId}/upvote`,
        data: { questionId }
    })
}

export const questionDownvote = (questionId) => {
    return $.ajax({
        method: 'POST',
        url: `/api/questions/${questionId}/downvote`,
        data: { questionId }
    })
}

