const mongoose = require('mongoose');

mongoose.connect(process.env.DB_LOCATION)
  .then(console.log('Successful connection to MongoDB!'))
  .catch((err) => console.log(err));

const db = mongoose.connection;
mongoose.set('strictQuery', true);

const userSchema = mongoose.Schema({
  user: { type: String, unique: true },
  email: { type: String, unique: true },
  password: { type: String },
  friendList: [String],
  gameList: [Object],
});

const gameSchema = mongoose.Schema({
  gameTtile: { type: String, unique: true },
  gameThumbnail: String,
  gameModes: [Object],
});

const User = mongoose.model('User', userSchema);
const Game = mongoose.model('Game', gameSchema);

module.exports.User = User;
module.exports.Game = Game;
module.exports.db = db;
