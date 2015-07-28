class PhoneNumberSeed < ActiveRecord::Migration
  def change
    PhoneNumber.create(
      contact_id: 1,
      phone_number: "250-744-6806"
    )

    PhoneNumber.create(
      contact_id: 2,
      phone_number: "778-977-6806"
    )

    PhoneNumber.create(
      contact_id: 3,
      phone_number: "604-379-8615"
    )

    PhoneNumber.create(
      contact_id: 4,
      phone_number: "604-891-3694"
    )

    PhoneNumber.create(
      contact_id: 1,
      phone_number: "800-598-3145"
    )
  end
end
