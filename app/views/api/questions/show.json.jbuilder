json.partial! "api/questions/question", question: @question

json.score do
  json.score @score
end