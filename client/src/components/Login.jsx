import { React, useState } from 'react';
import Button from 'react-bootstrap/Button';

function Login({setUser, setSignIn}) {

  const [authUser, setAuthUser] = useState('')

  const handleLogin = (e) => {
    setUser(authUser)
    setSignIn(true)
  }

  return (
    <div className='login'>
      <h1>you down?</h1>
      <input value={authUser} onChange={(e) => setAuthUser(e.target.value)} placeholder='username' required></input>
      <input type="password" placeholder='password' required></input>
      <Button variant="primary" size="sm" onClick={() => handleLogin()}>Login</Button>
    </div>
  );
}

export default Login;
