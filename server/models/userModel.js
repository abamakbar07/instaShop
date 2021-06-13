const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
   name: {
      type: String,
      required: true
   },
   email: {
      type: String,
      lowercase: true,
      required: true
   },
   phone: {
      type: Number,
      required: true
   },
   password: {
      type: String,
      required: true
   },
   address: {
      province: { type: String },
      city: { type: String },
      distric: { type: String },
      detail: { type: String }
   }
   
})
module.exports = mongoose.model("User", userSchema, "users")