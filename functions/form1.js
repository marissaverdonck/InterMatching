// Require dependencies
const camelCase = require('camel-case');
const express = require('express');
const app = express();
const port = 3000;
const slug = require('slug');
const bodyParser = require('body-parser');
const multer = require('multer');
const find = require('array-find');
const mongo = require('mongodb');
const session = require('express-session');
const expressValidator = require('express-validator');
const bcrypt = require('bcrypt');
const saltRounds = 10;
var upload = multer({ dest: 'static/upload/' });
var db = null;
require('dotenv').config();
var url = process.env.DB_HOST
mongo.MongoClient.connect(url, function(err, client) {
  if (err)
    throw err
  db = client.db(process.env.DB_NAME)
});

// Function
function form1(req, res) {

  //check if field are empty
  req.checkBody('email', "This field can't be empty").notEmpty();
  req.checkBody('password', "You must enter a password").notEmpty();

  //check if input is an email address
  req.checkBody('email', "You didn't enter an email address").isEmail();


  var errors = req.validationErrors();

  if(errors){
      res.render('createaccount1', {
      errors: errors
    });
  } else{
    var id = slug(req.body.email).toLowerCase();
    db.collection('data').insertOne({
      id: id,
      email: req.body.email,
      password: req.body.password
    }, done)

    function done(err, data) {
      if (err) {
        next(err)
      } else {
        //Redirects the browser to the given path
        res.redirect('/createaccount2' + data.insertedId)
        console.log(data.insertedId)
      }

      console.log('SUCCES');
  var pwd = req.body.password;
  var hash = bcrypt.hashSync(pwd, saltRounds);
  db.collection('data').insertOne({
    email: req.body.email,
    password: hash
  }, done)

  function done(err, data) {
    if (err) {
      next(err)
    } else {
      req.session.user = {id: data.ops[0]._id}
      res.redirect('/createaccount2' + data.insertedId)
    }
  }
}
}
}

module.exports = form1;
