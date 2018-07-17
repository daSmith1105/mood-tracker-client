import React from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {clearAuth} from '../actions/auth';
import {clearAuthToken} from '../local-storage';
import './app.css';

export class HeaderBar extends React.Component {

    logOut() {
        this.props.dispatch(clearAuth());
        clearAuthToken();
    }

    render() {
        // Only render the log out button if we are logged in
        let logOutButton;

        if (this.props.loggedIn) {
            logOutButton = (
                <button onClick={() => this.logOut()}>Log out</button>
            );
        }

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
                {logOutButton}
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
}

const mapStateToProps = state => ({
    loggedIn: state.auth.currentUser !== null,
});

export default connect(mapStateToProps)(HeaderBar);