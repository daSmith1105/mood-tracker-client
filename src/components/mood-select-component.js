import React, { Component } from 'react';
import { Row, Col, Radio, Button } from 'antd';
import {Link} from 'react-router-dom';
import history from './history';
import { connect } from 'react-redux';
const RadioGroup = Radio.Group;

export class MoodSelectComponent extends Component {

    constructor(props){
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

    onChangeHappy = (el) => {
        if (!el.target.value || el.target.value.keyname === 0) {
            this.setState({data: this.state.data});
        } else {
            let currentStepOneData = this.state.data;
            currentStepOneData.happy = el.target.value;
        this.setState({data: currentStepOneData});
        }
    }

    clearHappy = () => {
        let stateDataCopy = this.state.data;
        delete stateDataCopy.happy
        this.setState({ data: stateDataCopy })
    }

    onChangeSad = (el) => {
        if (!el.target.value || el.target.value.keyname === 0) {
            this.setState({data: this.state.data});
        } else {
            let currentStepOneData = this.state.data;
            currentStepOneData.sad = el.target.value;
        this.setState({data: currentStepOneData});
        }
    }

    clearSad = () => {
        let stateDataCopy = this.state.data;
        delete stateDataCopy.sad
        this.setState({ data: stateDataCopy })
    }

    onChangeExcited = (el) => {
         if (!el.target.value || el.target.value.keyname === 0) {
             this.setState({data: this.state.data});
         } else {
             let currentStepOneData = this.state.data;
             currentStepOneData.excited = el.target.value;
         this.setState({data: currentStepOneData});
         }
     }

     clearExcited = () => {
        let stateDataCopy = this.state.data;
        delete stateDataCopy.excited
        this.setState({ data: stateDataCopy })
    }

     onChangeGoofy = (el) => {
         if (!el.target.value || el.target.value.keyname === 0) {
             this.setState({data: this.state.data});
         } else {
             let currentStepOneData = this.state.data;
             currentStepOneData.goofy = el.target.value;
         this.setState({data: currentStepOneData});
         }
     }

     clearGoofy = () => {
        let stateDataCopy = this.state.data;
        delete stateDataCopy.goofy
        this.setState({ data: stateDataCopy })
    }

     onChangeMotivated = (el) => {
         if (!el.target.value || el.target.value.keyname === 0) {
             this.setState({data: this.state.data});
         } else {
             let currentStepOneData = this.state.data;
             currentStepOneData.motivated = el.target.value;
         this.setState({data: currentStepOneData});
         }
     }

     clearMotivated = () => {
        let stateDataCopy = this.state.data;
        delete stateDataCopy.motivated
        this.setState({ data: stateDataCopy })
    };

     onChangeConfused = (el) => {
         if (!el.target.value || el.target.value.keyname === 0) {
             this.setState({data: this.state.data});
         } else {
             let currentStepOneData = this.state.data;
             currentStepOneData.confused = el.target.value;
         this.setState({data: currentStepOneData});
         }
     }

     clearConfused = () => {
        let stateDataCopy = this.state.data;
        delete stateDataCopy.confused
        this.setState({ data: stateDataCopy })
    }

     onChangeRelieved = (el) => {
         if (!el.target.value || el.target.value.keyname === 0) {
             this.setState({data: this.state.data});
         } else {
             let currentStepOneData = this.state.data;
             currentStepOneData.relieved = el.target.value;
         this.setState({data: currentStepOneData});
         }
     }

     clearRelieved = () => {
        let stateDataCopy = this.state.data;
        delete stateDataCopy.relieved
        this.setState({ data: stateDataCopy })
    }

    onChangeContent= (el) => {
        if (!el.target.value || el.target.value.keyname === 0) {
            this.setState({data: this.state.data});
        } else {
            let currentStepOneData = this.state.data;
            currentStepOneData.content = el.target.value;
        this.setState({data: currentStepOneData});
        }
    }

    clearContent= () => {
        let stateDataCopy = this.state.data;
        delete stateDataCopy.content
        this.setState({ data: stateDataCopy })
    }

    onChangeHopeful= (el) => {
        if (!el.target.value || el.target.value.keyname === 0) {
            this.setState({data: this.state.data});
        } else {
            let currentStepOneData = this.state.data;
            currentStepOneData.hopeful = el.target.value;
        this.setState({data: currentStepOneData});
        }
    }

    clearHopeful = () => {
        let stateDataCopy = this.state.data;
        delete stateDataCopy.hopeful
        this.setState({ data: stateDataCopy })
    }

    onChangeAnxious = (el) => {
        if (!el.target.value || el.target.value.keyname === 0) {
            this.setState({data: this.state.data});
        } else {
            let currentStepOneData = this.state.data;
            currentStepOneData.anxious = el.target.value;
        this.setState({data: currentStepOneData});
        }
    }

    clearAnxious = () => {
        let stateDataCopy = this.state.data;
        delete stateDataCopy.anxious
        this.setState({ data: stateDataCopy })
    }

    onChangeBlah = (el) => {
        if (!el.target.value || el.target.value.keyname === 0) {
            this.setState({data: this.state.data});
        } else {
            let currentStepOneData = this.state.data;
            currentStepOneData.blah = el.target.value;
        this.setState({data: currentStepOneData});
        }
    }

    clearBlah = () => {
        let stateDataCopy = this.state.data;
        delete stateDataCopy.blah
        this.setState({ data: stateDataCopy })
    }

    onChangeScared = (el) => {
        if (!el.target.value || el.target.value.keyname === 0) {
            this.setState({data: this.state.data});
        } else {
            let currentStepOneData = this.state.data;
            currentStepOneData.scared = el.target.value;
        this.setState({data: currentStepOneData});
        }
    }

    clearScared = () => {
        let stateDataCopy = this.state.data;
        delete stateDataCopy.scared
        this.setState({ data: stateDataCopy })
    }

    onChangeTired = (el) => {
        if (!el.target.value || el.target.value.keyname === 0) {
            this.setState({data: this.state.data});
        } else {
            let currentStepOneData = this.state.data;
            currentStepOneData.tired= el.target.value;
        this.setState({data: currentStepOneData});
        }
    }

    clearTired = () => {
        let stateDataCopy = this.state.data;
        delete stateDataCopy.tired
        this.setState({ data: stateDataCopy })
    }

    onChangeLonely= (el) => {
        if (!el.target.value || el.target.value.keyname === 0) {
            this.setState({data: this.state.data});
        } else {
            let currentStepOneData = this.state.data;
            currentStepOneData.lonely = el.target.value;
        this.setState({data: currentStepOneData});
        }
    }

    clearLonely= () => {
        let stateDataCopy = this.state.data;
        delete stateDataCopy.lonely
        this.setState({ data: stateDataCopy })
    }

    onChangeHurt = (el) => {
        if (!el.target.value || el.target.value.keyname === 0) {
            this.setState({data: this.state.data});
        } else {
            let currentStepOneData = this.state.data;
            currentStepOneData.hurt = el.target.value;
        this.setState({data: currentStepOneData});
        }
    }

    clearHurt = () => {
        let stateDataCopy = this.state.data;
        delete stateDataCopy.hurt
        this.setState({ data: stateDataCopy })
    }

    onChangeIrritated = (el) => {
        if (!el.target.value || el.target.value.keyname === 0) {
            this.setState({data: this.state.data});
        } else {
            let currentStepOneData = this.state.data;
            currentStepOneData.irritated= el.target.value;
        this.setState({data: currentStepOneData});
        }
    }

    clearIrritated = () => {
        let stateDataCopy = this.state.data;
        delete stateDataCopy.irritated
        this.setState({ data: stateDataCopy })
    }

    onChangeAngry = (el) => {
        if (!el.target.value || el.target.value.keyname === 0) {
            this.setState({data: this.state.data});
        } else {
            let currentStepOneData = this.state.data;
            currentStepOneData.angry = el.target.value;
        this.setState({data: currentStepOneData});
        }
    }

    clearAngry = () => {
        let stateDataCopy = this.state.data;
        delete stateDataCopy.angry
        this.setState({ data: stateDataCopy })
    }


    render() {
        
        return (
            <div className="mood-select-container">
                <Row type={'flex'} align={'center'} className={'p-lg'}>
                    <Col style={{ marginTop: '-2em'}}>
                        <Link to='/dashboard' className="ghost-button"><Button className="ghost-button" type={'primary'} ghost>Back</Button></Link>
                        &nbsp;
                        <Button className="primary-button"type={'primary'} onClick={() => {this.props.onNextClick(this.state.data)}}>Next</Button>
                    </Col>
                </Row>
                
                <Row type={'flex'} align={'center'} className={'p-md'}>
                
                    <Col span={24} className="mood-choice-container"> 
                        <Row type={'flex'} align={'center'}>
                            <Col span={6}>
                                <img src={require("../resources/happy.png")} alt="happy" className="mood-img"/>
                                <p className="mood-text">Happy</p>
                            </Col>
                            <Col span={18}>
                                <p className="intensity-label">Intensity Level</p>
                                <RadioGroup onChange={this.onChangeHappy}>
                                    <Radio onClick={this.clearHappy} defaultChecked>
                                        <span className="bold">N/A</span>
                                    </Radio>
                                    <Radio value={1} >
                                        <span className="bold">1</span>
                                    </Radio>
                                    <Radio value={2} >
                                        <span className="bold">2</span>
                                    </Radio>
                                    <Radio value={3} >
                                        <span className="bold">3</span>
                                    </Radio>
                                </RadioGroup>
                            </Col>
                        </Row>
                    </Col>

                    <Col span={24}>
                        <hr />
                    </Col>

                    <Col span={24} className="mood-choice-container">
                        <Row type={'flex'} align={'center'}>
                            <Col span={6}>
                            <img src={require("../resources/sad.png")} alt="sad" className="mood-img"/>
                                <p className="mood-text">Sad</p>
                            </Col>
                            <Col span={18}>
                                <p className="intensity-label">Intensity Level</p>
                                <RadioGroup onChange={this.onChangeSad}>
                                    <Radio onClick={this.clearSad} defaultChecked>
                                        <span className="bold">N/A</span>
                                    </Radio>
                                    <Radio value={1} >
                                        <span className="bold">1</span>
                                    </Radio>
                                    <Radio value={2} >
                                        <span className="bold">2</span>
                                    </Radio>
                                    <Radio value={3} >
                                        <span className="bold">3</span>
                                    </Radio>
                                </RadioGroup>
                            </Col>
                       </Row>
                    </Col>

                    <Col span={24}>
                        <hr />
                    </Col>

                    <Col span={24} className="mood-choice-container">
                        <Row type={'flex'} align={'center'}>
                            <Col span={6}>
                            <img src={require("../resources/excited.png")} alt="excited" className="mood-img"/>
                                <p className="mood-text">Excited</p>
                            </Col>
                            <Col span={18}>
                                <p className="intensity-label">Intensity Level</p>
                                <RadioGroup onChange={this.onChangeExcited}>
                                    <Radio onClick={this.clearExcited} defaultChecked>
                                        <span className="bold">N/A</span>
                                    </Radio>
                                    <Radio value={1} >
                                        <span className="bold">1</span>
                                    </Radio>
                                    <Radio value={2} >
                                        <span className="bold">2</span>
                                    </Radio>
                                    <Radio value={3} >
                                        <span className="bold">3</span>
                                    </Radio>
                                </RadioGroup>
                            </Col>
                       </Row>
                    </Col>

                    <Col span={24}>
                        <hr />
                    </Col>

                    <Col span={24} className="mood-choice-container">
                        <Row type={'flex'} align={'center'}>
                            <Col span={6}>
                            <img src={require("../resources/goofy.png")} alt="goofy" className="mood-img"/>
                                <p className="mood-text">Goofy</p>
                            </Col>
                            <Col span={18}>
                                <p className="intensity-label">Intensity Level</p>
                                <RadioGroup onChange={this.onChangeGoofy}>
                                    <Radio onClick={this.clearGoofy} defaultChecked>
                                        <span className="bold">N/A</span>
                                    </Radio>
                                    <Radio value={1} >
                                        <span className="bold">1</span>
                                    </Radio>
                                    <Radio value={2} >
                                        <span className="bold">2</span>
                                    </Radio>
                                    <Radio value={3} >
                                        <span className="bold">3</span>
                                    </Radio>
                                </RadioGroup>
                            </Col>
                       </Row>
                    </Col>

                    <Col span={24}>
                        <hr />
                    </Col>

                    <Col span={24} className="mood-choice-container">
                        <Row type={'flex'} align={'center'}>
                            <Col span={6}>
                            <img src={require("../resources/motivated.png")} alt="motivated" className="mood-img"/>
                                <p className="mood-text">Motivated</p>
                            </Col>
                            <Col span={18}>
                                <p className="intensity-label">Intensity Level</p>
                                <RadioGroup onChange={this.onChangeMotivated}>
                                    <Radio onClick={this.clearMotivated} defaultChecked>
                                        <span className="bold">N/A</span>
                                    </Radio>
                                    <Radio value={1} >
                                        <span className="bold">1</span>
                                    </Radio>
                                    <Radio value={2} >
                                        <span className="bold">2</span>
                                    </Radio>
                                    <Radio value={3} >
                                        <span className="bold">3</span>
                                    </Radio>
                                </RadioGroup>
                            </Col>
                       </Row>
                    </Col>

                    <Col span={24}>
                        <hr />
                    </Col>

                    <Col span={24} className="mood-choice-container">
                        <Row type={'flex'} align={'center'}>
                            <Col span={6}>
                            <img src={require("../resources/confused.png")} alt="confused" className="mood-img"/>
                                <p className="mood-text">Confused</p>
                            </Col>
                            <Col span={18}>
                                <p className="intensity-label">Intensity Level</p>
                                <RadioGroup onChange={this.onChangeConfused}>
                                    <Radio onClick={this.clearConfused} defaultChecked>
                                        <span className="bold">N/A</span>
                                    </Radio>
                                    <Radio value={1} >
                                        <span className="bold">1</span>
                                    </Radio>
                                    <Radio value={2} >
                                        <span className="bold">2</span>
                                    </Radio>
                                    <Radio value={3} >
                                        <span className="bold">3</span>
                                    </Radio>
                                </RadioGroup>
                            </Col>
                       </Row>
                    </Col>

                    <Col span={24}>
                        <hr />
                    </Col>

                    <Col span={24} className="mood-choice-container">
                        <Row type={'flex'} align={'center'}>
                            <Col span={6}>
                            <img src={require("../resources/relieved.png")} alt="relieved" className="mood-img"/>
                                <p className="mood-text">Relieved</p>
                            </Col>
                            <Col span={18}>
                                <p className="intensity-label">Intensity Level</p>
                                <RadioGroup onChange={this.onChangeRelieved}>
                                    <Radio onClick={this.clearRelieved} defaultChecked>
                                        <span className="bold">N/A</span>
                                    </Radio>
                                    <Radio value={1} >
                                        <span className="bold">1</span>
                                    </Radio>
                                    <Radio value={2} >
                                        <span className="bold">2</span>
                                    </Radio>
                                    <Radio value={3} >
                                        <span className="bold">3</span>
                                    </Radio>
                                </RadioGroup>
                            </Col>
                       </Row>
                    </Col>

                    <Col span={24}>
                        <hr />
                    </Col>

                    <Col span={24} className="mood-choice-container">
                        <Row type={'flex'} align={'center'}>
                            <Col span={6}>
                            <img src={require("../resources/content.png")} alt="content" className="mood-img"/>
                                <p className="mood-text">Content</p>
                            </Col>
                            <Col span={18}>
                                <p className="intensity-label">Intensity Level</p>
                                <RadioGroup onChange={this.onChangeContent}>
                                    <Radio onClick={this.clearContent} defaultChecked>
                                        <span className="bold">N/A</span>
                                    </Radio>
                                    <Radio value={1} >
                                        <span className="bold">1</span>
                                    </Radio>
                                    <Radio value={2} >
                                        <span className="bold">2</span>
                                    </Radio>
                                    <Radio value={3} >
                                        <span className="bold">3</span>
                                    </Radio>
                                </RadioGroup>
                            </Col>
                       </Row>
                    </Col>

                    <Col span={24}>
                        <hr />
                    </Col>

                    <Col span={24} className="mood-choice-container">
                        <Row type={'flex'} align={'center'}>
                            <Col span={6}>
                            <img src={require("../resources/hopeful.png")} alt="hopeful" className="mood-img"/>
                                <p className="mood-text">Hopeful</p>
                            </Col>
                            <Col span={18}>
                                <p className="intensity-label">Intensity Level</p>
                                <RadioGroup onChange={this.onChangeHopeful}>
                                    <Radio onClick={this.clearHopeful} defaultChecked>
                                        <span className="bold">N/A</span>
                                    </Radio>
                                    <Radio value={1} >
                                        <span className="bold">1</span>
                                    </Radio>
                                    <Radio value={2} >
                                        <span className="bold">2</span>
                                    </Radio>
                                    <Radio value={3} >
                                        <span className="bold">3</span>
                                    </Radio>
                                </RadioGroup>
                            </Col>
                       </Row>
                    </Col>

                    <Col span={24}>
                        <hr />
                    </Col>

                    <Col span={24} className="mood-choice-container">
                        <Row type={'flex'} align={'center'}>
                            <Col span={6}>
                            <img src={require("../resources/anxious.png")} alt="anxious" className="mood-img"/>
                                <p className="mood-text">Anxious</p>
                            </Col>
                            <Col span={18}>
                                <p className="intensity-label">Intensity Level</p>
                                <RadioGroup onChange={this.onChangeAnxious}>
                                    <Radio onClick={this.clearAnxious} defaultChecked>
                                        <span className="bold">N/A</span>
                                    </Radio>
                                    <Radio value={1} >
                                        <span className="bold">1</span>
                                    </Radio>
                                    <Radio value={2} >
                                        <span className="bold">2</span>
                                    </Radio>
                                    <Radio value={3} >
                                        <span className="bold">3</span>
                                    </Radio>
                                </RadioGroup>
                            </Col>
                       </Row>
                    </Col>
                    
                    <Col span={24}>
                        <hr />
                    </Col>

                    <Col span={24} className="mood-choice-container">
                        <Row type={'flex'} align={'center'}>
                            <Col span={6}>
                            <img src={require("../resources/blah.png")} alt="blah" className="mood-img"/>
                                <p className="mood-text">Blah</p>
                            </Col>
                            <Col span={18}>
                                <p className="intensity-label">Intensity Level</p>
                                <RadioGroup onChange={this.onChangeBlah}>
                                    <Radio onClick={this.clearBlah} defaultChecked>
                                        <span className="bold">N/A</span>
                                    </Radio>
                                    <Radio value={1} >
                                        <span className="bold">1</span>
                                    </Radio>
                                    <Radio value={2} >
                                        <span className="bold">2</span>
                                    </Radio>
                                    <Radio value={3} >
                                        <span className="bold">3</span>
                                    </Radio>
                                </RadioGroup>
                            </Col>
                       </Row>
                    </Col>
                   
                    <Col span={24}>
                        <hr />
                    </Col>

                    <Col span={24} className="mood-choice-container">
                        <Row type={'flex'} align={'center'}>
                            <Col span={6}>
                            <img src={require("../resources/scared.png")} alt="scared" className="mood-img"/>
                                <p className="mood-text">Scared</p>
                            </Col>
                            <Col span={18}>
                                <p className="intensity-label">Intensity Level</p>
                                <RadioGroup onChange={this.onChangeScared}>
                                    <Radio onClick={this.clearScared} defaultChecked>
                                        <span className="bold">N/A</span>
                                    </Radio>
                                    <Radio value={1} >
                                        <span className="bold">1</span>
                                    </Radio>
                                    <Radio value={2} >
                                        <span className="bold">2</span>
                                    </Radio>
                                    <Radio value={3} >
                                        <span className="bold">3</span>
                                    </Radio>
                                </RadioGroup>
                            </Col>
                       </Row>
                    </Col>
                    
                    <Col span={24}>
                        <hr />
                    </Col>

                    <Col span={24} className="mood-choice-container">
                        <Row type={'flex'} align={'center'}>
                            <Col span={6}>
                            <img src={require("../resources/tired.png")} alt="tired" className="mood-img"/>
                                <p className="mood-text">Tired</p>
                            </Col>
                            <Col span={18}>
                                <p className="intensity-label">Intensity Level</p>
                                <RadioGroup onChange={this.onChangeTired}>
                                    <Radio onClick={this.clearTired} defaultChecked>
                                        <span className="bold">N/A</span>
                                    </Radio>
                                    <Radio value={1} >
                                        <span className="bold">1</span>
                                    </Radio>
                                    <Radio value={2} >
                                        <span className="bold">2</span>
                                    </Radio>
                                    <Radio value={3} >
                                        <span className="bold">3</span>
                                    </Radio>
                                </RadioGroup>
                            </Col>
                       </Row>
                    </Col>
                    
                    <Col span={24}>
                        <hr />
                    </Col>

                    <Col span={24} className="mood-choice-container">
                        <Row type={'flex'} align={'center'}>
                            <Col span={6}>
                            <img src={require("../resources/lonely.png")} alt="lonely" className="mood-img"/>
                                <p className="mood-text">Lonely</p>
                            </Col>
                            <Col span={18}>
                                <p className="intensity-label">Intensity Level</p>
                                <RadioGroup onChange={this.onChangeLonely}>
                                    <Radio onClick={this.clearLonely} defaultChecked>
                                        <span className="bold">N/A</span>
                                    </Radio>
                                    <Radio value={1} >
                                        <span className="bold">1</span>
                                    </Radio>
                                    <Radio value={2} >
                                        <span className="bold">2</span>
                                    </Radio>
                                    <Radio value={3} >
                                        <span className="bold">3</span>
                                    </Radio>
                                </RadioGroup>
                            </Col>
                       </Row>
                    </Col>
                   
                    <Col span={24}>
                        <hr />
                    </Col>

                    <Col span={24} className="mood-choice-container">
                        <Row type={'flex'} align={'center'}>
                            <Col span={6}>
                            <img src={require("../resources/hurt.png")} alt="hurt" className="mood-img"/>
                                <p className="mood-text">Hurt</p>
                            </Col>
                            <Col span={18}>
                                <p className="intensity-label">Intensity Level</p>
                                <RadioGroup onChange={this.onChangeHurt}>
                                    <Radio onClick={this.clearHurt} defaultChecked>
                                        <span className="bold">N/A</span>
                                    </Radio>
                                    <Radio value={1} >
                                        <span className="bold">1</span>
                                    </Radio>
                                    <Radio value={2} >
                                        <span className="bold">2</span>
                                    </Radio>
                                    <Radio value={3} >
                                        <span className="bold">3</span>
                                    </Radio>
                                </RadioGroup>
                            </Col>
                       </Row>
                    </Col>
                    
                    <Col span={24}>
                        <hr />
                    </Col>

                    <Col span={24} className="mood-choice-container">
                        <Row type={'flex'} align={'center'}>
                            <Col span={6}>
                            <img src={require("../resources/irritated.png")} alt="irritated" className="mood-img"/>
                                <p className="mood-text">Irritated</p>
                            </Col>
                            <Col span={18}>
                                <p className="intensity-label">Intensity Level</p>
                                <RadioGroup onChange={this.onChangeIrritated}>
                                    <Radio onClick={this.clearIrritated} defaultChecked>
                                        <span className="bold">N/A</span>
                                    </Radio>
                                    <Radio value={1} >
                                        <span className="bold">1</span>
                                    </Radio>
                                    <Radio value={2} >
                                        <span className="bold">2</span>
                                    </Radio>
                                    <Radio value={3} >
                                        <span className="bold">3</span>
                                    </Radio>
                                </RadioGroup>
                            </Col>
                       </Row>
                    </Col>
                    
                    <Col span={24}>
                        <hr />
                    </Col>

                    <Col span={24} className="mood-choice-container">
                        <Row type={'flex'} align={'center'}>
                            <Col span={6}>
                            <img src={require("../resources/angry.png")} alt="angry" className="mood-img"/>
                                <p className="mood-text">Angry</p>
                            </Col>
                            <Col span={18}>
                                <p className="intensity-label">Intensity Level</p>
                                <RadioGroup onChange={this.onChangeAngry}>
                                    <Radio onClick={this.clearAngry} defaultChecked>
                                        <span className="bold">N/A</span>
                                    </Radio>
                                    <Radio value={1} >
                                        <span className="bold">1</span>
                                    </Radio>
                                    <Radio value={2} >
                                        <span className="bold">2</span>
                                    </Radio>
                                    <Radio value={3} >
                                        <span className="bold">3</span>
                                    </Radio>
                                </RadioGroup>
                            </Col>
                       </Row>
                    </Col>

                    <Col span={24}>
                        <hr />
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

export default connect(mapStateToProps)(MoodSelectComponent);