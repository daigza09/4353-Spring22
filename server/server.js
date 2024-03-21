const dotenv = require('dotenv').config();
const express = require('express');
const colors = require('colors');
const {errorHandler} = require('./middlewares/errorMiddleware');
const connectDB = require('./config/db')
PORT = 8080;

connectDB(process.env.MONGO_URI);
// express app 
const app = express();

// works with cors and express
// express works as our middleware
let cors = require('cors');
app.use(cors());

app.use(express.json());
app.use(express.urlencoded({extended:false}))

app.get('/', (req,res) => {
    res.json({message:'Welcome to the app'})
});

// routes 
const quoteRouter = require('./routes/quoteRoutes');
app.use('/fuelForm', quoteRouter);

<<<<<<< HEAD
// profile manag.
const profileRouter = require('./routes/profileRoutes');
app.use('/profileManagement', profileRouter);
=======

const signupRouter = require('./routes/signupRoutes');
app.use('/signup', signupRouter);



const loginRouter = require('./routes/loginRoutes');
app.use('/login', loginRouter);

>>>>>>> 1dd1f6e2dd512525039d79ff9de81c215c19742a

//app.use(errorHandler);

/*const authoRouter = require('./routes/authRoutes');
app.use('/autho', authoRouter);

const profileRouter = require('./routes/profileRoutes');
app.use('/profile', profileRouter);*/

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
});
module.exports = app;
process.env;
