const mongoose = require('mongoose');

mongoose.connect(process.env.DB_LOCATION)
  .then(console.log('Successful connection to MongoDB!'))
  .catch((err) => console.log(err));

const db = mongoose.connection;
mongoose.set('strictQuery', true);

const userSchema = mongoose.Schema({});

const User = mongoose.model('User', userSchema);

module.exports.db = db;
module.exports.User = User;
