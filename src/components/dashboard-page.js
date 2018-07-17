import React from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import requiresLogin from './requires-login';
import {fetchProtectedData} from '../actions/protected-data';
import './app.css';

export class Dashboard extends React.Component{
    componentDidMount() {
        this.props.dispatch(fetchProtectedData());
    }
    render() {
    return (
             <div className="dashboard">
                <div className="dashboard-greeting">
                    <h1>Hello {this.props.firstName}!</h1>
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
}

const mapStateToProps = state => {
    const {currentUser} = state.auth;
    return {
        username: state.auth.currentUser.username,
        firstName: `${currentUser.firstName}`,
        //protectedData: state.protectedData.data
    };
};

export default requiresLogin()(connect(mapStateToProps)(Dashboard));