const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
  // firstName: {
  //   type: String,
  //   required: true,
  //   default: "",
  // },

  // lastName: {
  //   type: String,
  //   // required: true,
  //   default: "",
  // },

  // email_id: {
  //   type: String,
  //   required: true,
  //   default: "",
  // },

  // password: {
  //   type: String,
  //   required: true,
  //   default: "",
  // },

  notes:{
    type: String,
    default:"",
    required:true
  },

  author:{
    type: String,
    default:"",
    required:true
  },

});

const User = mongoose.model("user", userSchema);

module.exports = User;
