import React from 'react';
import {Row, Col, Button} from 'antd';
import { connect } from 'react-redux';
import history from './history';
import './app.css';
import './antd.css';
import './spacing.css';

export class NoteComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: {}
        };
    }

    componentDidMount() {

        if(!this.props.loggedIn || !this.props.userId) {
             history.push('/login') 
             console.log('Forbidden: Login Required')
        }
    }   

    onChangeNote = (val) => {
        let currentStepTwoData = this.state.data;
        currentStepTwoData.note = val.target.value;
        this.setState({data: currentStepTwoData});
    }

    render() {

        const UserMood = (props) => {

        const stepData = this.props.props.step1;

        if (stepData) {

            return Object.keys(stepData).map((keyName, keyIndex) => {
                return <div key={keyName} id={keyIndex} className="mood-recap">
                    <p>
                        {keyName}
                        <span className="intensity-recap">
                        <span>{stepData[keyName]}</span>
                        </span>
                    </p>
                </div>
            })

        } else {
            return null
        }
    }

        return (
            <div>
                <Row type={'flex'} align={'center'} className={'p-lg'}>
                    <Col style={{ marginTop: '-2em'}}>
                        <Button type={'primary'} ghost onClick={() => {
                            this.props.onPrevClick()
                        }}>Previous</Button>
                        &nbsp;
                        <Button type={'primary'} onClick={() => {
                            this.props.onNextClick(this.state.data)
                        }}>Next</Button>
                    </Col>
                </Row>
                <Row type={'flex'} align={'center'}>
                    <Col>
                        <div className="selected-moods-container">
                            <UserMood/>
                        </div>
                    </Col>
                </Row>
                <Row type={'flex'} align={'center'}>
                    <Col span={24} align={'center'}>

                        <textarea className="note-area" cols="52" rows="10" placeholder="Enter Notes..."
                                  onChange={this.onChangeNote}/>

                    </Col>
                </Row>
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

export default connect(mapStateToProps)(NoteComponent);