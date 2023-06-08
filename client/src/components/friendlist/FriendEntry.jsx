import { React, useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import CloseButton from 'react-bootstrap/CloseButton';

function FriendEntry({friend}) {



  return (
    <div>
      <span className="friendname">{friend}</span><Button variant="outline-primary" size="sm">x</Button>
    </div>
  );
}

export default FriendEntry;
