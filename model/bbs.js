const mongoose = require('mongoose');

const Schema = new mongoose.Schema({
  post: {
    type : String,
    require: true
  }
});

module.exports = mongoose.model('BBS', Schema);
