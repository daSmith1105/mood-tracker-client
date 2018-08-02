import React from 'react';
import {connect} from 'react-redux';
import {Link, Redirect} from 'react-router-dom';
import SignupForm from './signup-form';
import './app.css';

export function SignUpPage(props) {
    // If we are logged in (which happens automatically when registration
    // is successful) redirect to the user's dashboard
    if (props.loggedIn) {
        return <Redirect to="/dashboard" />;
    }

    const LoginLink = (props) => (
        <div className="redirect">
            <p>Already have an account? 
                <span>
                    <Link to="/login">
                        Login
                    </Link>
                </span>
            </p>
        </div>
    )

    return (
        <div className="signup" style={{textAlign: 'center', maxWidth: '500px', margin: 'auto'}}>
            <h1 className="signup-heading">Signup</h1>
            <SignupForm />
            <LoginLink />
        </div>
    );
}

const mapStateToProps = state => ({
    loggedIn: state.auth.currentUser !== null
});

export default connect(mapStateToProps)(SignUpPage);