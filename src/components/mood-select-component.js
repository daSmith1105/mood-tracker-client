import React, { Component } from 'react';
import { Row, Col, Radio, Button } from 'antd';
import {Link} from 'react-router-dom';
const RadioGroup = Radio.Group;

class MoodSelectComponent extends Component {

    constructor(props){
        super(props);
        this.state = {
            data: {}
        };
    }

    onChangeHappy= (el) => {
        if (!el.target.value || el.target.value.keyname === 0) {
            this.setState({data: this.state.data});
        } else {
            let currentStepOneData = this.state.data;
            currentStepOneData.happy = el.target.value;
        this.setState({data: currentStepOneData});
        };
        console.log(this.state.data);
    };

    clearHappy = () => {
        let stateDataCopy = this.state.data;
        delete stateDataCopy.happy
        this.setState({ data: stateDataCopy })
        console.log(this.state.data);
    };

    onChangeSad = (el) => {
        if (!el.target.value || el.target.value.keyname === 0) {
            this.setState({data: this.state.data});
        } else {
            let currentStepOneData = this.state.data;
            currentStepOneData.sad = el.target.value;
        this.setState({data: currentStepOneData});
        }
        console.log(this.state.data);
    };

    clearSad = () => {
        let stateDataCopy = this.state.data;
        delete stateDataCopy.sad
        this.setState({ data: stateDataCopy })
        console.log(this.state.data);
    };

    onChangeExcited = (el) => {
         if (!el.target.value || el.target.value.keyname === 0) {
             this.setState({data: this.state.data});
         } else {
             let currentStepOneData = this.state.data;
             currentStepOneData.excited = el.target.value;
         this.setState({data: currentStepOneData});
         }
        console.log(this.state.data);
     };

     clearExcited = () => {
        let stateDataCopy = this.state.data;
        delete stateDataCopy.excited
        this.setState({ data: stateDataCopy })
        console.log(this.state.data);
    };

     onChangeGoofy = (el) => {
         if (!el.target.value || el.target.value.keyname === 0) {
             this.setState({data: this.state.data});
         } else {
             let currentStepOneData = this.state.data;
             currentStepOneData.goofy = el.target.value;
         this.setState({data: currentStepOneData});
         }
        console.log(this.state.data);
     };

     clearGoofy = () => {
        let stateDataCopy = this.state.data;
        delete stateDataCopy.goofy
        this.setState({ data: stateDataCopy })
        console.log(this.state.data);
    };

     onChangeMotivated = (el) => {
         if (!el.target.value || el.target.value.keyname === 0) {
             this.setState({data: this.state.data});
         } else {
             let currentStepOneData = this.state.data;
             currentStepOneData.motivated = el.target.value;
         this.setState({data: currentStepOneData});
         }
        console.log(this.state.data);
     };

     clearMotivated = () => {
        let stateDataCopy = this.state.data;
        delete stateDataCopy.motivated
        this.setState({ data: stateDataCopy })
        console.log(this.state.data);
    };

     onChangeConfused = (el) => {
         if (!el.target.value || el.target.value.keyname === 0) {
             this.setState({data: this.state.data});
         } else {
             let currentStepOneData = this.state.data;
             currentStepOneData.confused = el.target.value;
         this.setState({data: currentStepOneData});
         }
        console.log(this.state.data);
     };

     clearConfused = () => {
        let stateDataCopy = this.state.data;
        delete stateDataCopy.confused
        this.setState({ data: stateDataCopy })
        console.log(this.state.data);
    };

     
     onChangeRelieved = (el) => {
         if (!el.target.value || el.target.value.keyname === 0) {
             this.setState({data: this.state.data});
         } else {
             let currentStepOneData = this.state.data;
             currentStepOneData.relieved = el.target.value;
         this.setState({data: currentStepOneData});
         }
        console.log(this.state.data);
     };

     clearRelieved = () => {
        let stateDataCopy = this.state.data;
        delete stateDataCopy.relieved
        this.setState({ data: stateDataCopy })
        console.log(this.state.data);
    };

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
                                    <Radio onClick={this.clearHappy} defaultChecked>N/A</Radio>
                                    <Radio value={1} >1</Radio>
                                    <Radio value={2} >2</Radio>
                                    <Radio value={3} >3</Radio>
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
                                    <Radio onClick={this.clearSad} defaultChecked>N/A</Radio>
                                    <Radio value={1} >1</Radio>
                                    <Radio value={2} >2</Radio>
                                    <Radio value={3} >3</Radio>
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
                                    <Radio onClick={this.clearExcited} defaultChecked>N/A</Radio>
                                    <Radio value={1}>1</Radio>
                                    <Radio value={2}>2</Radio>
                                    <Radio value={3}>3</Radio>
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
                                    <Radio onClick={this.clearGoofy} defaultChecked>N/A</Radio>
                                    <Radio value={1}>1</Radio>
                                    <Radio value={2}>2</Radio>
                                    <Radio value={3}>3</Radio>
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
                                    <Radio onClick={this.clearMotivated} defaultChecked>N/A</Radio>
                                    <Radio value={1}>1</Radio>
                                    <Radio value={2}>2</Radio>
                                    <Radio value={3}>3</Radio>
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
                                    <Radio onClick={this.clearConfused} defaultChecked>N/A</Radio>
                                    <Radio value={1}>1</Radio>
                                    <Radio value={2}>2</Radio>
                                    <Radio value={3}>3</Radio>
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
                                    <Radio onClick={this.clearRelieved} defaultChecked>N/A</Radio>
                                    <Radio value={1}>1</Radio>
                                    <Radio value={2}>2</Radio>
                                    <Radio value={3}>3</Radio>
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
                                <RadioGroup onChange={this.onChangeSad}>
                                    <Radio onClick={this.clearRelieved} defaultChecked>N/A</Radio>
                                    <Radio value={1}>1</Radio>
                                    <Radio value={2}>2</Radio>
                                    <Radio value={3}>3</Radio>
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
                                <RadioGroup onChange={this.onChangeSad}>
                                    <Radio onClick={this.clearRelieved} defaultChecked>N/A</Radio>
                                    <Radio value={1}>1</Radio>
                                    <Radio value={2}>2</Radio>
                                    <Radio value={3}>3</Radio>
                                </RadioGroup>
                            </Col>
                       </Row>
                    </Col>

                    <Col span={24}>
                        <hr />
                    </Col>

                    <Col span={24}>
                        <Row type={'flex'} align={'center'}>
                            <Col span={6}>
                            <img src={require("../resources/anxious.png")} alt="anxious" className="mood-img"/>
                                <p className="mood-text">Anxious</p>
                            </Col>
                            <Col span={18}>
                                <p className="intensity-label">Intensity Level</p>
                                <RadioGroup onChange={this.onChangeSad}>
                                    <Radio onClick={this.clearRelieved} defaultChecked>N/A</Radio>
                                    <Radio value={1}>1</Radio>
                                    <Radio value={2}>2</Radio>
                                    <Radio value={3}>3</Radio>
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
                                <RadioGroup onChange={this.onChangeSad}>
                                    <Radio onClick={this.clearRelieved} defaultChecked>N/A</Radio>
                                    <Radio value={1}>1</Radio>
                                    <Radio value={2}>2</Radio>
                                    <Radio value={3}>3</Radio>
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
                                <RadioGroup onChange={this.onChangeSad}>
                                    <Radio onClick={this.clearRelieved} defaultChecked>N/A</Radio>
                                    <Radio value={1}>1</Radio>
                                    <Radio value={2}>2</Radio>
                                    <Radio value={3}>3</Radio>
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
                                <RadioGroup onChange={this.onChangeSad}>
                                    <Radio onClick={this.clearRelieved} defaultChecked>N/A</Radio>
                                    <Radio value={1}>1</Radio>
                                    <Radio value={2}>2</Radio>
                                    <Radio value={3}>3</Radio>
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
                                <RadioGroup onChange={this.onChangeSad}>
                                    <Radio onClick={this.clearRelieved} defaultChecked>N/A</Radio>
                                    <Radio value={1}>1</Radio>
                                    <Radio value={2}>2</Radio>
                                    <Radio value={3}>3</Radio>
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
                                <RadioGroup onChange={this.onChangeSad}>
                                    <Radio onClick={this.clearRelieved} defaultChecked>N/A</Radio>
                                    <Radio value={1}>1</Radio>
                                    <Radio value={2}>2</Radio>
                                    <Radio value={3}>3</Radio>
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
                                <RadioGroup onChange={this.onChangeSad}>
                                    <Radio onClick={this.clearRelieved} defaultChecked>N/A</Radio>
                                    <Radio value={1}>1</Radio>
                                    <Radio value={2}>2</Radio>
                                    <Radio value={3}>3</Radio>
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
                                <RadioGroup onChange={this.onChangeSad}>
                                    <Radio onClick={this.clearRelieved} defaultChecked>N/A</Radio>
                                    <Radio value={1}>1</Radio>
                                    <Radio value={2}>2</Radio>
                                    <Radio value={3}>3</Radio>
                                </RadioGroup>
                            </Col>
                       </Row>
                    </Col>

                    <Col span={24}>
                        <hr />
                    </Col>

                </Row>
            </div>
        );
    }
}

export default MoodSelectComponent;
