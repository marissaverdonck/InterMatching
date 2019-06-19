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
function remove(req, res) {
  if (!req.session.user){

    return res.redirect('/')
  }
  else {
          req.checkBody('confirm', "Please confirm you want to delete your account").notEmpty();

          var errors = req.validationErrors();

      if (errors) {
        res.render('deleteAcc', {
            errors: errors,
            user: req.session.user,
            title: "Delete account"
        });
      } else {
      var sessionID = req.session.user;
      var accountID = sessionID.id;
      var ObjectID = require('mongodb').ObjectID;

      db.collection('data').remove(
        { _id: ObjectID(accountID) }
      , done);

      }
}

  function done(err, data) {
    if (err) {
      next(err)
    } else {
        req.session.destroy(function(err) {
          if (err) {
            next(err);
          } else {
              setTimeout(function () {
                res.redirect('/');
              }, 3000);
          }
        })
    }
  }
}
module.exports = remove;
