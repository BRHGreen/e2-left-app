const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserProfile = new Schema({
  age: Number,
  occupation: String,
  loveMeForever: String
})

mongoose.model('userProfile', UserProfile)
