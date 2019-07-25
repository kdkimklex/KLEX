
const express = require('express');
const cors = require('cors');
const path =require('path');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const passport = require('passport');


const app = express();
app.use(cors());
const port = process.env.PORT ||3000;


// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());
app.use(passport.initialize());
app.use(passport.session());
require('./config/passport')(passport);



const config = require('./config/database');
const user =require('./routes/users');

const connection = mongoose.connect(config.database);
if(connection){
    console.log("Database connected");
}else{
    console.log("Database is not connected");
}

app.use(express.static(path.join(__dirname,"public")));

app.use('/user',user);

app.get("/",(req,res)=>{
   res.send("Hello World");
});



app.listen(port,function(){
    console.log("listening to port"+port);
});