// const http = require('http')
const express = require('express')


// const port = 8080; offset here by the www.js file where port 3000 is defined
const app = express();

app.get('/', (req, res) => { res.send('Hello World') });
app.get('/user', (req, res)=> {res.send('Hello User')});
app.get('/home', (req, res)=> {res.send('Hello Home')})

app.post('/', (req, res) => {res.send('Got Post Request')});
app.post('/user', (req, res)=> {res.send('Got Post User Request')});
app.post('/home', (req, res)=> {res.send('Got Post HomeRequest')});

app.put('/', (req, res) => {res.send('Got Put Request')});

module.exports = app;

// app.listen(port);



// const server = http.createServer(function (req, res){
//     res.writeHead(200);
//     res.end("Hello World");
// })

// server.listen(port);