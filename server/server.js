const dotenv = require('dotenv').config();

const express = require('express');

PORT = 8080;
// express app 
const app = express();

let cors = require('cors');
app.use(cors());

app.use(express.json());
app.use(express.urlencoded({extended:false}))

app.get('/', (req,res) => {
    res.json({message:'Welcome to the app'})
});

// routes 
const quoteRouter = require('./routes/quoteRoutes');
app.use('/order', quoteRouter);

const authoRouter = require('./routes/authRoutes');
app.use('/autho', authoRouter);

const profileRouter = require('./routes/profileRoutes');
app.use('/profile', profileRouter);

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

