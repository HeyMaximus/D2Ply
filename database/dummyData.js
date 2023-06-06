const { User } = require('./db');

const seedData = () => {

  let dennis = new User (
  {
    user: 'Dennis',
    email: 'dennis@gmail.com',
    password: '123',
    friendList: ['Alex', 'Gina', 'Sharon'],
    gameList: [{
      gameTtile: 'League of Legends',
      gameThumbnail: 'https://static-cdn.jtvnw.net/ttv-boxart/21779-285x380.jpg',
      gameModes: [
        { mode: 'Team Fight Tatics', aveTime: 30, partySize: 8, play: true },
        { mode: 'Team Fight Tatics Ranked', aveTime: 35, partySize: 5, play: false },
        { mode: 'Summoner Rift', aveTime: 40, partySize: 5, play: true },
        { mode: 'Summoner Rift Ranked Duo', aveTime: 42, partySize: 2, play: false },
        { mode: 'Summoner Rift Ranked Flex', aveTime: 42, partySize: 5, play: false },
      ],
    },
    {
      gameTtile: 'Diablo4',
      gameThumbnail: 'https://static-cdn.jtvnw.net/ttv-boxart/515024-285x380.jpg',
      gameModes: [
        { mode: 'Normal', aveTime: 0, partySize: 4, play: false },
        { mode: 'Hardcore', aveTime: 0, partySize: 4, play: false },
      ],
    }
    ],
  })
dennis.save();

let alex = new User (
  {
    user: 'Alex',
    email: 'alex@gmail.com',
    password: '123',
    friendList: ['Dennis', 'Gina', 'Sharon'],
    gameList: [{
      gameTtile: 'League of Legends',
      gameThumbnail: 'https://static-cdn.jtvnw.net/ttv-boxart/21779-285x380.jpg',
      gameModes: [
        { mode: 'Team Fight Tatics', aveTime: 30, partySize: 8, play: true },
        { mode: 'Team Fight Tatics Ranked', aveTime: 35, partySize: 5, play: true },
        { mode: 'Summoner Rift', aveTime: 40, partySize: 5, play: true },
        { mode: 'Summoner Rift Ranked Duo', aveTime: 42, partySize: 2, play: false },
        { mode: 'Summoner Rift Ranked Flex', aveTime: 42, partySize: 5, play: false },
      ],
    },
    {
      gameTtile: 'Diablo4',
      gameThumbnail: 'https://static-cdn.jtvnw.net/ttv-boxart/515024-285x380.jpg',
      gameModes: [
        { mode: 'Normal', aveTime: 0, partySize: 4, play: false },
        { mode: 'Hardcore', aveTime: 0, partySize: 4, play: true },
      ],
    }
    ],
  })
alex.save()

let gina = new User (
  {
    user: 'Gina',
    email: 'gina@gmail.com',
    password: '123',
    friendList: ['Alex', 'Dennis', 'Sharon'],
    gameList: [{
      gameTtile: 'League of Legends',
      gameThumbnail: 'https://static-cdn.jtvnw.net/ttv-boxart/21779-285x380.jpg',
      gameModes: [
        { mode: 'Team Fight Tatics', aveTime: 30, partySize: 8, play: false },
        { mode: 'Team Fight Tatics Ranked', aveTime: 35, partySize: 5, play: false },
        { mode: 'Summoner Rift', aveTime: 40, partySize: 5, play: true },
        { mode: 'Summoner Rift Ranked Duo', aveTime: 42, partySize: 2, play: false },
        { mode: 'Summoner Rift Ranked Flex', aveTime: 42, partySize: 5, play: false },
      ],
    },
    {
      gameTtile: 'Diablo4',
      gameThumbnail: 'https://static-cdn.jtvnw.net/ttv-boxart/515024-285x380.jpg',
      gameModes: [
        { mode: 'Normal', aveTime: 0, partySize: 4, play: true },
        { mode: 'Hardcore', aveTime: 0, partySize: 4, play: true },
      ],
    }
    ],
  })
gina.save()

let sharon = new User (
  {
    user: 'Sharon',
    email: 'sharon@gmail.com',
    password: '123',
    friendList: ['Alex', 'Gina', 'Dennis'],
    gameList: [{
      gameTtile: 'League of Legends',
      gameThumbnail: 'https://static-cdn.jtvnw.net/ttv-boxart/21779-285x380.jpg',
      gameModes: [
        { mode: 'Team Fight Tatics', aveTime: 30, partySize: 8, play: false },
        { mode: 'Team Fight Tatics Ranked', aveTime: 35, partySize: 5, play: false },
        { mode: 'Summoner Rift', aveTime: 40, partySize: 5, play: true },
        { mode: 'Summoner Rift Ranked Duo', aveTime: 42, partySize: 2, play: false },
        { mode: 'Summoner Rift Ranked Flex', aveTime: 42, partySize: 5, play: false },
      ],
    },
    {
      gameTtile: 'Diablo4',
      gameThumbnail: 'https://static-cdn.jtvnw.net/ttv-boxart/515024-285x380.jpg',
      gameModes: [
        { mode: 'Normal', aveTime: 0, partySize: 4, play: true },
        { mode: 'Hardcore', aveTime: 0, partySize: 4, play: true },
      ],
    }
    ],
  })
sharon.save()

return console.log('DB SEEDED!');
}

module.exports.seedData = seedData;