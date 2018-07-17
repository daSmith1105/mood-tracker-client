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
        <div>
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
            <h2 className="heading">Login</h2>
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