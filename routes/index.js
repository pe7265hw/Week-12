const express = require('express') //used to create router, imports express
const router = express.Router() //figures out what code to run in response to a request
//typically based on the URL and the method, GET, POST etc

//responds to get request to homepage
router.get('/', function(req, res, next){ //request, response, next (next used to pass data on if invalid for example)
    //name of Handlebars file - name of a template, optional object with data for the template
    res.render('index', {
        title: 'Feedback Application',
        author: 'Jacob',
        timePageLoaded: new Date()
    })
}) //get request to the homepage ('/' means homepage)

//return this router object to whatever else requires this file, for example, 'server.js' requires the router object
// const indexRouter = require('./routes/index.js') (from server.js)

router.get('/feedback_form',function(req, res, next){
    res.render('student_feedback_form')
})

router.post('/submit_feedback', function(req, res, next){
    //access form data
    //const formData = req.query // for a GET request, read the URL query
    const formData = req.body // POST request data in the body
    console.log(formData)

    //todo - save data to a database
    //auto email when feedback submitted

    res.render('thank_you', { 
        name: formData.name,
        email: formData.email,
        comments: formData.comments,
        currentStudent: formData['current-student']
    })
})

module.exports = router //this line needs to be the last line (anyting after will be ignored)