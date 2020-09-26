// import the express module and store it in a variable called express
const express = require('express')
const app = express()

// just a constant to avoid repetitions
const port = 3838

//express.static enables rendering of static files
const serverStatic = express.static('public')
// dump the file to the home '/' directory
app.use('/',serverStatic)

// The listen() method also takes the port number, and 
//  another argument,
// an optional callback that can be called when 
// the server has been successfully started
app.listen(port, ()=>console.log(`server started on localhost:${port}`))