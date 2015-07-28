# Homepage (Root path)
get '/' do
  @contacts = Contact.all
  erb :index
end
