const dotenv = require('dotenv').config();
const express = require('express');
const colors = require('colors');
const {errorHandler} = require('./middlewares/errorMiddleware');
const connectDB = require('./config/db')
//PORT = 8080;

const PORT = process.env.NODE_ENV === 'test' ? process.env.PORT_TEST : process.env.PORT || 8080;
connectDB(process.env.MONGO_URI);
const app = express();
// Start the server
app.listen(PORT, () => {
    console.log('Server is running on port', PORT);
});

// express app 
//const app = express();

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

const fuelQuoteRouter = require('./routes/fuelQuoteRoutes');
app.use('/history', fuelQuoteRouter);


const signupRouter = require('./routes/signupRoutes');
app.use('/signup', signupRouter);



const loginRouter = require('./routes/loginRoutes');
app.use('/login', loginRouter);

// profile manag.
const profileRouter = require('./routes/profileRoutes');
app.use('/profileManagement', profileRouter);



const authRoutes = require('./routes/authRoutes');
app.use('/auth', authRoutes);

const refreshRoutes = require('./routes/authRoutes');
app.use('/refresh', refreshRoutes);



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
//  app.listen(process.env.PORT, () =>{
//      console.log('listening on port', process.env.PORT)
// });
module.exports = app;
process.env;
