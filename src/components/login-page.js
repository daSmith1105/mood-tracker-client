import React from 'react';
import {connect} from 'react-redux';
import {Link, Redirect} from 'react-router-dom';
import './app.css';
import LoginForm from './login-form';


export function LoginPage(props) {
    // If we are logged in redirect straight to the user's dashboard
    if (props.loggedIn) {
        return <Redirect to="/dashboard" />;
    }

    const SignupLink = (props) => (
        <div className="redirect">
            <p>New to Moodsense? 
                <span>
                    <Link to="/signup">
                    Signup
                    </Link>
                </span>
            </p>
        </div>
    )

    return (
        <div className="login" style={{textAlign: 'center', maxWidth: '500px', margin: 'auto'}}>
            <h1 className="login-heading">Login</h1>
                <div className="demo-block">
                <h3 className="demo">You may demo the app using:</h3>
                <p className="demo-info">Username: demo</p>
                <p className="demo-info">Password: moodsense18</p>
            </div>
            <div className="login-container">
            <LoginForm />
            <SignupLink />
            </div>
        </div>
    );
}

const mapStateToProps = state => ({
    loggedIn: state.auth.currentUser !== null
});

export default connect(mapStateToProps)(LoginPage);