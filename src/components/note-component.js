import React from 'react';
import { Row, Col, Button } from 'antd';
import './app.css';
import './antd.css';
import './spacing.css';

class NoteComponent extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            data: {}
        };
    }

    onChangeNote = (val) => {
        // console.log(val);
        // console.log(val.target.value);
        let currentStepTwoData = this.state.data;
        currentStepTwoData.note = val.target.value;
        this.setState({data: currentStepTwoData});
        // console.log(this.state.data);
    };

render() {
    const stepData = this.props.props.step1;
    let userMood = '';
    if (stepData) {
        userMood = Object.keys(stepData).map((keyName, keyIndex) => {
            return (
                <div key={keyName} id={keyIndex} className="mood-recap">
                    <p>{keyName}<span className="intensity-recap">{stepData[keyName]}</span></p>
                </div>
            )
      });
    } else {
        userMood = () => {
            return (
                <div>
                </div>
            )
      }
    }

    return (
        <div>
        <Row type={'flex'} align={'center'} className={'p-lg'}>
                    <Col style={{ position: 'fixed', top: '9em'}}>
                    <Button type={'primary'} ghost onClick={() => {this.props.onPrevClick()}}>Previous</Button>
                        &nbsp;
                        <Button type={'primary'} onClick={() => {this.props.onNextClick(this.state.data)}}>Next</Button>
                    </Col>
                </Row>
                        <Row type={'flex'} align={'center'}>
                            <div className="selected-moods-container">
                                 {userMood}
                                 </div>
                        </Row>
                    <Row type={'flex'} align={'center'}>
                        <Col span={24} align={'center'}>

                            <textarea className="note-area" cols="52" rows="10" placeholder="Enter Notes..." onChange={this.onChangeNote}/>

                        </Col>
                    </Row>
        </div>
    )
}
}

export default NoteComponent;