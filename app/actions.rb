# Homepage (Root path)
get '/' do
  @contacts = Contact.all
  erb :index
end

get '/contacts' do
  @contact = Contact.where("lower(firstname || lastname || email) LIKE ?", "%#{params[:query].downcase}%").order(:firstname)
  @contact.to_json
end

post '/contacts' do
  puts params[:firstname]
  @contact = Contact.create({firstname: params[:firstname], lastname: params[:lastname], email: params[:email]})
  @contact.to_json
end

get '/contact/:id' do
  @contact = Contact.find(params[:id])
  @contact.to_json
end
