const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserProfile = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: 'user'
  },
  age: Number,
  occupation: String,
  loveMeForever: String,
  userId: String,
})

mongoose.model('userProfile', UserProfile)
