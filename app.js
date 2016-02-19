'use strict';
var path = require('path');
var express = require('express');
var reps = require('./lib/reps');
var request = require('superagent');

var app = express();

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');
app.set('view cache', false);

app.get('/', function(req, res, next){
  var method;
  if (req.query.type === 'zip'){
    method = reps.allByZip;
  } else if (req.query.type === 'name'){
    method = reps.repsByName;
  } else if (req.query.type === 'state'){
    method = reps.repsByState;
  }
 if (method) {
    method(req.query.search, function(err, people) {
      if (err) {return next(err); }
     res.render('index', {
       reps: people,
       type: req.query.type,
       search: req.query.search,
    });
   });
  } else {
 res.render('index');
 }
});
app.get('/all/by-zip/:zip', function(req, res, next){
  reps.allByZip(req.params.zip, function(err, people){
    if (err) {return next(err);}
    res.json(people);
  });
});

app.get('/reps/by-name/:name', function(req, res, next){
  reps.repsByName(req.params.name, function(err, people){
    if (err) {return next(err);}
    res.json(people);
  });
});

app.get('/reps/by-state/:state', function(req, res, next){
  reps.repsByState(req.params.state, function(err, people){
    if (err) {return next(err);}
    res.json(people);
  });
});

app.get('/sens/by-name/:name', function(req, res, next){
  reps.sensByName(req.params.name, function(err, people){
    if (err) {return next(err);}
    res.json(people);
  });
});

app.get('/sens/by-state/:state', function(req, res, next){
  reps.sensByState(req.params.state, function(err, people){
    if (err) {return next(err);}
    res.json(people);
  });
});

app.listen(3000, function () {
  console.log('Port listening on port 3000!');
});
module.exports = app;
