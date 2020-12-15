const express = require('express');
const bodyParser = require("body-parser");
const sequelize = require('./config/connection');
const session = require('express-session');
const routes = require('./controllers');
const passport = require('./utils/passport');
const SequelizeStore = require('connect-session-sequelize')(session.Store);
const cors = require("cors");

require('dotenv').config();

const path = require('path');

const app = express();
const PORT = process.env.PORT || 3002;

let cookieVar;
// set up for running on heroku
if(process.env.JAWSDB_URL) {
  cookieVar = process.env.JAWSDB_COOKIE;
} else {
  cookieVar = process.env.DB_COOKIE;
}

// cookieVar = "hellothere"
const sess = {
    secret: cookieVar,
    cookie: {
      maxAge: (1000 * 60 * 60)
    },
    resave: false,
    saveUninitialized: true,
    store: new SequelizeStore({
      db: sequelize
    })
  };

// app.use(bodyParser.json());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));
app.use(session(sess));
app.use(cors());
// initialize passport, use passport session
app.use(passport.initialize());
app.use(passport.session());
console.log("Secret is :", cookieVar)
app.use(routes);

// database
const db = require("./models");
const Role = db.role;

sequelize.sync({ force: false }).then(() => {
    app.listen(PORT, () => console.log(`Now listening on port ${PORT}!`));
});