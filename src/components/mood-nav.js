import React, { Component } from 'react';
import {Redirect} from 'react-router-dom';
import MoodSelectComponent from './mood-select-component';
import NoteComponent from './note-component';
import MoodConfirmComponent from './mood-confirm-component';
import { Tabs, Row, Col, Badge} from 'antd';
import './antd.css';
import './spacing.css';

const TabPane = Tabs.TabPane;

class MoodNav extends Component {

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

  render() {
   
    if (this.state.complete){

       return <Redirect to='/mood-log'/>
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
    );
  }
}

export default MoodNav;
