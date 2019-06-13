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
function remove(req, res, next) {
  var id = req.session.user.id
  db.collection('data').findByIdAndRemove({_id: id}, done)
}
function done(err, data) {
  if (err) {
    next(err)
  } else {
      res.render('/')
  }
}



module.exports = remove;
