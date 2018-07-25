import React, { Component } from 'react';
import MoodSelectComponent from './mood-select-component';
import NoteComponent from './note-component';
import MoodConfirmComponent from './mood-confirm-component';
import { Tabs, Row, Col, Badge} from 'antd';
import {API_BASE_URL} from '../config';
import './antd.css';
import './spacing.css';

const TabPane = Tabs.TabPane;

export default class MoodNav extends Component {
    constructor(props){
        super(props);
        this.state = {
            currentStep: '1',
            stepResults: {},
            complete: false,
            redirect: false
        }
    }

  step2 = (val) => {
      let currentStepResults = this.state.stepResults;
      currentStepResults.step1 = val;
      this.setState({currentStep: '2', stepResults: currentStepResults});
  };

 step3 = (val) => {
    let currentStepResults = this.state.stepResults;
    currentStepResults.step2 = val;
    this.setState({currentStep: '3', stepResults: currentStepResults});
};

complete = (val) => {
    let currentStepResults = this.state.stepResults;
    currentStepResults.step3 = 'entry complete';
    this.setState({complete: true});
};

prevStep1 = () => {
    this.setState({currentStep: '1'});
};

prevStep2 = () => {
    this.setState({currentStep: '2'});
};


tabHeader = (num, txt) => {
    return <span>
                      <Badge count={num} style={{ backgroundColor: '#fff', color: '#999', boxShadow: '0 0 0 1px #d9d9d9 inset' }} />
        &nbsp;{txt}
                  </span>
};

currentDate = () => {

        let today = new Date();
        let dd = today.getDate();
        
        let mm = today.getMonth()+1; 
        const yyyy = today.getFullYear();
        if(dd<10) 
        {
            dd=`0${dd}`;
        } 
        
        if(mm<10) 
        {
            mm=`0${mm}`;
        } 
        today = `${mm}/${dd}/${yyyy}`;

        return (today)
    }

  render() {
//on completion this runs to grab the current state and piush to server to process then dump to db
    if (this.state.complete) {
        //replace with moment.js 
        // moment().format("dddd, MMMM Do YYYY, h:mm:ss a").toJSON()
      const createdOn = this.currentDate();
      const userMoods = this.state.stepResults.step1; 
      const userNote = this.state.stepResults.step2.note.toString();
      console.log(typeof createdOn);

      const moodArray = Object.keys(userMoods).map((keyName, keyIndex) => {
        return (
          keyName + ": " + userMoods[keyName]
        )
      })
        console.log(createdOn);
        console.log(moodArray);

        const entry = [
            {
                created: createdOn,
                mood: moodArray,
                note: userNote
            }
        ];

        return fetch(`${API_BASE_URL}/moods`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(entry)
        })
            .then(res => res.json())
            .catch(err => {
                console.log(err);
            })
        }

    return (
        <div className="tab-nav" style={{textAlign: 'center'}}>
            <Row type={'flex'} align={'center'} className={'m-t-l'} style={{width: '100vw', paddingTop: '4em'}}>
              <Col span={24}>

                  <Tabs activeKey={this.state.currentStep}>

                      <TabPane tab={this.tabHeader(1, 'Select Mood')} key="1" disabled={this.state.currentStep!=='1'}>

                          <MoodSelectComponent onNextClick={this.step2} onPrevClick={this.toDashboard}/>

                      </TabPane>

                      <TabPane tab={this.tabHeader(2, 'Add a note')} key="2" disabled={this.state.currentStep!=='2'}>

                          <NoteComponent onNextClick={this.step3} onPrevClick={this.prevStep1} props={this.state.stepResults}/>

                      </TabPane>

                      <TabPane tab={this.tabHeader(3, 'View and confirm')} key="3" disabled={this.state.currentStep!=='3'}>
                          
                        <MoodConfirmComponent onNextClick={this.complete} onPrevClick={this.prevStep2} props={this.state.stepResults}/>

                      </TabPane>
                  </Tabs>
              </Col>
          </Row>
      </div>
      )
    }
}
