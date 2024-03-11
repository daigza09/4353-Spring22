const dotenv = require('dotenv').config();

const express = require('express')

PORT = 8080
// express app 
const app = express()

let cors = require('cors');
app.use(cors());

app.get('/', (req,res) => {
    res.json({message:'Welcome to the app'})
})

app.use('/order', require('./routes/quoteRoutes'));

//middleware
/*app.use((req, res, next) => {
    console.log(req.path, req.method)
})*/

// setting up route handeler 
// this can be uncommented when the middleware is fully set up
/*app.get('/', (req, res) =>{
    res.json({message: 'Welcome to the app'})
})*/

// listen for requests
//PORT = 8080
app.listen(process.env.PORT, () =>{
    console.log('listening on port', process.env.PORT)
})

process.env

