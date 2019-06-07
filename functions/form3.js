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
function form3(req, res) {
  var id = req.params.id
  db.collection('data').update({
      _id: new mongo.ObjectID(id)
    }, {
      $set: {
        interests: req.body.interest,
        pictures: req.files,
      },
    },
    done)

  function done(err, data) {
    if (err) {
      next(err)
    } else {
      //Redirects the browser to the given path
      res.redirect('/')
    }
  }
}

module.exports = form3;