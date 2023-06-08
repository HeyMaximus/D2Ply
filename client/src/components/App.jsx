import { React, useState, useEffect, createContext } from 'react';
import Login from './Login';
import FriendList from './friendlist/FriendList';
import GameList from './gamelist/GameList';
import axios from 'axios';

//bootstraps
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Badge from 'react-bootstrap/Badge';
import Offcanvas from 'react-bootstrap/Offcanvas';
import Button from 'react-bootstrap/Button';


function App() {

  const [user, setUser] = useState('');
  const [signIn, setSignIn] = useState(false)
  const [userData, setUserData] = useState({ friendList: [], gameList: [] })
  const [friendData, setFriendData] = useState([])
  const [gameToAdd, setGameToAdd] = useState('')
  const [show, setShow] = useState(false);

  const url = 'http://localhost:3000/api'

  const getAll = (user) => {
    axios.get(`${url}/user`, { params: { user: user } })
      .then(r => { if (r.data.length > 0) { setUserData(r.data[0]) } })
      .catch(e => console.log(e));
  }

  useEffect(() => {
    getAll(user);
  }, [user])

  useEffect(() => {
    if (userData.friendList.length > 0) {
      axios.get(`${url}/friends`, { params: { userFriendList: userData.friendList } })
        .then(r => {
          if (r.data.length > 0) { setFriendData(r.data) }
        })
        .catch(e => console.log(e))
    }
  }, [userData])

  useEffect(() => {
    const interval = setInterval(() => {
      let u = '';
      setUser(user => { u = user; return user })
      getAll(u);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const handleAddGame = () => {
    axios.patch(`${url}/addgame`, { user: user, title: gameToAdd })
      .then(r => console.log(r))
      .catch(e => console.log(e.response.data))
  }

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div className="main">
      {signIn ? null : <Login setUser={setUser} setSignIn={setSignIn} />}
      {signIn ? <div>
        <input onChange={(e) => setGameToAdd(e.target.value)} value={gameToAdd} placeholder="Search for a game"></input>
        <button onClick={() => handleAddGame()}>Add Game</button>
        <div className="title">Down 2 Play, <span id="username">{user}</span>? <Button variant="primary" onClick={handleShow} >Friend List</Button></div>
        <GameList list={userData.gameList} friendData={friendData} />
        <Offcanvas show={show} onHide={handleClose} placement="end">
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>
          <input placeholder="Add a friend"></input><Button variant="outline-primary" size="sm">Add</Button>
          </Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
        <FriendList list={userData.friendList} />
        </Offcanvas.Body>
        </Offcanvas>
      </div>
        : null}
    </div>
  );
}

export default App;
