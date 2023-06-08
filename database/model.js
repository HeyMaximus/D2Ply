var { db, User, Game } = require('./db')

module.exports = {
  getAll: (user) => {
    return User.find({user: user});
  },

  getFriends: (friends) => {
    return User.find({user: {$in: friends}})
  },

  updateMode: (data) => {
    const mode = `gameList.$[i].gameModes.${data.index}.play`;
    const updateObj = {};
    updateObj[mode] = data.play;

    const filter = {user: data.user, gameList: {$elemMatch: { 'gameTtile': data.title, 'gameModes.mode': data.mode}}};
    const update = {$set: updateObj}
    const arrayFilter = { arrayFilters: [{'i.gameTtile': data.title}] }
    return User.findOneAndUpdate(filter, update, arrayFilter)
  },

  delGame: (data) => {
    const filter = {user: data.user};
    const update = {$pull: {gameList: {gameTtile: data.title}}};
    return User.findOneAndUpdate(filter, update)
  },

  findGame: (data) => {
    return Game.find({gameTtile: data.title})
  },

  addGame: (user, game) => {
    const filter = {user: user};
    const update = {$push: {gameList: game}};
    return User.findOneAndUpdate(filter, update)

  },



  post: () => {
    return
  },

  patch: () => {
    return
  },


}