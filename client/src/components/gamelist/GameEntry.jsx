import { React, useState } from 'react';
import GameMode from './GameMode';

function GameEntry({game, friendData}) {

  return (
    <div>
      <h2>{game.gameTtile}</h2>
      <img src={game.gameThumbnail}/>
      <h3>Game Modes</h3>
      {game.gameModes.map((e) => <GameMode mode={e} title={game.gameTtile} friendData={friendData}/>)}

    </div>
  );
}

export default GameEntry;
