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
function saveinterest(req, res) {
  var id = req.session.user.id
  db.collection('data').update({
      _id: new mongo.ObjectID(id)
    }, {
      $push: {
        like: req.body.like,
      },
    },
    done)

  function done(err, data) {
    if (err) {
      next(err)
    } else {
      //Redirects the browser to the given path
      console.log(id);
    }
  }
}

module.exports = saveinterest;