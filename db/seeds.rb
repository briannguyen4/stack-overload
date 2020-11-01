# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
# movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
# Character.create(name: 'Luke', movie: movies.first)

Vote.destroy_all
Answer.destroy_all
Question.destroy_all
User.destroy_all

demo = User.create({email: "demouser@email.com", password: "password"})
user1 = User.create({email: "email1@email.com", password: "password"})
user2 = User.create({email: "email2@email.com", password: "password"})
user3 = User.create({email: "email3@email.com", password: "password"})
user4 = User.create({email: "email4@email.com", password: "password"})
user5 = User.create({email: "email5@email.com", password: "password"})
user6 = User.create({email: "email6@email.com", password: "password"})
user7 = User.create({email: "email7@email.com", password: "password"})
user8 = User.create({email: "email8@email.com", password: "password"})
user9 = User.create({email: "email9@email.com", password: "password"})
user10 = User.create({email: "email10@email.com", password: "password"})
user11 = User.create({email: "email11@email.com", password: "password"})
user12 = User.create({email: "email12@email.com", password: "password"})
user13 = User.create({email: "email13@email.com", password: "password"})
user14 = User.create({email: "email14@email.com", password: "password"})
user15 = User.create({email: "email15@email.com", password: "password"})
user16 = User.create({email: "email16@email.com", password: "password"})
user17 = User.create({email: "email17@email.com", password: "password"})
user18 = User.create({email: "email18@email.com", password: "password"})
user19 = User.create({email: "email19@email.com", password: "password"})
user20 = User.create({email: "email20@email.com", password: "password"})
user21 = User.create({email: "email21@email.com", password: "password"})
user22 = User.create({email: "email22@email.com", password: "password"})
user23 = User.create({email: "email23@email.com", password: "password"})
user24 = User.create({email: "email24@email.com", password: "password"})
user25 = User.create({email: "email25@email.com", password: "password"})
user26 = User.create({email: "email26@email.com", password: "password"})
user27 = User.create({email: "email27@email.com", password: "password"})
user28 = User.create({email: "email28@email.com", password: "password"})
user29 = User.create({email: "email29@email.com", password: "password"})
user30 = User.create({email: "email30@email.com", password: "password"})
user31 = User.create({email: "email31@email.com", password: "password"})
user32 = User.create({email: "email32@email.com", password: "password"})
user33 = User.create({email: "email33@email.com", password: "password"})
user34 = User.create({email: "email34@email.com", password: "password"})
user35 = User.create({email: "email35@email.com", password: "password"})
user36 = User.create({email: "email36@email.com", password: "password"})
user37 = User.create({email: "email37@email.com", password: "password"})
user38 = User.create({email: "email38@email.com", password: "password"})
user39 = User.create({email: "email39@email.com", password: "password"})
user40 = User.create({email: "email40@email.com", password: "password"})
user41 = User.create({email: "email41@email.com", password: "password"})
user42 = User.create({email: "email42@email.com", password: "password"})
user43 = User.create({email: "email43@email.com", password: "password"})
user44 = User.create({email: "email44@email.com", password: "password"})

q1 = Question.create({title: "Whats different between == and === ?", body: "Hello, whats the difference between == and === in JavaScript? I've seen != and !== operators as well. Are there more operators?", author_id: user1.id})
q2 = Question.create({title: "What are ownProps in react-redux?", body: "This is a test to see if I can properly create a question", author_id: user1.id})
q3 = Question.create({title: "Why is this.props.match.params empty when I pass in params", body: "I tried to pass params to this.props.match in my React component but the params still return as an empty object. Can anyone help me with figure out why?", author_id: user1.id})
q4 = Question.create({title: "How do you use CSS to get a nav bar to stay at the top of the page? ", body: "I have a navbar but for some reason it won't stay on the top of my page, how do I solve this with CSS?", author_id: user2.id})
q5 = Question.create({title: "Cannot read property x of undefined error, why?", body: "Hey, for some reason I keep getting this error when I try to key into my props, why is that?", author_id: user2.id})
q6 = Question.create({title: "How does the react and redux cycle work?", body: "I've recently started to learn react and redux but I still can't completely wrap my head around how it works, does anyone have a good high overview?", author_id: user2.id})
# q7 = Question.create({title: "", body: "", author_id: .id})
# q8 = Question.create({title: "", body: "", author_id: .id})
# q9 = Question.create({title: "", body: "", author_id: .id})
# q10 = Question.create({title: "", body: "", author_id: .id})
# q11 = Question.create({title: "", body: "", author_id: .id})
# q12 = Question.create({title: "", body: "", author_id: .id})
# q13 = Question.create({title: "", body: "", author_id: .id})
# q14 = Question.create({title: "", body: "", author_id: .id})
# q15 = Question.create({title: "", body: "", author_id: .id})
# q16 = Question.create({title: "", body: "", author_id: .id})
# q17 = Question.create({title: "", body: "", author_id: .id})
# q18 = Question.create({title: "", body: "", author_id: .id})
# q19 = Question.create({title: "", body: "", author_id: .id})
# q20 = Question.create({title: "", body: "", author_id: .id})
# q21 = Question.create({title: "", body: "", author_id: .id})
# q22 = Question.create({title: "", body: "", author_id: .id})
# q23 = Question.create({title: "", body: "", author_id: .id})
# q24 = Question.create({title: "", body: "", author_id: .id})

a1 = Answer.create({body: "Hello, whats the difference between == and === in JavaScript? I've seen != and !== operators as well. Are there more operators?", question_id: q1.id, author_id: user2.id})
# q1 = Answer.create(body: "Hello, whats the difference between == and === in JavaScript? I've seen != and !== operators as well. Are there more operators?", question_id: , author_id: user1.id})

v1 = Vote.create({value: 1, user_id: user1.id, voteable: q1})

