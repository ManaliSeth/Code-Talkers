// imports modules
const express = require('express');
const mongoose = require('mongoose');
const morgan = require('morgan');
const cors = require('cors');
require('dotenv').config();

//app
const app = express();

//db
const db = mongoose.connect(
    `mongodb://admin:csc890team4@50.18.130.129:27017/csc890Team4`,
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    //   useFindAndModify: false,
    },
    (err) => {
      if (err) return console.error(err);
      console.log("connected to mongoDB");
    }
  );
  

//middleware

app.use(morgan('dev'))
app.use(cors({origin:true, credentials:true}));

//routes


//port 
const port = process.env.PORT || 8001;

//listener
const server = app.listen(port, ()=> console.log(`Server is running on port ${port}`))