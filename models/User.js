const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const User = new Schema({
  email: String,
  password: String,
  playlist: {
    type: Array,
    default: []
  }
});

module.exports = mongoose.model("user", User);
