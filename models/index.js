require('dotenv').config();
const mongoose = require('mongoose');

mongoose.connect(process.env.MONGODB_CONNECTION_STRING, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const Place = require('./places');
const Comment = require('./comment');

module.exports = { Place, Comment };
