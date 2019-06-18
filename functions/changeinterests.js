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
function changeinterests(req, res) {
  if(req.session.user) {
    var id = req.session.user.id
    db.collection('data').findOne({
      _id: mongo.ObjectID(id)
    }, done)
} else {
    res.redirect('/')
}
function done(err, data) {
  if (err) {
    next(err)
  } else {
    if(req.session.user) {
      res.render('changeinterests', { data: data, user: req.session.user, title: "Search for Interests" });
    }
    else {
      res.render('/profile')
  }
}
}
}

module.exports = changeinterests;