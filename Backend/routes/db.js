const mongoose = require('mongoose') ;
mongoose.connect("mongodb://127.0.0.1:27017/advisoropedia")

const example = mongoose.Schema({
  name : String
})

module.exports = mongoose.model("advisoropedia",example);