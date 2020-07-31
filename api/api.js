const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.json());
app.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    res.setHeader('Access-Control-Allow-Methods', '*');
    next();
});

let comments = [{"id": 1, "comment": "First comment"}, {"id": 2, "comment": "Second comment"}];

app.get('/comments', function(req, res) {
    res.setHeader('Content-Type', 'application/json');
    res.json(comments);
});

app.get('/comments/:id', function(req, res) {
    console.log(req.params.id);
    res.setHeader('Content-Type', 'application/json');
    res.json(comments[req.params.id - 1]);
});

app.post('/comments', function (req, res) {  
    console.log(req.body.comment);
    const nextId = comments.length + 1;
    comments.push({id: nextId, comment: req.body.comment});

    res.setHeader('Content-Type', 'application/json');
    res.send({id: nextId});
 });
 
 app.delete('/comments', function (req, res) {  
    comments = new Array();
    res.setHeader('Content-Type', 'application/json');
    res.send({status: 204});
 });

app.listen(3001, function() {
    console.log(`Server running on port 3001`);
});