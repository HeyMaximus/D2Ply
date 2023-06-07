import { React, useState, useEffect } from 'react';
import GameEntry from './GameEntry';

function GameList({list, friendData}) {

  return (
    <div>
      <h2>Games List</h2>
      {list.map((e) => <GameEntry game={e} friendData={friendData}/>)}
    </div>
  );
}

export default GameList;
