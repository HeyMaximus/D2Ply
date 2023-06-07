var { db, User } = require('./db')

module.exports = {
  getAll: (user) => {
    return User.find({user: user});
  },

  getFriends: (friends) => {
    console.log('model getting:', friends)
    return User.find({user: {$in: friends}})
  },

  patch: () => {
    return
  },

  addGame: () => {
    return
  },

  delGame: () => {
    return
  },

  post: () => {
    return
  },

  patch: () => {
    return
  },


}