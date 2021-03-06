class CreateSales < ActiveRecord::Migration[5.2]
  def change
    create_table :sales do |t|
      t.integer :order_id, null: false
      t.integer :shoe_id, null: false
      t.date :date, null: false
      t.string :active, null: false
      t.integer :price, null: false
      t.string :sex, null: false
      t.string :size, null: false

      t.timestamps
    end
  end
end
