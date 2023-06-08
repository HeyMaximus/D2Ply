import { React, useState, useContext, useEffect } from 'react';
import axios from 'axios';


function GameMode({ mode, title, friendData, i }) {

  const [players, setPlayers] = useState(0);
  const [uDown, setUDown] = useState(mode.play);
  const url = 'http://localhost:3000/api';

  const whoWantsToPlay = () => {
    let count = 0
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
    const user =  document.querySelector('#username').textContent;
    const payload = {
      user: user,
      title: title,
      mode: mode.mode,
      play: !uDown,
      index: i,
    };
    console.log('sending: ', payload)
    axios.patch(`${url}/mode`, payload)
    .then(r => console.log(r))
    .catch(e => console.log(e))

    if(e.target.checked) setPlayers(players + 1);
    if(!e.target.checked) setPlayers(players - 1);
    setUDown(!uDown);
  }

  return (
    <div className="mode">
      {players >= mode.partySize ?
     <div className="playercount">
     <div><input type='checkbox' onChange={handlePlayClick} checked={uDown}></input> {mode.mode}</div>
     <div className="avetime">{mode.aveTime === 0 ? <span>&infin;</span> :mode.aveTime}min</div>
     <div>Players: {players} / {mode.partySize}</div>
     </div>

     :<div>
      <div><input type='checkbox' onChange={handlePlayClick} checked={uDown}></input> {mode.mode}</div>
      <div className="avetime">{mode.aveTime === 0 ? <span>&infin;</span> :mode.aveTime}min</div>
      <div>Players: {players} / {mode.partySize}</div>
      </div>}
    </div>
  )
}

export default GameMode;