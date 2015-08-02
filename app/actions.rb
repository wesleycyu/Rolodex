# Show All Contacts
get '/' do
  @contacts = Contact.all
  erb :index
end

# Query Contact Database
get '/contacts' do
  @contact = Contact.where("lower(firstname || lastname || email) LIKE ?", "%#{params[:query].downcase}%").order(:firstname)
  @contact.to_json
end

# Create Contact
post '/contacts' do
  puts params[:firstname]
  @contact = Contact.create({firstname: params[:firstname], lastname: params[:lastname], email: params[:email]})
  @contact.to_json
end

# Find Conact
get '/contact/:id' do
  @contact = Contact.find(params[:id])
  @contact.to_json
end

# Update Contact
put '/api/:id' do
  contact = Contact.find(params[:id])
    contact.update(
    name:   params[:name],
    email:  params[:email],
    phone: params[:phone]
    )
end

# Delete Contact
delete '/api/:id' do
  contact = Contact.find(params[:id])
  contact.destroy
end