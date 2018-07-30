import React from 'react';
import {Field, reduxForm, focus} from 'redux-form';
import Input from './input';
import {login} from '../actions/auth';
import {required, nonEmpty} from '../validators';
import './app.css';

export class LoginForm extends React.Component {
    
  onSubmit(values) {
        return this.props.dispatch(login(values.username, values.password));
    }

    render() {
        let error;
        if (this.props.error) {
            error = (
                <div className="form-error" aria-live="polite">
                    {this.props.error}
                </div>
            );
        }
        return (
            <form style={{textAlign: 'center', maxWidth: '500px', margin: 'auto'}}
                className="login-form"
                onSubmit={this.props.handleSubmit(values =>
                    this.onSubmit(values)
                )}>
                {error}
                <div className="left-align">
                    <div className="user-block">
                        <label htmlFor="username">Username</label>
                        <Field className="username-entry"
                            component={Input}
                            type="text"
                            name="username"
                            id="username"
                            validate={[required, nonEmpty]}
                        />
                        </div>
                        <hr />
                        <br />
                        <div className="password-block">
                        <label htmlFor="password">Password</label>
                        <Field className="password-entry"
                            component={Input}
                            type="password"
                            name="password"
                            id="password"
                            validate={[required, nonEmpty]}
                        />
                        </div>
                    <hr />
                </div>
                <button className="login-btn" disabled={this.props.pristine || this.props.submitting}>
                    Log in
                </button>
            </form>
        );
    }
}

export default reduxForm({
    form: 'login',
    onSubmitFail: (errors, dispatch) => dispatch(focus('login', 'username'))
})(LoginForm);
