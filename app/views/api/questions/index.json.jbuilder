@questions.each do |ques|
    json.set! ques.id do
        json.extract! ques, :id, :title, :body, :author_id
    end
end