var express = require('express');
require('./config/config');
var models = require('./models');
require('./global_functions');
var sessions = require('./controllers/SessionsController');
var bodyParser = require('body-parser');
var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

//Code that Chris added 11-12-18 CORS
app.use(function (req, res, next){
    //website that you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', '*');
    //Pass to next layer of middleware
    next();
});

app.get('/', (req, res) => {res.send("Hello World!")});

models.sequelize
    .authenticate()
    .then(() => {
        console.log('Connection has been established successfully.');
    })
    .catch(err => {
        console.log('Unable to connect to the database.', err);
    });

if (CONFIG.app === 'dev') {
    models.sequelize.sync();
}

app.get('/sessions', sessions.getAll);
app.get('/sessions/:sessionId', sessions.get);
app.post('/sessions', sessions.create);
app.put('/sessions', sessions.update);

module.exports = app; //lets you use this module in other places