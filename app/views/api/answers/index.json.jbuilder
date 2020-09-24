@answers.each do |ans|
    json.set! ans.id do
        json.extract! ans, :id, :body, :author_id, :question_id, :score
    end
end