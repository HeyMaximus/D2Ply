import { React, useState, useEffect } from 'react';
import FriendEntry from './FriendEntry';
import Button from 'react-bootstrap/Button';

function FriendList({list}) {

  return (
    <div className="friendlist">
      <h2>Your Friends</h2>
      {list.map((e) => <FriendEntry friend={e}/>)}
    </div>
  );
}

export default FriendList;
