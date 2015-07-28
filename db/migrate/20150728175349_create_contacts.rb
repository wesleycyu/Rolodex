class CreateContacts < ActiveRecord::Migration
  def change
    create_table :contacts do |t|
      t.string :firstname
      t.string :lastname
      t.string :email
      t.string :photo
      t.text :notes
      t.timestamps
    end

    create_table :phone_numbers do |t|
      t.references :contact
      t.string :phone_number
      t.timestamps
    end

  end
end
