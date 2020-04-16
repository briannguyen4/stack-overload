# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
<<<<<<< HEAD

=======
>>>>>>> master
Question.destroy_all
User.destroy_all

demo = User.create({email: "demouser", password: "password"})
<<<<<<< HEAD
q1 = Question.create({title: "this is a test question", body: "This is a test to see if I can properly create a question", author_id: demo.id})
=======
user2 = User.create({email: "username", password: "password"})
q1 = Question.create({title: "sample question", body: "this is a test to see if questions will render", author_id: demo.id})
q2 = Question.create({title: "sample question2", body: "this is another test to see if this question will appear", author_id: user2.id})
>>>>>>> master
