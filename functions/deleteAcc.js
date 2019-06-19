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
function deleteAcc(req, res) {
  if (!req.session.user){
    return res.redirect('/')
}else{
    db.collection('data').find().toArray(done);
  }
  function done(err, data) {
    if (err) {
      next(err)
    } else {
      res.render('deleteAcc', { data: data, user: req.session.user, title: "Delete account" })
    }
  }
}

module.exports = deleteAcc;
