json.array!(@questions) do |question|
    json.id question.id
    json.title question.title
end

