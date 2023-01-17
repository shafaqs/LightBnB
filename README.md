# LightBnB
An Airbnb-like web application that utilizes server-side JavaScript to retrieve data from SQL queries and display it on multiple pages. It features user account creation, the ability to view and create listings, and the ability to filter search results.



####Getting Started

###Follow the instructions below to get started with Lighthouse BnB.

Create a new repository using this repository as a template.
Clone your repository to your local device.
Install any dependencies with the npm i command.
cd into the LightBnB_WebApp directory.
Run the app by running the npm run local command.
View the app in your web browser at localhost:3000.
NOTE: If you're having trouble, you may need to have npx installed first. Try running the command npm install -g npx.

Project Structure

├── public
│   ├── index.html
│   ├── javascript
│   │   ├── components 
│   │   │   ├── header.js
│   │   │   ├── login_form.js
│   │   │   ├── new_property_form.js
│   │   │   ├── property_listing.js
│   │   │   ├── property_listings.js
│   │   │   ├── search_form.js
│   │   │   └── signup_form.js
│   │   ├── index.js
│   │   ├── libraries
│   │   ├── network.js
│   │   └── views_manager.js
│   └── styles
├── sass
└── server
  ├── apiRoutes.js
  ├── database.js
  ├── json
  ├── server.js
  └── userRoutes.js
public contains all of the HTML, CSS, and client side JavaScript.
index.html is the entry point to the application. It's the only html page because this is a single page application.
javascript contains all of the client side javascript files.
index.js starts up the application by rendering the listings.
network.js manages all ajax requests to the server.
views_manager.js manages which components appear on screen.
components contains all of the individual html components. They are all created using jQuery.
sass contains all of the sass files.
server contains all of the server side and database code.
server.js is the entry point to the application. This connects the routes to the database.
apiRoutes.js and userRoutes.js are responsible for any HTTP requests to /users/something or /api/something.
json is a directory that contains a bunch of dummy data in .json files.
database.js is responsible for all queries to the database. It doesn't currently connect to any database, all it does is return data from .json files.
