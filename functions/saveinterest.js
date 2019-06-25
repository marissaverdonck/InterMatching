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
  var sessID = req.session.user.id;
  var interestid = req.body.like;
  var likedData;
  var accData;
  db.collection('data').update({
      _id: new mongo.ObjectID(sessID)
    }, {
      $push: {
        like: interestid,
      },
    },
    isitamatch)

  function isitamatch(req, res) {
    console.log("hallo")
    db.collection('data').findOne({
      _id: mongo.ObjectID(interestid)
    }, part2)

    function part2(err, data) {
      if (err) {
        next(err)
      } else {
        likedData = data;
        var likedArray = Object.values(likedData.like)
        var size = Object.keys(likedArray).length;
        console.log(likedArray[1])
        for (var i = 0; i < size; i++) {
          console.log(i)
          if (sessID == likedData.like[i]) {
            db.collection('data').updateOne({
                _id: new mongo.ObjectID(sessID),
                matches: { $ne: interestid }
              }, {
                $push: {
                  matches: interestid,
                },
              },
              part3)
            break;
          } else {
            console.log('no match')
          }
        }
      }
    }

    function part3(err, data) {
      if (err) {
        next(err)
      } else {
        db.collection('data').updateOne({
            _id: new mongo.ObjectID(likedData._id),
            matches: { $ne: sessID }
          }, {
            $push: {
              matches: sessID,
            },
          },
          done)
      }
    }
  }


  function done(err, data) {
    if (err) {
      next(err)
    } else {
      console.log("Gelukt!")
      res.redirect('/itsamatch/' + likedData._id)
    }
  }


}
module.exports = saveinterest;