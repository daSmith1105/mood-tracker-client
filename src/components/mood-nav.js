import React, { Component } from 'react';
import MoodSelectComponent from './mood-select-component';
import {connect} from 'react-redux';
import NoteComponent from './note-component';
import history from './history'
import MoodConfirmComponent from './mood-confirm-component';
import { Tabs, Row, Col, Badge} from 'antd';
import {API_BASE_URL} from '../config';
import './antd.css';
import './app.css';
import './spacing.css';

const TabPane = Tabs.TabPane;

export class MoodNav extends Component {
    constructor(props){
        super(props);
        this.state = {
            currentStep: '1',
            stepResults: {},
            complete: false,
            redirect: false,
            noData: false
        }

    }

    componentDidMount() {
            if(!this.props.loggedIn || !this.props.userId || !this.props.location.state) {
                 history.push('/login') 
                 console.log('Forbidden: Login Required')
            }  
    }

    noDataRedirect = () => {
        this.setState({
            noData: false
        })
        history.push('/dashboard')
    }

    step2 = (val) => {
        let currentStepResults = this.state.stepResults;
        currentStepResults.step1 = val;
        this.setState({currentStep: '2', stepResults: currentStepResults});
    }

    step3 = (val) => {
        let currentStepResults = this.state.stepResults;
        currentStepResults.step2 = val;
        this.setState({currentStep: '3', stepResults: currentStepResults});
    }

    complete = (val) => {
        let currentStepResults = this.state.stepResults;
        currentStepResults.step3 = 'entry complete';
        this.setState({complete: true});
    }

    prevStep1 = () => {
        this.setState({currentStep: '1'});
    }

    prevStep2 = () => {
        this.setState({currentStep: '2'});
    }

    incomplete = () => {
        this.setState({complete: false})
    }


    tabHeader = (num, txt) => {
    return  <span >
                <Badge count={num} style={{ backgroundColor: '#fff', color: '#999', boxShadow: '0 0 0 1px #d9d9d9 inset' }} />
                &nbsp;{txt}
            </span>
    }


    createEntry = () => {
        const userMoods = this.state.stepResults.step1; 
        const userNote = this.state.stepResults.step2.note;

        if(userMoods && userNote) {
            let moodArray = [];
                    moodArray = Object.keys(userMoods).map((keyName) => {
                        return (
                                { moodType: keyName, intensity: userMoods[keyName]}
                             )
                        });
            
                    const data = [{  user: this.props.userId, moods: moodArray, note: userNote }];

                    fetch(`${API_BASE_URL}/api/mood-entries`, { 
                        method: "POST",
                        headers: {
                            'Accept': 'application/json',
                            "Content-Type": "application/json"
                        },
                        body: JSON.stringify(data)
                    })
                        .then(function(response) { 
                            history.push('/mood-log')
                    })
                    .catch (
                        function(error) {
                        console.log(error);
                })
        } else {
            this.setState({ noData: true})
        }
    }



    render() { 

    const NoData = (props) => {
        return (
            <div className="noData-modal">
                <div className="noData-modal-container">
                    <h1>Mood or note data missing. Please try mood entry again. </h1>
                    <button onClick={ () => (this.noDataRedirect()) } className="again-btn">Start Again</button>
                </div>
            </div>
        )
    }

        return (
            <div className="tab-nav mood-nav">
                <Row type={'flex'} align={'center'} className={'m-t-l'} style={{width: '100vw', paddingTop: '4em'}}>
                    <Col span={24}>

                        <Tabs activeKey={this.state.currentStep}>

                            <TabPane  tab={this.tabHeader(1, 'Select Mood')} key="1" disabled={this.state.currentStep!=='1'}>

                                <MoodSelectComponent onNextClick={this.step2} onPrevClick={this.toDashboard}/>

                            </TabPane>

                            <TabPane tab={this.tabHeader(2, 'Add a note')} key="2" disabled={this.state.currentStep!=='2'}>

                                <NoteComponent onNextClick={this.step3} onPrevClick={this.prevStep1} props={this.state.stepResults}/>

                            </TabPane>

                            <TabPane tab={this.tabHeader(3, 'View and confirm')} key="3" disabled={this.state.currentStep!=='3'}>
                                
                                <MoodConfirmComponent onNextClick={this.createEntry} onPrevClick={this.prevStep2} props={this.state.stepResults}/>

                            </TabPane>
                        </Tabs>
                    </Col>
                </Row>
                {this.state.noData && <NoData />}
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

export default connect(mapStateToProps)(MoodNav);