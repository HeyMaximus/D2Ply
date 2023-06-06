import { React, useState, useEffect } from 'react';
import axios from 'axios';
import Login from './Login';
import FriendList from './friendlist/FriendList';
import GameList from './gamelist/GameList';


function App() {

  const [user, setUser] = useState('');

  const [userData, setUserData] = useState({})
  const url = 'http://localhost:3000/api'

  const getAll = () => {
    axios.get(url)
      .then()
      .catch();
  }

  useEffect(() => {
    getAll();
  }, [])

  return (
    <div>
      {<Longin setUser={setUser}/>}
      <h1>What would you plike to play?</h1>
      <FriendList />
      <GameList />
    </div>
  );
}

export default App;
