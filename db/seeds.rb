# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Question.destroy_all
User.destroy_all

demo = User.create({email: "demouser", password: "password"})
q1 = Question.create({title: "this is a test question", body: "This is a test to see if I can properly create a question", author_id: demo.id})