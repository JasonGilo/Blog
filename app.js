const express = require('express');
const app = express();
const mongoose = require('mongoose');
require('dotenv/config');

//Import Routes
const postRoute = require('./routes/posts');


//Middlewares
app.use(express.json())
app.use('/posts', postRoute)

//ROUTES
//Patch for updating
//Delete for deleting
//Post for giving information
//Get for getting information

app.get('/', (req, res)=>{
    res.send('On route HOME');
})



//Connec to DB
mongoose.connect(process.env.DB_CONNECTION, 
{ useUnifiedTopology: true, useNewUrlParser: true },(err, db)=>{
    err? console.log(err) : console.log("Connected")
})

app.listen(3000);