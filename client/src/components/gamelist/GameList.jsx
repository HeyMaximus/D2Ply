import { React, useState, useEffect } from 'react';
import GameEntry from './GameEntry';

import Stack from 'react-bootstrap/Stack';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

function GameList({ list, friendData }) {

  return (
    <div>
      <Row>
        {list.map((e) => <Col><GameEntry game={e} friendData={friendData}/></Col>)}
      </Row>
    </div>
  );
}

export default GameList;
