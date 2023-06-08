const { Game } = require('./db');

const seedGames = () => {

  let league = new Game({
    gameTtile: 'League of Legends',
    gameThumbnail: 'https://static-cdn.jtvnw.net/ttv-boxart/21779-285x380.jpg',
    gameModes: [
      { mode: 'Team Fight Tatics', aveTime: 30, partySize: 8, play: false },
      { mode: 'Team Fight Tatics Ranked', aveTime: 35, partySize: 5, play: false },
      { mode: 'Summoner Rift', aveTime: 40, partySize: 5, play: false },
      { mode: 'Summoner Rift Ranked Duo', aveTime: 42, partySize: 2, play: false },
      { mode: 'Summoner Rift Ranked Flex', aveTime: 42, partySize: 5, play: false },
    ],
  });
  league.save()

  let diablo = new Game({
    gameTtile: 'Diablo4',
    gameThumbnail: 'https://static-cdn.jtvnw.net/ttv-boxart/515024-285x380.jpg',
    gameModes: [
      { mode: 'Normal', aveTime: 0, partySize: 4, play: false },
      { mode: 'Hardcore', aveTime: 0, partySize: 4, play: false },
    ],
  });

  diablo.save()

  console.log('Games Seeded')
}

module.exports.seedGames = seedGames;