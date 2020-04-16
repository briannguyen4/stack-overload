class Answer < ApplicationRecord
    validates :body, :author_id, :question_id, presence: true
    
    belongs_to :author,
        foreign_key: :author_id,
        class_name: :User

    belongs_to :question,
        foreign_key: :question_id,
        class_name: :Question
end
  