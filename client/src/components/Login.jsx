import { React, useState } from 'react';

function Login({setUser, setSignIn}) {

  const [authUser, setAuthUser] = useState('')

  const handleLogin= (e) => {
    setUser(authUser)
    setSignIn(true)
  }

  return (
    <div>
      <h2>Please Signin</h2>
      <input value={authUser} onChange={(e) => setAuthUser(e.target.value)} placeholder='username' required></input>
      <input placeholder='password' required></input>
      <button onClick={handleLogin}>Login</button>
    </div>
  );
}

export default Login;
