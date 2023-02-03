const express = require("express");
const mongoose = require("mongoose");
const app = express();
const cors = require('cors');
const Sprint = require('./routes/api/Sprint');
const Ticket = require('./routes/api/Ticket')
// config dotenv file
require('dotenv').config();

// Body parser middleware

app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(cors());

app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header(
      "Access-Control-Allow-Headers",
      "Origin, X-Requested-With, Content-Type, Accept"
    );
    next();
  });
  


// connect mongodb
mongoose.set('strictQuery', false);
mongoose.connect( process.env.MONGODB_URL, {useNewUrlParser: true, })
.then(() => console.log('Connected in db succses full'))
.catch(err => console.log(err))



app.use('/api/sprint', Sprint);
app.use('/api/ticket', Ticket);

const port = 5000;
app.listen(port, () => console.log(`Server running on port ${port}`))