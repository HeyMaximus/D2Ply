var model = require('../database/model')

module.exports = {
  getAll: (req, res) => {
    model.getAll(req.query.user)
    .then(r => res.status(200).send(r))
    .catch(e => res.status(400).end(e));
  },

  getFriends: (req, res) => {
    model.getFriends(req.query.userFriendList)
    .then(r => res.status(200).send(r))
    .catch(e => res.status(400).end(e));
  },

  updateMode: (req, res) => {
    console.log('hitting updateMode with:', req.query)
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