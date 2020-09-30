json.array!(@questions) do |question|
    json.id question.id
    json.author_id question.author_id
    json.title question.title
    json.body question.body
    json.score question.score
    json.answers question.answers.length
end
