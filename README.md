# Rolodex: A contact list API
=============
## About
 - An API that allows users to create/retrieve/update/delete contacts.
 - Created in the 5th week of Lighthouse Labs coding bootcamp
 - Built using Sinatra framework, uses jQuery to talk to the server

## API Docs
- An API that allows users to create/retrieve/update/delete contacts.
- Created in the 5th week of Lighthouse Labs coding bootcamp
- Built using Sinatra framework, uses jQuery to talk to the server

####- Create New Contact 
- *URL:* **API_URL/contacts**
- *Method*: **POST**
- *Params*: **{"firstname": "Wesley", "lastname": "Yu", "email": "wesley@gmail.com"}**
- *Valid Request(200) - Body returned*: **{"id": 1, "firstname": "Wesley", "lastname": "Yu", "email": "wesley@gmail.com"}**
- *Invalid Request(400) - Body returned*: **{ error : "There was an error adding this contact to the database"}**

####- Update Contact 
- *URL:* **API_URL/contact/:id**
- *Method*: **PUT**
- *Params*: **{"firstname": "Wesley", "lastname": "Yu", "email": "wesley@gmail.com"}**
- *Valid Request(200) - Body returned*: **{"firstname": "Wesley", "lastname": "Yu", "email": "wesley@gmail.com"}**
- *Invalid Request(400) - Body returned*: **{ error : "There was an error updating"}**

####- Show All Contacts
- *URL:* **API_URL/contacts**
- *Method*: **GET**
- *Params*: **none**
- *Valid Request(200) - Body returned*: **[ {"firstname": "AAAA", ... }, {"firstname: "BBBB", ... } ] **
- *Invalid Request(400) - Body returned*: **{ error : "There was an error fetching all the contacts"}**

####- Find a Contact by Id 
- *URL:* **API_URL/contact/:id**
- *Method*: **GET**
- *Params*: **none**
- *Valid Request(200) - Body returned*: **{"id": 1, "firstname": "Wesley", "lastname": "Yu", "email": "wesley@gmail.com"}**
- *Invalid Request(400) - Body returned*: **{ error : "There was an error fetching details for this contact"}**
 
####- Delete Contact 
- *URL:* **API_URL/api/:id**
- *Method*: **DELETE**
- *Params*: **none**
- *Valid Request(200) - Body returned*: **none**
- *Invalid Request(400) - Body returned*: **{ error : "We have failed to delete this contact..."}**

## Getting Started
1. `bundle install`
2. `shotgun -p 3000 -o 0.0.0.0`
3. Visit `http://localhost:3000/` in your browser
