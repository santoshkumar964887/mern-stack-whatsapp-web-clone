import React, { Component } from 'react';
import DonutLargeIcon from '@material-ui/icons/DonutLarge';
import './sidebar.scss';

export class sidebar extends Component {
    render() {
        return (
            <div className="sidebar">
                <div className="sidebar-header">
                <DonutLargeIcon/>
                </div>
            </div>
        )
    }
}

export default sidebar
