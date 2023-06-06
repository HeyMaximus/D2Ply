// var { db, User } = require('./db')

// module.exports = {
//   getAll: () => {
//     return User.find().sort({word: 1});
//   },

//   addGame: (searchPk) => {
//     var queryString = {word: {$regex: searchPk.word, $options: 'i'}};
//     return User.find(queryString);
//   },

//   delGame: (word) => {
//     return Word.deleteOne(word)
//   },

//   post: (newWord) => {
//     var newDoc = new Word (newWord);
//     return newDoc.save()
//   },

//   patch: (data) => {
//     var filter = {word: data.word}
//     var update = {def: data.def}
//     return Word.findOneAndUpdate(filter, update)
//   },


// }