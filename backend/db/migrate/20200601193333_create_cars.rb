class CreateCars < ActiveRecord::Migration[6.0]
  def change
    create_table :cars do |t|
      t.references :user, null: false, foreign_key: true
      t.integer :year
      t.string :make
      t.string :model
      t.string :trim

      t.timestamps
    end
  end
end
