var mongoose = require('mongoose');

var BookSchemanew = new mongoose.Schema({
   name: String,
  isbn: String,
  title: String,
  author: String,
  description: String,
  published_year: String,
  publisher: String,
  updated_date: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Booknew', BookSchemanew);
