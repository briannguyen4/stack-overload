# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
Question.destroy_all
User.destroy_all

demo_user = User.create({email: "demouser", password: "password"})
user = User.create({email: "email", password: "password"})
user2 = User.create({email: "email1", password: "password"})

q1 = Question.create({title: "Whats different between == and === ?", body: "Hello, whats the difference between == and === in JavaScript? I've seen != and !== operators as well. Are there more operators?", author_id: demo_user.id})
q2 = Question.create({title: "What are ownProps in react-redux?", body: "This is a test to see if I can properly create a question", author_id: demo_user.id})
q3 = Question.create({title: "Why is this.props.match.params empty when I pass in params", body: "I tried to pass params to this.props.match in my React component but the params still return as an empty object. Can anyone help me with figure out why?", author_id: user.id})
q4 = Question.create({title: "How do you use CSS to get a nav bar to stay at the top of the page? ", body: "I have a navbar but for some reason it won't stay on the top of my page, how do I solve this with CSS?", author_id: user2.id})
q5 = Question.create({title: "Cannot read property x of undefined error, why?", body: "Hey, for some reason I keep getting this error when I try to key into my props, why is that?", author_id: user2.id})
q6 = Question.create({title: "How does the react and redux cycle work?", body: "I've recently started to learn react and redux but I still can't completely wrap my head around how it works, does anyone have a good high overview?", author_id: demo_user.id})
