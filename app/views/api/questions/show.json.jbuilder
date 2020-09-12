json.partial! "api/questions/question", question: @question

json.votes do
  json.score @score
end
