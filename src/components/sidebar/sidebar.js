import React from "react";
import "./sidebar.scss";

//material ui 
import { Avatar, IconButton } from "@material-ui/core";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import ChatIcon from "@material-ui/icons/Chat";
import DonutLargeIcon from "@material-ui/icons/DonutLarge";
import SearchIcon from '@material-ui/icons/Search';

//components
import SideBarChat from '../sidebarchat/sidebarchat'

function sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebar__header">
        <Avatar />
        <div className="sidebar__header_right">
          <IconButton>
            <DonutLargeIcon />
          </IconButton>
          <IconButton>
            <ChatIcon />
          </IconButton>
          <IconButton>
            <MoreVertIcon />
          </IconButton>
        </div>
      </div>
      <div className="sidebar__search">
        <div className="sidebar__search__container">
          <SearchIcon />
          <input placeholder="Search or start new chat" type="text"/>
        </div>
      </div>
      <div className="sidebar__chats">
        <SideBarChat />
        <SideBarChat />
        <SideBarChat />
      </div>
    </div>
  );
}

export default sidebar;
