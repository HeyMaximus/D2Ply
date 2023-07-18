import { React, useState } from 'react';
import axios from 'axios';
import GameMode from './GameMode';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Stack from 'react-bootstrap/Stack';


function GameEntry({ game, friendData }) {
  const url = 'http://localhost:3000/api'

  const handleRemove = () => {
    const user = document.querySelector('#username').textContent;
    const payload = {
      title: game.gameTtile,
      user: user,
    }
    axios.patch(`${url}/removegame`, payload)
      .then(r => console.log(r))
      .catch(r => console.log(r))
  }

  return (
    <div className="game">
      <Container>
        <Row>
          <Col>
            <img className="gamethumbnail" src={game.gameThumbnail} />
            <div className="gametitle">{game.gameTtile} <Button className="gameremovebtn" onClick={() => handleRemove()} variant="outline-primary" size="sm">X</Button></div>
          </Col>
          <Col>
            <h3>Game Modes</h3>
            {game.gameModes.map((e, ind) => <GameMode mode={e} title={game.gameTtile} friendData={friendData} i={ind} />)}
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default GameEntry;
