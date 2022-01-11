//get dependencies
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
require('dotenv').config();

//info
uri= process.env.ATLAS_URI;

//set up middleware
const app = express();
const port = process.env.port || 5000;
app.use(cors());
app.use(express.json());

//connect to db w mongoose
async function connectMongo(){
    await mongoose.connect(uri, {useNewUrlParser: true, useUnifiedTopology: true})
    .then(console.log('connection succeeded'))
    .catch((e) => (console.log(e)))
}
connectMongo();

//add routes
const exercisesRouter = require('./routes/exercises');
const usersRouter = require('./routes/users');
app.use('/exercises', exercisesRouter);
app.use('/users', usersRouter);


//create back end listener with express
app.listen(port, () => {
    console.log(`Server is running on port : ${port}`);
})