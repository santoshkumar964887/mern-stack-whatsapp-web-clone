import React,{useState} from "react";
import { Avatar, IconButton } from "@material-ui/core";
import "./mainchat.scss";
import SearchIcon from "@material-ui/icons/Search";
import AttachFileIcon from "@material-ui/icons/AttachFile";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon';
import MicIcon from '@material-ui/icons/Mic';
import axios from '../axios';

const Mainchat=({messages})=>{
  const [input,setinput]=useState("");
  const sentmessage=async(e)=>{
   await e.preventDefault();
    axios.post('/message',{
      "message":input,
    "name":"demo",
    "timestam":"anything",
    "received":true
    });
    setinput("")
  };
  
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
         {
            messages.map(messag=>(
            <p className={`chat-message ${messag.received && "chat-receiver"}`} >
            <span className="name">{messag.name}</span>
            {messag.message}
            <span className="time">{new Date().toUTCString()}</span>
          </p>

    ))}
        </div>
        <div className="chat-footer">
        <InsertEmoticonIcon/>
            <form>
              
                <input value={input} onChange={(e)=>setinput(e.target.value)} placeholder="Type a message" type="text"/>
                <button onClick={sentmessage} type="submit">Send</button>
                
            </form>
            <MicIcon/>
        </div>
      </div>
    );
  
}

export default Mainchat;
