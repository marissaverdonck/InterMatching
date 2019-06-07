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
function checkLogin(req, res) {
  var email = req.body.email;
  var password = req.body.password;
  db.collection('data').findOne({
    email: email,
  }, done);

  function done(err, data) {
    if (password === data.password) {
      req.session.user = data;
      res.redirect('search');
    } else {
      res.redirect('/');
      console.log('password incorrect');

    }
  }
}

module.exports = checkLogin;