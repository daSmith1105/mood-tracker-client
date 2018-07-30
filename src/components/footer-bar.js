import React from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {Icon } from 'antd';
import './app.css';

export function FooterBar(props) {

    const MoodLogLink = (props) => (
        <div className="moodlog-link">
            <Link to="/mood-log">My Mood Log</Link>
        </div>
    )

    const FooterInfoLink = (props) => (
        <div className="footer-info-link">
            <Link to="/"><Icon type="info-circle-o" className="info-icon" /></Link>
        </div>
    )

    return (
        <div className="footer">
            {props.loggedIn && <MoodLogLink />}
            {props.loggedIn && <FooterInfoLink />}
        </div>
    )
}

const mapStateToProps = state => ({
    loggedIn: state.auth.currentUser !== null
});

export default connect(mapStateToProps)(FooterBar);