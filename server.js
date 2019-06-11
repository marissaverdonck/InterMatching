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
var url = process.env.DB_HOST;
mongo.MongoClient.connect(url, { useNewUrlParser: true }, function(err, client) {
  if (err)
    throw err
  db = client.db(process.env.DB_NAME)
});

// Require modules
const notifications = require('./functions/notifications');
const createaccount1 = require('./functions/createaccount1');
const createaccount2 = require('./functions/createaccount2');
const createaccount3 = require('./functions/createaccount3');
const changeinterests = require('./functions/changeinterests');
const user1 = require('./functions/user1');
const itsamatch = require('./functions/itsamatch');
const welcome = require('./functions/welcome');
const search = require('./functions/search');
const settings = require('./functions/settings');
const profile = require('./functions/profile');
const logout = require('./functions/logout');
const checkLogin = require('./functions/checkLogin');
const allusers = require('./functions/allusers');
const form1 = require('./functions/form1');
const form2 = require('./functions/form2');
const form3 = require('./functions/form3');
const changeSettings = require('./functions/changeSettings');
const notfound = require('./functions/notfound');
const listen = require('./functions/listen');
const sess = {
  resave: false,
  saveUninitialized: true,
  secret: process.env.SESSION_SECRET
};

app.use(express.static('static'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(session(sess));
app.set('view engine', 'ejs');
app.set('views', 'views');
app.get('/', welcome);
app.get('/notifications', notifications)
app.get('/profile', profile);
app.get('/search', search);
app.get('/settings', settings);
app.get('/createaccount1', createaccount1);
app.get('/createaccount2' + ':id', createaccount2)
app.get('/createaccount3' + ':id', createaccount3)
app.get('/changeinterests', changeinterests)
app.get('/user1', user1);
app.get('/itsamatch', itsamatch)
app.get('/log-out', logout);
app.get('/list', allusers);
app.post('/createaccount1', form1);
app.post('/createaccount2' + ':id', upload.single('profilepicture'), form2);
app.post('/createaccount3' + ':id', upload.any(), form3);
app.post('/', checkLogin);
app.post('/settings', changeSettings);
app.use(notfound);
app.listen(process.env.PORT);

/* 
Open in browser: http://localhost:3000
Bronnen:
dandevri, 2019- mongodb-server - https://github.com/cmda-bt/be-course-18-19/blob/master/examples/mongodb-server/index.js
dandevri, 2019- Express-server - https://github.com/cmda-bt/be-course-18-19/blob/master/examples/express-server/index.js
CMD Be course, 2019- Lecture 2 - https://docs.google.com/presentation/d/1uT6CVMdNig-I9oSwEHI-QiadINH96HYyRC-BIIPxhSI/edit#slide=id.g4e3b0a72ee_0_36
CMD Be course, 2019 - Lecture 3 - https://docs.google.com/presentation/d/137YTmMadaUNCJ2ksKHzU_NCZT-BIv3q9tGhXc38EZ3g/edit#slide=id.g4e3b0a74b9_1_861
MD Be course, 2019 - Lecture 4 - https://docs.google.com/presentation/d/1kN7TLs3_wbZykrM0BK7mQlofaXXSOq-BgsqsugUgh7Q/edit#slide=id.g33c7310eb9_0_676
*/