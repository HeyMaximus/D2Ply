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
    model.updateMode(req.body)
    .then(r => res.status(200).send('updated!'))
    .catch(e => res.status(400).end(e))
  },

  delGame: (req, res) => {
    model.delGame(req.body)
    .then(r => res.status(200).send('game removed!'))
    .catch(e => res.status(400).end(e))
  },

  addGame: (req, res) => {
    model.findGame(req.body)
    .then(r => {
      if (r.length) {
      model.addGame(req.body.user, r[0])
      .then(r => res.status(200).send('game added!'))
      .catch(e => res.status(400).end(e));
      } else {
        res.status(400).end('D2Ply does not supported yet.')
      }
    })
    .catch(e => console.log(e))
  },



  post: () => {
    return
  },

  patch: () => {
    return
  },



}