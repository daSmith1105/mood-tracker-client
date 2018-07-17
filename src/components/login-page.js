import React from 'react';
import LoginForm from './login-form';
import {Link} from 'react-router-dom';
import './app.css';

export default function LoginPage(props) {

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
        <div className="login">
            <h1>Login</h1>
            <LoginForm />
            <SignupLink />
        </div>
    )
}