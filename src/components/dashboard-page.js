import React from 'react';
import {Link} from 'react-router-dom';
import './app.css';

export default function Dashboard(props) {
    return (
             <div className="dashboard">
                <div className="dashboard-greeting">
                    <h1>Hello Friend!</h1>
                    <h2>Welcome to Moodsense</h2>
                </div>
                <div className="dashboard-circle-container">
                    <Link to="/mood-nav" className="link-white">
                        <div className="dasboard-question">
                            <h2 className="dashboard-question-text">How are you feeling?</h2>
                        </div>
                    </Link>
                </div>
            </div>
    )
}