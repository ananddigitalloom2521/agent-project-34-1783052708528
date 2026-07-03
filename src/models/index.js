const mongoose = require('mongoose');

const fileSchema = new mongoose.Schema({
  name: String,
  content: String,
  description: String
});

const userSchema = new mongoose.Schema({
  username: String,
  email: String
});

const File = mongoose.model('File', fileSchema);
const User = mongoose.model('User', userSchema);

module.exports = { File, User };