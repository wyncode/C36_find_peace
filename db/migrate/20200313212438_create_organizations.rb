class CreateOrganizations < ActiveRecord::Migration[6.0]
  def change
    create_table :organizations do |t|
      t.string :name
      t.string :description
      t.string :resource_description
      t.string :crisis_line
      t.string :regular_phone_number
      t.string :after_hour_phone_number
      t.string :website
      t.string :longitude
      t.string :latitude
      t.string :address

      t.timestamps
    end
  end
end
