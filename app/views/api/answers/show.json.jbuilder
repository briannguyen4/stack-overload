json.partial! "api/answers/answer", answer: @answer

json.votes do
  json.score @score
end