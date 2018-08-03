import React from 'react';
import {connect} from 'react-redux';
import requiresLogin from './requires-login';
import './app.css';

export class Dashboard extends React.Component{
    constructor(props) {
        super();

        this.onSelect = this.onSelect.bind(this);
    }

    onSelect = () => {
        this.props.history.push({
          pathname: './mood-nav',
          state: {userId: this.props.userId} 
        })
    }
    render() {

    return (
             <div className="dashboard">
                <div className="dashboard-greeting">
                    <h1>Hello {this.props.firstName}!</h1>
                    <h2>Welcome to Moodsense</h2>
                </div>
                <div className="circle-text" >
                    <div onClick={this.onSelect}>
                        How are you<span className="new-line">feeling?</span>
                    </div>
                </div>
            </div>
    )
}
}

const mapStateToProps = state => {
    const {currentUser} = state.auth;
    return {
        firstName: `${currentUser.firstName}`,
        userId: `${currentUser.id}`
    };
};

export default requiresLogin()(connect(mapStateToProps)(Dashboard));