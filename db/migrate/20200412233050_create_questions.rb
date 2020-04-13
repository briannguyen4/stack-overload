class CreateQuestions < ActiveRecord::Migration[5.2]
  def change
    create_table :questions do |t|
      t.string "title", null: false
      t.text "body", null: false
    end
  end
end
