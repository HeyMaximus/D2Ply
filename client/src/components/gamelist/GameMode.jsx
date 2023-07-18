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
      if (targetGame) {
        let targetMode = targetGame.gameModes.find((entry) => entry.mode === mode.mode);
        if (targetMode.play) count++;
      }
    })
    if (uDown) count++;
    setPlayers(count);
    return;
  }
  useEffect(() => {
    if (friendData.length > 0) whoWantsToPlay();
  }, [friendData])

  const handlePlayClick = (e) => {
    console.log('triggered')
    const user =  document.querySelector('#username').textContent;
    const payload = {
      user: user,
      title: title,
      mode: mode.mode,
      play: !uDown,
      index: i,
    };

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
     <div><input type='checkbox' onChange={(e) => {handlePlayClick(e)}} checked={uDown}></input> {mode.mode}</div>
     <div className="avetime">{mode.aveTime === 0 ? <span>&infin;</span> :mode.aveTime}min</div>
     <div>Players: {players} / {mode.partySize}</div>
     </div>

     :<div>
      <div><input type='checkbox' onChange={(e) => {handlePlayClick(e)}} checked={uDown}></input> {mode.mode}</div>
      <div className="avetime">{mode.aveTime === 0 ? <span>&infin;</span> :mode.aveTime}min</div>
      <div>Players: {players} / {mode.partySize}</div>
      </div>}
    </div>
  )
}
export default GameMode;