import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route} from 'react-router-dom';
import history from './components/history';
import './index.css';
import App from './components/app';
import LandingPage from './components/landing-page';
import LoginPage from './components/login-page';
import SignupPage from './components/signup-page';
import Dashboard from './components/dashboard-page';
import MoodLog from './components/mood-log';
import MoodNav from './components/mood-nav';


ReactDOM.render(
    <Router history={history}>
    <div>
        <App />
            <Route exact path="/" component={LandingPage}/>
            <Route exact path="/login" component={LoginPage}/>
            <Route exact path="/signup" component={SignupPage}/>
            <Route exact path="/dashboard" component={Dashboard}/>
            <Route exact path="/mood-log" component={MoodLog}/>
            <Route exact path="/mood-nav" component={MoodNav}/>
            </div>
    </Router>,
    document.getElementById('root')
);

