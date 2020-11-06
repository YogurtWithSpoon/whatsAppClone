import React,{useEffect, useState} from 'react'
import './sidebarchat.scss'
import { Avatar } from "@material-ui/core";

function Sidebarchat() {
  const [seed,setSeed] = useState('');

  useEffect(() => {
    setSeed(Math.floor(Math.random() * 5000))
  },[])

  return (
    <div className="sidebar__chat">
      <Avatar src={`https:/avatars.dicebear.com/api/human/${seed}.svg`} />
      <div className="sidebarChat__info">
        <h2>Room Name</h2>
        <p>Last Message</p>
      </div>
    </div>
  )
}

export default Sidebarchat
