import React from 'react';
import {API_BASE_URL} from '../config';
import history from './history';
import { connect } from 'react-redux';
import moment from 'moment';
import './app.css';

export class MoodLog extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            loading: false,
            error: null,
            moodData: [],
            delete: false,
            deleteId: null
        }

        this.getData = this.getData.bind(this);
        this.formatDate = this.formatDate.bind(this);
        this.deleteEntry = this.deleteEntry.bind(this);
        this.handleDelete = this.handleDelete.bind(this);
        this.state.refresh && this.getData()
    }

        componentDidMount() {

            if(!this.props.loggedIn) {
                history.push('/login') 
                console.log('Forbidden: Login Required')
            } else {
                this.getData()
                }
            }   
    

    getData = () => {
        fetch(`${API_BASE_URL}/mood-entries/${this.props.user}`)
        .then(data => data.json())
        .then((data) => { 
            this.setState({ 
                moodData: data,
            }) 
        });
}

    formatDate = (date) => (moment(date).format("dddd, MMMM Do YYYY, h:mm:ss a"));

    handleDelete = (val) => {
        this.setState({
            delete: true,
            deleteId: val
        })
    }

    deleteEntry = (_id) => {
        fetch(`${API_BASE_URL}/mood-entries/${_id}`, { method: "DELETE" })
        .then(res => {
            console.log('Deleted:', res.url)
        })
        .then(
            this.getData,
            this.setState ({
                delete: false
            })
            )
            .catch(err => console.error(err))
    }


render() { 

    const MappedEntries = (props) => {
        const array = this.state.moodData.entries
        console.log(array);
        return (
            Object.keys(array).map((i) => {
                return  (

                    <li key={array[i]._id} className="line-entry">
                        {this.formatDate(array[i].created)}
                        <br />
                        {array[i].user}
                        <br /><br />
                        <br />
                        {array[i].note}
                        <button className="delete-entry" onClick={() => this.handleDelete(array[i]._id)}>X</button>
                    </li>
                )})
        )

    }
    

    const NavBack = (props) => {
        return (
            <div>
                <button onClick={history.goBack}>Back</button>
            </div>
        )
    }

    const ConfirmDelete = (props) => {
        console.log('clicked');
        return (
            <div className="delete-modal">
                <div className="modal-container">
                    <h1> Are you sure you want to delete this entry?</h1>
                    <button onClick={ () => (this.setState({delete: false}))}>No</button>
                    <button onClick={ () => (this.deleteEntry(this.state.deleteId)) }>Yes</button>
                </div>
            </div>
        )
    }

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
                <MappedEntries />
               </ul>
            )
        }

        return (
            <div className="mood-log">
                    <NavBack />
                    {this.state.delete ? <ConfirmDelete /> : null}
                    {body}
            </div>
        )
    }
}

const mapStateToProps = state => ({
    loggedIn: state.auth.currentUser !== null,
});

export default connect(mapStateToProps)(MoodLog);