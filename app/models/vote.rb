class Vote < ApplicationRecord
    belongs_to :voteable, polymorphic: true

    belongs_to :user,
        foreign_key: :user_id,
        class_name: :User
end
