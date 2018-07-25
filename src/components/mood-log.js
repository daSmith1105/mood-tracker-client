import React from 'react';
import {API_BASE_URL} from '../config';
import './app.css';

export class MoodLog extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            loading: false,
            error: null,
            data: []
        }

    }

    componentDidMount() {
        this.loadEntries();
    }


    loadEntries() {
        this.setState({
            error: null,
            loading: true
        });
        fetch(`${API_BASE_URL}/moods`)
            .then(res => {
                if (!res.ok) {
                    return Promise.reject(res.statusText);
                }
                //return res.json()
                //.then()
                this.setState({
                    data : res.json(),
                    loading: false,
                    error: null
                })
            })
            .catch(err =>
                this.setState({
                    error: 'Could not load entries',
                    loading: false
                })
            );
    }
    

render() { 
    
    let body;
        if (this.state.error) {
            body = (
                <div className="message message-error">{this.state.error}</div>
            );
        } else if (this.state.loading) {
            body = (
                <div className="message message-default">Loading...</div>
            );
        } else {
           body = (
            <div>
                <p>Success</p>
                <div>{this.state.data.Promise}</div>
            </div>
            )
        }

        return (
            <div className="mood-log">
                {body}
            </div>
        );
    }
}

export default MoodLog;