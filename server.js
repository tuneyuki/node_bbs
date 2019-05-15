const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const indexRouter = require('./routes/index');
const bbsRouter = require('./routes/bbs');


mongoose.connect('mongodb://mongo_bbs:Mongoose234@ds121593.mlab.com:21593/node_bbs', { useNewUrlParser: true});

// var db = mongoose.connection;
// db.on('error', console.error.bind( console, 'DB connection error'));



const app = express();

app.set('view engine', 'hbs');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static('public'));
app.use('/', indexRouter);
app.use('/bbs', bbsRouter);



app.listen(3000, () => {
  console.log('Server listening on port 3000');
});


