const { Schema } = require('mongoose');

// This is a subdocument schema, it won't become its own model but we'll use it as the schema for the User's `savedBooks` array in User.js
const stockSchema = new Schema({
  symbol: {
      type: String,
      required:true
},
  description: {
    type: String,
    required: true,
  },
  // saved book id from GoogleBooks
  stockId: {
    type: String,
    required: true,
  },
  image: {
    type: String,
  },
  link: {
    type: String,
  },
  title: {
    type: String,
    required: true,
  },
});

module.exports = stockSchema;
