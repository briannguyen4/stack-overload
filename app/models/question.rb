class Question < ApplicationRecord
    validates :title, presence: true, length: { minimum: 15 }
    validates :body, presence: true, length: { minimum: 30 }
    validates :author_id, presence: true
    
    belongs_to :author,
        foreign_key: :author_id,
        class_name: :User

end
  