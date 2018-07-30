import React from 'react';
import { Row, Col, Button } from 'antd';
import './app.css';
import './antd.css';
import './spacing.css';

class MoodConfirmComponent extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            data: {},
        };
    }

render() {
    const stepData = this.props.props.step1;
    const userMood = 
    Object.keys(stepData).map((keyName, keyIndex) => {
        return (
            <div key={keyName} id={keyIndex} className="mood-recap">
                <p>{keyName}<span className="intensity-recap">{stepData[keyName]}</span></p>
            </div>
        )
      });

    const userNote = this.props.props.step2.note;
    console.log(userNote);
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
                                <div className="user-note-confirm">
                                    {userNote}
                                </div>
                            </Col>
                        </Row>
            </div>
            )
        }
    }


export default MoodConfirmComponent;
