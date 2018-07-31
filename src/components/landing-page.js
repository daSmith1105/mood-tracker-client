import React from 'react';
import {Link} from 'react-router-dom';
import './app.css';

export default function LandingPage(props) {
    return (
        <div className="landing-page">
            <h1 className="landing-welcome">Welcome to Moodsense</h1>
            <h2 className="landing-tagline">Awareness Tracking</h2>
            <p className="landing-description">A healthier and happier life through mood tracking and individual emotional awareness analysis.</p>  
            <p>It will allow you to:</p>
        
            <ul className="landing-bullets">
                <li>Select your current mood</li>
                <li>Select the intensity of that mood</li>
                <li>Make notes on your current mood</li>
                <li>Maintain a log of all your entries</li>
            </ul>
            <h3 className="landing-action-call">GET STARTED</h3>
            <div className="landing-links">
                <Link to="/login" className="landing-link-login">LOGIN</Link>
                <Link to="/signup" className="landing-link-signup" >SIGNUP</Link>
            </div>
        </div>
    )
}