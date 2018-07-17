import React from 'react';

export default function SignupForm(props) {
    return (
        <div>
            <form>
                <fieldset>
                    <label htmlFor="firstname">First Name</label>
                    <input type="text" name="firstname"/>
                </fieldset>
                <fieldset>
                    <label htmlFor="username">Username</label>
                    <input type="text" name="username"/>
                </fieldset>
                <fieldset>
                    <label htmlFor="password">Password</label>
                    <input type="text" name="password"/>
                    <label htmlFor="verify-password">Verify Password</label>
                    <input type="text" name="verify-password"/>
                </fieldset>
                <button type='submit'>Signup</button>
            </form>
        </div>
    )
}