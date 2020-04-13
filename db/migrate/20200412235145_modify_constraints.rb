class ModifyConstraints < ActiveRecord::Migration[5.2]
  def change
    change_column_null(:questions, :author_id, false)
  end
end
