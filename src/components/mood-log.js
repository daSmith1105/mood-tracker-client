import React from 'react';
import {API_BASE_URL} from '../config';
import history from './history';
import { connect } from 'react-redux';
import remove from '../images/delete.png';
import moment from 'moment';
import './app.css';

export class MoodLog extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            loading: false,
            error: null,
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
        fetch(`${API_BASE_URL}/mood-entries/` + this.props.userId)
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

    mappedEntries = () => {
        const moodblockcontainer = {
            width:'100%',
            height:'14vw',
            overflow: 'scroll',
            padding: '.15em',
            paddingTop: '.25em',
        }
        const moodblock = {
            float:'left',
            marginRight:'1em',
            display: 'inline-block', 
            marginBottom: '.5em',
            marginTop: '.5em'
        }
        const moodtype = {
            fontSize: '3.5vw',
            fontWeight: 'bold'
        }
        const moodint = {
            backgroundColor: 'goldenrod',
            border:'2px solid goldenrod',
            borderRadius: '50%',
            color: 'white',
            fontSize: '3vw',
            fontWeight: 'bold',
            padding: '.4em',
            paddingTop: '0',
            paddingBottom: '0',
            marginLeft: '.2em'
        }
        const moodnote = {
            clear: 'both',
            fontSize: '3.5vw',
            fontWeight: 'bold',
            width:'100%',
            height: '26vw',
            overflow: 'scroll',
            padding: '.5em',
            border: '1px solid rgba(0,0,0,0.5)',
            borderRadius: '.5em',
            textAlign: 'left',
            wordWrap: 'break-word',
            marginTop: '-1em',
            marginBottom: '1em'
        }
        let entries = this.state.moodData.entries;
        return entries.map( entry => {

            return <div key={entry._id} className="entry">
            
                        <button className="delete-entry" onClick={() => this.handleDelete(entry._id)}><img src={remove} alt="delete" className="delete-image"/></button>

                        <span className="mLog-date">{this.formatDate(entry.created)}</span>
                        <br />

                        <div style={moodblockcontainer}>{
                                entry.moods.map( mood => {
                                    return (
                                        <div key={mood._id} style={moodblock}>

                                                <span style={moodtype}>{mood.moodType}</span>
                                                <span style={moodint}>{mood.intensity}</span>

                                        </div>
                                        )
                                    })
                                }
                        </div>
                        <br />
                        <div style={moodnote}>{entry.note}</div>
                    </div>
            })
        }

render() { 

    const NavBack = (props) => {
        return (
            <div>
                <button onClick={history.goBack} className="log-back">Back</button>
            </div>
        )
    }

    const ConfirmDelete = (props) => {
        return (
            <div className="delete-modal">
                <div className="modal-container">
                    <h1> Are you sure you want to delete this entry?</h1>
                    <button onClick={ () => (this.setState({delete: false}))} className="no-btn">No</button>
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
               <div className="mood-log-container">
                   {this.state.moodData && this.mappedEntries()}
               </div>
            )
        }

        return (
            <div className="mood-log">
                    <NavBack />
                    <div className="log-container">
                        {this.state.delete ? <ConfirmDelete /> : null}
                        {body}
                    </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    const {currentUser} = state.auth;
        return {
            loggedIn: state.auth.currentUser !== null,
            userId: `${currentUser.id}`
        };
};

export default connect(mapStateToProps)(MoodLog);
