import React, { Component } from "react";
import DonutLargeIcon from "@material-ui/icons/DonutLarge";
import { Avatar, IconButton } from "@material-ui/core";
import ChatIcon from '@material-ui/icons/Chat';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import SearchIcon from '@material-ui/icons/Search';
import "./sidebar.scss";

export class sidebar extends Component {
  render() {
    return (
      <div className="sidebar">
        <div className="sidebar-header">
            <Avatar/>
        <div className="header-right">
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
        <div className="serch-container">
            <div className="search">
            <SearchIcon/>
            <input placeholder="start new chat" type="text"/>
            </div>
        </div>
      </div>
    );
  }
}

export default sidebar;
