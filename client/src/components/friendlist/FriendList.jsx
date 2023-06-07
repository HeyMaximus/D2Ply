import { React, useState, useEffect } from 'react';
import FriendEntry from './FriendEntry';

function FriendList({list}) {

  return (
    <div>
      <h2>Your Friends</h2>
      {list.map((e) => <FriendEntry friend={e}/>)}
    </div>
  );
}

export default FriendList;
