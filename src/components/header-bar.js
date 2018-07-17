import React from 'react';
import {Link} from 'react-router-dom';
import './app.css';

export default function HeaderBar(props) {

    const HomeLink = (props) => (
        <div className="home-link">
            <Link to="/">Home</Link>
        </div>
    )

    const AppTitle = (props) => (
        <div className="app-title">
            <h1>Moodsense</h1>
        </div>
    )

    const LogoutLink = (props) => (
        <div className="logout-link">
            <Link to="/">Logout</Link>
        </div>
    )

    return (
        <div className="header">
            <HomeLink/>
            <AppTitle />
            <LogoutLink />
        </div>
    )
}