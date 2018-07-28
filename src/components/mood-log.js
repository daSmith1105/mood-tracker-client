import React from 'react';
import {API_BASE_URL} from '../config';
import moment from 'moment';
import './app.css';

export class MoodLog extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            loading: false,
            error: null,
            moodData: [],
        }

        this.formatDate = this.formatDate.bind(this);
        this.deleteEntry = this.deleteEntry.bind(this);
    }

    componentDidMount() {
        fetch(`${API_BASE_URL}/mood-entries`)
        .then(data => data.json())
        .then((data) => { this.setState({ moodData: data }) });
    }

    formatDate = (date) => (moment(date).format("dddd, MMMM Do YYYY, h:mm:ss a"));

    deleteEntry = (_id) => {
        fetch(`${API_BASE_URL}/mood-entries/${_id}`, { method: "DELETE" })
        //.then(res => res.json())
        .then(res => {
            console.log('Deleted:', res.url)
        })
        .then(
            window.location.reload()
            /*
            fetch(`${API_BASE_URL}/mood-entries`)
                .then(data => data.json())
                .then((data) => { 
                    this.setState({ moodData: data }) 
                    console.log(this.state.moodData)
                })
                */
            )
            .catch(err => console.error(err))
    }

    



render() { 

    const array = this.state.moodData.entries;
    console.log("Current Entries: ", array);

    const map = Object.keys(array).map((i) => {
        console.log((array[i]._id));
        return  (

            <li key={array[i]._id} className="line-entry">
                {this.formatDate(array[i].created)}
                <br /><br />
                <br />
                {array[i].note}
                <button className="delete-entry" onClick={ () => (this.deleteEntry( (array[i]._id))) }>Delete</button>
            </li>
        )})

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
               <ul>
                {map}
               </ul>
            )
        }

        return (
            <div className="mood-log">
                    {body}
            </div>
        )
    }
}

export default MoodLog;