import React from 'react';
import {connect} from 'react-redux';
import {Route, Router, withRouter} from 'react-router-dom';
import history from './history';
import HeaderBar from './header-bar';
import FooterBar from './footer-bar';
import LandingPage from './landing-page';
import LoginPage from './login-page';
import SignupPage from './signup-page';
import Dashboard from './dashboard-page';
import MoodLog from './mood-log';
import MoodNav from './mood-nav';
import {refreshAuthToken} from '../actions/auth';

export class App extends React.Component {

    componentDidUpdate(prevProps) {
        if (!prevProps.loggedIn && this.props.loggedIn) {
            this.startPeriodicRefresh();
        } else if (prevProps.loggedIn && !this.props.loggedIn) {
            this.stopPeriodicRefresh();
        }
    }

    componentWillUnmount() {
        this.stopPeriodicRefresh();
    }

    startPeriodicRefresh() {
        this.refreshInterval = setInterval(
            () => this.props.dispatch(refreshAuthToken()),
            60 * 60 * 1000 // One hour
        );
    }

    stopPeriodicRefresh() {
        if (!this.refreshInterval) {
            return;
        }

        clearInterval(this.refreshInterval);
    }

  
    render() {
        return (
            <div className="App">
              <Router history={history}>
                <div>
                    <HeaderBar />
                    {this.props.loggedIn && <FooterBar />}
                    <main>
                      <Route exact path="/" component={LandingPage}/>
                      <Route exact path="/login" component={LoginPage}/>
                      <Route exact path="/signup" component={SignupPage}/>
                      <Route exact path="/dashboard" component={Dashboard}/>
                      <Route exact path="/mood-log" component={MoodLog}/>
                      <Route exact path="/mood-nav" component={MoodNav}/>
                    </main>
                </div>
              </Router>
            </div>
        );
    }
}

const mapStateToProps = state => ({
  hasAuthToken: state.auth.authToken !== null,
  loggedIn: state.auth.currentUser !== null
});

export default withRouter(connect(mapStateToProps)(App)); 