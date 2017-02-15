var express = require('express');
var router = express.Router();
var graph = require('fbgraph');
var conf = require('../config/config.js');
var request = require('request');
var Vote = require('../model/Vote');

// For if you want to use index.jade
// router.get('/', function(req, res, next) {
//   res.render('index', { title: 'Express' });
// });

/* GET home page. */

// TODO: Learn Angular 2, move front end into project within this app
// Get MongoDB hooked up
// Fix routing
// Replace modal Lily made with Angular modal, fix data 2 way binding so we can send value of Trump
// Grab facebook profile picture as well
// For Match page, consider having a query for person that has OTHER candidate of person,
// and matched: false, then turn matched: true
// Think about ways to have them get in contact with each other? Send email about finding a match?

router.get('/', function(req, res, next) {
    // res.sendFile('./public/index.html');
    console.log("Hey the server has started!");
});


// Adding vote object to MongoDB
router.post('/postVote', function(req, res, next) {
  console.log("Req.body is: ", req.body);
  Vote.save(function(err) {
    if(err) {
      throw err;
      // return err;
    }
    console.log("Vote saved");
  });
  res.sendStatus(200);
});




module.exports = router;
