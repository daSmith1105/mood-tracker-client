import React from 'react';
import {Link} from 'react-router-dom';
import SignupForm from './signup-form';
import './app.css';

export default function(props) {

    const LoginLink = (props) => (
        <div>
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
        <div className="signup">
            <h1>Signup</h1>
            <SignupForm />
            <LoginLink/>
        </div>
    )
}