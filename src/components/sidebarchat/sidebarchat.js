import React, { useEffect, useState } from "react";
import "./sidebarchat.scss";
import { Avatar } from "@material-ui/core";
import db from '../../firebase/api'
import {Link} from 'react-router-dom'

function Sidebarchat({ addNewChat, name, id }) {
  const [seed, setSeed] = useState("");

  useEffect(() => {
    setSeed(Math.floor(Math.random() * 5000));
  }, []);

  const createNewChat = () => {
    const roomName = prompt("Please enter name for chat");
    if (roomName) {
      //db stuff 
      db.collection('rooms').add({name: roomName})
    }
  };

  return !addNewChat ? (
    <Link to={`/rooms/${id}`}>
      <div className="sidebar__chat">
        <Avatar src={`https:/avatars.dicebear.com/api/human/${seed}.svg`} />
        <div className="sidebar__chat__info">
          <h2>{name}</h2>
          <p>Last Message...</p>
        </div>
      </div>
    </Link>
  ) : (
    <div className="sidebar__chat" onClick={createNewChat}>
      <h2>Add new Chat</h2>
    </div>
  );
}

export default Sidebarchat;
