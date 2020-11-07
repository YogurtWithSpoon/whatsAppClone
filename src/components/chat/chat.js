import React, { useEffect, useState } from "react";
import {useParams} from 'react-router-dom';
import db from '../../firebase/api';
import "./chat.scss";
import { Avatar, IconButton } from "@material-ui/core";
import SearchOutlinedIcon from "@material-ui/icons/SearchOutlined";
import AttachFileOutlinedIcon from "@material-ui/icons/AttachFileOutlined";
import MoreVertOutlinedIcon from "@material-ui/icons/MoreVertOutlined";
import MicNoneOutlinedIcon from "@material-ui/icons/MicNoneOutlined";
import InsertEmoticonOutlinedIcon from "@material-ui/icons/InsertEmoticonOutlined";
import {useStateValue} from '../../datalayer/stateprovider';
import firebase from 'firebase';

function Chat() {
  const [seed, setSeed] = useState("");
  const [message, setMessage] = useState("");
  const [roomName, setRoomName] = useState("");
  const [roomMessages, setRoomMessages] = useState([]);
  const [{userName,userID}, dispatch ] = useStateValue();

  function beautyTime(date){
    return `${date.getDate()}/${date.getMonth()+1}/${date.getFullYear()}
      ${date.getHours()}:${date.getMinutes() < 10 ? "0" + date.getMinutes() : date.getMinutes()}
    `
  }

  const {roomId} = useParams();

  useEffect(() => {
    setSeed(Math.floor(Math.random() * 5000));
  }, []);

  useEffect(() => {
    if(roomId){
      db.collection('rooms').doc(roomId).onSnapshot(snapshot => (
        setRoomName(snapshot.data().name)
      ))

      db.collection('rooms').doc(roomId).collection('messages').orderBy('timestamp','asc').onSnapshot(snapshot => (
        setRoomMessages(snapshot.docs.map(message => (
          message.data()
        )))
      ))
    }
  }, [roomId]);

  const sendMessage = (e) => {
    e.preventDefault();
    console.log("You tapped ", message);
    db.collection('rooms').doc(roomId).collection('messages').add({
      name: userName,
      message: message,
      id: userID,
      timestamp: firebase.firestore.FieldValue.serverTimestamp()
    })
    setMessage("");
  };

  return (
    <div className="chat">
      <div className="chat__header">
        <Avatar src={`https:/avatars.dicebear.com/api/human/${seed}.svg`} />
        <div className="chat__headerInfo">
          <h3>{roomName}</h3>
          <p>Last seen {beautyTime(new Date(roomMessages[roomMessages.length - 1]?.timestamp?.toDate()))}</p>
        </div>
        <div className="chat__headerRight">
          <IconButton>
            <SearchOutlinedIcon />
          </IconButton>
          <IconButton>
            <AttachFileOutlinedIcon />
          </IconButton>
          <IconButton>
            <MoreVertOutlinedIcon />
          </IconButton>
        </div>
      </div>
      <div className="chat__body">
        {roomMessages.map(message => (
          <p className={`chat__message ${message.id !== userID && "chat__reciver"}`}>
            <span className="chat__name">{message.name}</span>
            {message.message}
            <span className="chat__timestamp">
              {beautyTime(new Date(message.timestamp?.toDate()))}
            </span>
          </p>
        ))}
      </div>
      <div className="chat__footer">
        <IconButton>
          <InsertEmoticonOutlinedIcon />
        </IconButton>
        {/* use form for enter button function */}
        <form>
          <input
            type="text"
            placeholder="Tape a message"
            value={message}
            onChange={(e) => {
              setMessage(e.target.value);
            }}
          />
          <button onClick={sendMessage} type="submit">
            Send a message
          </button>
        </form>
        <IconButton>
          <MicNoneOutlinedIcon />
        </IconButton>
      </div>
    </div>
  );
}

export default Chat;
