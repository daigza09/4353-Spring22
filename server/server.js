require('dotenv').config();

const express = require("express")
// express app 
const app = express()

//middleware
app.use((req, res, next) => {
    console.log(req.path, req.method)
})

// setting up route handeler
app.get('/', (req, res) =>{
    res.json({mssg: 'Welcome to the app'})
})
// listen for requests
PORT = 8080
app.listen(process.env.PORT, () =>{
    console.log('listening on port', process.env.PORT)
})

process.env

