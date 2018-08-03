import React from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {clearAuth} from '../actions/auth';
import {clearAuthToken} from '../local-storage';
import { Icon } from 'antd';
import history from './history';
import './app.css';
import './antd.css';

export class HeaderBar extends React.Component {

    logOut() {
        this.props.dispatch(clearAuth());
        clearAuthToken();
        history.push('/login');
    }

    render() {
       
        const HomeLink = (props) => (
            <div className="home-link">
                <Link to="/dashboard">Dashboard</Link>
            </div>
        )

        const InfoLink = (props) => (
            <div className="info-link">
                <Link to="/"><Icon type="info-circle-o" className="info-icon" /></Link>
            </div>
        )
    
        const AppTitle = (props) => (
            <div className="app-title">
                <h1>Moodsense</h1>
            </div>
        )
    
        const LogoutLink = (props) => (
            <div className="logout-link">
                <button onTouchStart={() => this.logOut()} onclick = "void(0)" className="logout-btn">Log out</button>
            </div>
        )

    return (
        <div className="header">
            {this.props.loggedIn ? <HomeLink /> : <InfoLink />}
            <AppTitle />
            {this.props.loggedIn ? <LogoutLink /> : null}
        </div>
    )
}
}

const mapStateToProps = state => ({
    loggedIn: state.auth.currentUser !== null,
});

export default connect(mapStateToProps)(HeaderBar);