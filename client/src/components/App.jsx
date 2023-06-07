import { React, useState, useEffect, createContext } from 'react';
import Login from './Login';
import FriendList from './friendlist/FriendList';
import GameList from './gamelist/GameList';
import axios from 'axios';

function App() {

  const [user, setUser] = useState('Gina');
  const [signIn, setSignIn] = useState(true)
  const [userData, setUserData] = useState({friendList: [], gameList: []})
  const [friendData, setFriendData] = useState([])

  const url = 'http://localhost:3000/api'

  const getAll = () => {
    axios.get(`${url}/user`, { params: { user: 'Gina' } })
      .then(r => setUserData(r.data[0]))
      .catch(e => console.log(e));
  }

  useEffect(() => {
    getAll();
  }, [user])

  useEffect(() => {
    if(userData.friendList.length > 0) {
      axios.get(`${url}/friends`, { params: { userFriendList: userData.friendList } } )
      .then(r => {
        if(r.data.length > 0) setFriendData(r.data)
      })
      .catch(e => console.log(e))
    }
  }, [userData])

  return (
    <div>
      {signIn ? null : <Login setUser={setUser} setSignIn={setSignIn} />}
      {signIn ? <div>
        <div>Hi, <span id='username'>{user}</span>! Down 2 Play?</div>
        <FriendList list={userData.friendList}/>
        <GameList list={userData.gameList} friendData={friendData}/>
      </div>
        : null}
    </div>
  );
}

export default App;
