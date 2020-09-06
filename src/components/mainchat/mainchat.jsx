import React, { Component } from "react";
import { Avatar, IconButton } from "@material-ui/core";
import "./mainchat.scss";
import SearchIcon from "@material-ui/icons/Search";
import AttachFileIcon from "@material-ui/icons/AttachFile";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon';
import MicIcon from '@material-ui/icons/Mic';
export class mainchat extends Component {
  render() {
    return (
      <div className="mainchat">
        <div className="chat-header">
          <Avatar />
          <div className="chat-info">
            <h5>Room Name</h5>
            <p>Last seen at...</p>
          </div>
          <div className="chat-icon">
            <IconButton>
              <SearchIcon />
            </IconButton>
            <IconButton>
              <AttachFileIcon />
            </IconButton>
            <IconButton>
              <MoreVertIcon />
            </IconButton>
          </div>
        </div>
        <div className="chat-body">
          <p className="chat-message">
            <span className="name">Santosh</span>
            This is a message
            <span className="time">{new Date().toUTCString()}</span>
          </p>
          <p className="chat-message">
            <span className="name">Santosh</span>
            This is a message
            <span className="time">{new Date().toUTCString()}</span>
          </p>
          <p className="chat-message chat-receiver">
            <span className="name">Santosh</span>
            This is a message
            <span className="time">{new Date().toUTCString()}</span>
          </p>
          <p className="chat-message">
            <span className="name">Santosh</span>
            This is a message
            <span className="time">{new Date().toUTCString()}</span>
          </p>
        </div>
        <div className="chat-footer">
        <InsertEmoticonIcon/>
            <form>
              
                <input placeholder="Type a message" type="text"/>
                <button type="submit">Send</button>
                
            </form>
            <MicIcon/>
        </div>
      </div>
    );
  }
}

export default mainchat;
