import React, { useEffect, useState } from "react";
import "./sidebarchat.scss";
import { Avatar } from "@material-ui/core";

function Sidebarchat({ addNewChat }) {
  const [seed, setSeed] = useState("");

  useEffect(() => {
    setSeed(Math.floor(Math.random() * 5000));
  }, []);

  const createNewChat = () => {
    const roomName = prompt("Please enter name for chat");
    if (roomName) {
      //database actions
    }
  };

  return !addNewChat ? (
    <div className="sidebar__chat">
      <Avatar src={`https:/avatars.dicebear.com/api/human/${seed}.svg`} />
      <div className="sidebar__chat__info">
        <h2>Room Name</h2>
        <p>Last Message...</p>
      </div>
    </div>
  ) : (
    <div className="sidebar__chat" onClick={createNewChat}>
      <h2>Add new Chat</h2>
    </div>
  );
}

export default Sidebarchat;
