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
function search(req, res) {

  if (!req.session.user) {

    return res.redirect('/')

  } else {
    var accountData;
    var allData;
    db.collection('data').find().toArray(part2);
    function part2(err, data) {
        allData = data;
        db.collection('data').findOne({
          _id: mongo.ObjectID(req.session.user.id)
        }, done)
    }
  }

  function done(err, data) {
    if (err) {
      next(err)
    } else {
      accountData = data;
      for (let i = 0; i < accountData.matches.length; i++) {
        accountData.matches[i] = allData.find(findMatches);
          function findMatches(match) {
          return match._id == accountData.matches[i];
        }
      }
      console.log(accountData)

      res.render('search', {
        data: allData,
        acc: accountData,
        user: req.session.user,
        title: "Search for Interests"
      });
    }
  }
}

module.exports = search;
