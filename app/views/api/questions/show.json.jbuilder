json.partial! "api/questions/question", question: @question

json.votes_score do
  json.score @score
end