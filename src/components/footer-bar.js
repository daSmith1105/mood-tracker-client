import React from 'react';
import {Link} from 'react-router-dom';
import './app.css';

export default function FooterrBar(props) {

    const MoodLogLink = (props) => (
        <div className="footer">
            <Link to="/mood-log">My Mood Log</Link>
        </div>
    )

    return (
        <div>
            <MoodLogLink/>
        </div>
    )
}