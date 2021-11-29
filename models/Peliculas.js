const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  id: Number,
  name: String,
  horarios: String,
  dias: Date,
  foto: Buffer
});

const User = mongoose.model('User', UserSchema);

module.exports = User;
