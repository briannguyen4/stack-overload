@answers.each do |answer|
    json.set! answer.id do
        json.id answer.id
        json.author_id answer.author_id
        json.question_id answer.question_id
        json.body answer.body
        json.score answer.score
    end
end