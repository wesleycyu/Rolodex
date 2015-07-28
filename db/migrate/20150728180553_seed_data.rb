class SeedData < ActiveRecord::Migration
  def change
    Contact.create(
      firstname: "Peter",
      lastname: "Parker",
      email: "pparker@dailybugle.com"
    )

    Contact.create(
      firstname: "Anthony",
      lastname: "Stark",
      email: "tony@starkenterprises.com"
    )

    Contact.create(
      firstname: "Robert",
      lastname: "Banner",
      email: "bbanner@gammacorp.com"
    )

    Contact.create(
      firstname: "Bulma",
      lastname: "Toritama",
      email: "bulmar@capsulecorp.com"
    )
  end
end
