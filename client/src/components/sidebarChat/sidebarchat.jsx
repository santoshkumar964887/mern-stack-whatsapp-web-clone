import React from 'react';
import {Avatar} from '@material-ui/core';
import './sidebarChat.scss';

export default function sidebarchat() {
    return (
        <div className="sidebarchat-container">
            <Avatar/>
            <div className="sidebarChat-info">
                <h6>Room Name</h6>
                <p>this is last message</p>
            </div>
            
        </div>
    )
}
