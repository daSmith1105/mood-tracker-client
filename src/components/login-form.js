import React from 'react';

export default function LoginForm(props) {
    return (
        <div>
            <form>
                <fieldset>
                    <label htmlFor="username">Username</label>
                    <input type="text" name="username"/>
                </fieldset>
                <fieldset>
                    <label htmlFor="password">Password</label>
                    <input type="text" name="password"/>
                </fieldset>
                <button type='submit'>Login</button>
            </form>
        </div>
    )
}