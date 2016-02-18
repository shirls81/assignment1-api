var request = require('superagent');
var site = 'http://whoismyrepresentative.com/getall_';
'use strict';

 exports.allByZip = function(zip, callback){
   request
     .get(site + 'mems.php')
     .query({
        zip: zip,
        output: 'json'
      })
     .end(function(err, res){
       if (err)
         return callback(err);
         callback(null, JSON.parse(res.text).results);
       });
};

 exports.repsByName = function (lastName, callback){
   request
     .get(site + 'reps_byname.php')
     .query({
        name: lastName,
        output: 'json'
      })
     .end(function(err, res){
       if (err)
         return callback(err);
         callback(null, JSON.parse(res.text).results);
       });
 };

 exports.repsByZip = function (zip, callback){
   request
     .get(site + 'reps_byzip.php')
     .query({
        zip: zip,
        output: 'json'
      })
     .end(function(err, res){
       if (err)
         return callback(err);
         callback(null, JSON.parse(res.text).results);
       });

 };
 exports.repsByState = function (state, callback){
   request
     .get(site + 'reps_bystate.php')
     .query({
        state: state,
        output: 'json'
      })
     .end(function(err, res){
       if (err)
         return callback(err);
         callback(null, JSON.parse(res.text).results);
       });
 };
 exports.sensByName = function (lastName, callback){
   request
     .get(site + 'sens_byname.php')
     .query({
        name: lastName,
        output: 'json'
      })
     .end(function(err, res){
       if (err)
         return callback(err);
         callback(null, JSON.parse(res.text).results);
       });
 };
 exports.sensByZip = function (zip, callback){
   request
     .get(site + 'sens_byzip.php')
     .query({
        zip: zip,
        output: 'json'
      })
     .end(function(err, res){
       if (err)
         return callback(err);
         callback(null, JSON.parse(res.text).results);
       });
 };
 exports.sensByState = function (state, callback){
   request
     .get(site + 'sens_bystate.php')
     .query({
        state: state,
        output: 'json'
      })
     .end(function(err, res){
       if (err)
         return callback(err);
         callback(null, JSON.parse(res.text).results);
       });
 };
