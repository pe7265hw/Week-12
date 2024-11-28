const express = require('express') //import express library
const path = require('path') //path library used to connect files in different directories, path them together
const bodyParser = require('body-parser')

const indexRouter = require('./routes/index.js') //imports index.js

const app = express() //creates the web app server

//enable parsing of POST request body

app.use(bodyParser.urlencoded({extended: false}))

const staticFileLocation = path.join(__dirname, 'public')
app.use(express.static(staticFileLocation))

app.set('views', path.join(__dirname, 'views')) //double underscore(!) does configuration, setting up
//web application to use handlebars library to generate html output, path.join(__dirname, 'views'))
//means join '__dirname' which represents the path of the server.js (where the current code actualy is), 
//wherever it is, in a local or server location with the path of views directory will join with views directory
//that will create the path of the views directory
//BASICALLY TELL HTML WHERE THE VIEWS (HTML FILES OR TEMPLATES) ARE

app.set('view engine', 'hbs') //use handlebars to generate views

app.use('/', indexRouter) //all the requests to the app are passed to indexRouter, this has the code that
//receieves the request and generates the response

//start server running
const server = app.listen(process.env.PORT || 3000, function() {
    console.log('Server running on port', server.address().port)
}) //if server is told to use a specific port to use do that OR use port 3000
    //PORT not port