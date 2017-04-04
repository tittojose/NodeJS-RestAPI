const express = require('express');
const routes = require('./routes/api')
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const app = express();

// connect to mongo db

mongoose.connect('mongodb://localhost/beer');
mongoose.Promise = global.Promise;

app.use(bodyParser.json());
app.use('/api', routes);
//error hanling
app.use(function (err, req, res, next) {
    // console.log(err);
    res.status(422).send(
        {
            error: err.message
        }
    )
});

app.listen(process.env.port || 4000, function () {
    console.log('Listening on 4000');
});