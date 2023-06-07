import { React, useState, useContext, useEffect } from 'react';
import axios from 'axios';


function GameMode({ mode, title, friendData }) {

  const [players, setPlayers] = useState(0);
  const [uDown, setUDown] = useState(mode.play);
  const url = 'http://localhost:3000/api';

  const whoWantsToPlay = () => {
    let count = 0
    console.log('who play triggered')
    friendData.forEach((e) => {
      let targetGame = e.gameList.find((game) => game.gameTtile === title);
      let targetMode = targetGame.gameModes.find((entry) => entry.mode === mode.mode);
      if (targetMode.play) count++;
    })
    if (uDown) count++;
    setPlayers(count);
  }

  useEffect(() => {
    if (friendData.length > 0) whoWantsToPlay();
  }, [friendData])

  const handlePlayClick = (e) => {
    if(e.target.checked) setPlayers(players + 1);
    if(!e.target.checked) setPlayers(players - 1);
    setUDown(!uDown);

    const user =  document.querySelector('#username').textContent;
    const payload = {
      user: user,
      title: title,
      mode: mode,
      play: uDown,
    }

    axios.patch(`${url}/mode`, payload)
    .then(r => console.log(r))
    .catch(e => console.log(e))
  }

  return (
    <div>
      <h4>{mode.mode}</h4>
      <div>Ave time: {mode.aveTime === 0 ? <span>&infin;</span> :mode.aveTime}min</div>
      <div>Players: {players} / {mode.partySize}</div>
      <input type='checkbox' onChange={handlePlayClick} checked={uDown}></input>
    </div>
  );
}

export default GameMode;
