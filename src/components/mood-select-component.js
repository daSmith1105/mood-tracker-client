import React, { Component } from 'react';
import { Row, Col, Radio, Divider, Button } from 'antd';
import {Link} from 'react-router-dom';
import _ from 'lodash';
const RadioGroup = Radio.Group;

class MoodSelectComponent extends Component {

    constructor(props){
        super(props);
        this.state = {
            data: {}
        };
    }

    clear = () => {
        const state = {
            data: _.omit(this.state.data, 'happy')
        };

        this.setState({data: state})

        console.log(this.state.data);
    }

    onChangeHappy= (el) => {
      //  console.log(val);
      //  console.log(val.target.value);

        if (!el.target.value || el.target.value.keyname === 0) {
            this.setState({data: this.state.data});
        } else {
            let currentStepOneData = this.state.data;
            currentStepOneData.happy = el.target.value;
        this.setState({data: currentStepOneData});
        };
        console.log(this.state.data);
    };

    onChangeSad = (el) => {
       // console.log(val);
       // console.log(val.target.value);
        if (!el.target.value || el.target.value.keyname === 0) {
            this.setState({data: this.state.data});
        } else {
            let currentStepOneData = this.state.data;
            currentStepOneData.sad = el.target.value;
        this.setState({data: currentStepOneData});
        }
        console.log(this.state.data);
    };

    onChangeExcited = (el) => {
        // console.log(val);
        // console.log(val.target.value);
         if (!el.target.value || el.target.value.keyname === 0) {
             this.setState({data: this.state.data});
         } else {
             let currentStepOneData = this.state.data;
             currentStepOneData.excited = el.target.value;
         this.setState({data: currentStepOneData});
         }
        // console.log(this.state.data);
     };

     onChangeGoofy = (el) => {
        // console.log(val);
        // console.log(val.target.value);
         if (!el.target.value || el.target.value.keyname === 0) {
             this.setState({data: this.state.data});
         } else {
             let currentStepOneData = this.state.data;
             currentStepOneData.goofy = el.target.value;
         this.setState({data: currentStepOneData});
         }
        // console.log(this.state.data);
     };

     onChangeMotivated = (el) => {
        // console.log(val);
        // console.log(val.target.value);
         if (!el.target.value || el.target.value.keyname === 0) {
             this.setState({data: this.state.data});
         } else {
             let currentStepOneData = this.state.data;
             currentStepOneData.motivated = el.target.value;
         this.setState({data: currentStepOneData});
         }
        // console.log(this.state.data);
     };

     onChangeConfused = (el) => {
        // console.log(val);
        // console.log(val.target.value);
         if (!el.target.value || el.target.value.keyname === 0) {
             this.setState({data: this.state.data});
         } else {
             let currentStepOneData = this.state.data;
             currentStepOneData.confused = el.target.value;
         this.setState({data: currentStepOneData});
         }
        // console.log(this.state.data);
     };

     
     onChangeRelieved = (el) => {
        // console.log(val);
        // console.log(val.target.value);
         if (!el.target.value || el.target.value.keyname === 0) {
             this.setState({data: this.state.data});
         } else {
             let currentStepOneData = this.state.data;
             currentStepOneData.relieved = el.target.value;
         this.setState({data: currentStepOneData});
         }
        // console.log(this.state.data);
     };
 
 

    render() {

        return (
            <div style={{textAlign: 'center', maxWidth: '600px', margin: 'auto'}}>
                <Row type={'flex'} align={'center'} className={'p-lg'}>
                    <Col style={{ position: 'fixed', top: '9em'}}>
                        <Link to='/dashboard'><Button type={'primary'} ghost>Back</Button></Link>
                        &nbsp;
                        <Button type={'primary'} onClick={() => {this.props.onNextClick(this.state.data)}}>Next</Button>
                    </Col>
                </Row>
                <Row type={'flex'} align={'center'} className={'p-md'}>
                    <Col span={24}>
                        <Row type={'flex'} align={'center'}>
                            <Col span={6}>
                                <img src={require("../resources/happy.png")} alt="happy" style={{height: '26px', width: '26px'}}/>
                                <p>Happy</p>
                            </Col>
                            <Col span={18}>
                                <RadioGroup onChange={this.onChangeHappy}>
                                    <Radio value={1} name="happy">1</Radio>
                                    <Radio value={2} name="happy">2</Radio>
                                    <Radio value={3} name="happy">3</Radio>
                                </RadioGroup>
                                <button onClick={() => {this.clear}}>N/A</button>
                            </Col>
                        </Row>
                        </Col>

                    <Col span={24}>
                        <Divider />
                    </Col>

                    <Col span={24}>
                        <Row type={'flex'} align={'center'}>
                            <Col span={6}>
                            <img src={require("../resources/sad.png")} alt="sad" style={{height: '26px', width: '26px'}}/>
                                <p>Sad</p>
                            </Col>
                            <Col span={18}>
                                <RadioGroup onChange={this.onChangeSad}>
                                    <Radio value={0}>N/A</Radio>
                                    <Radio value={1}>1</Radio>
                                    <Radio value={2}>2</Radio>
                                    <Radio value={3}>3</Radio>
                                </RadioGroup>
                            </Col>
                       </Row>
                    </Col>

                    <Col span={24}>
                        <Divider />
                    </Col>

                    <Col span={24}>
                        <Row type={'flex'} align={'center'}>
                            <Col span={6}>
                            <img src={require("../resources/excited.png")} alt="excited" style={{height: '26px', width: '26px'}}/>
                                <p>Excited</p>
                            </Col>
                            <Col span={18}>
                                <RadioGroup onChange={this.onChangeExcited}>
                                    <Radio value={0}>N/A</Radio>
                                    <Radio value={1}>1</Radio>
                                    <Radio value={2}>2</Radio>
                                    <Radio value={3}>3</Radio>
                                </RadioGroup>
                            </Col>
                       </Row>
                    </Col>

                    <Col span={24}>
                        <Divider />
                    </Col>

                    <Col span={24}>
                        <Row type={'flex'} align={'center'}>
                            <Col span={6}>
                            <img src={require("../resources/goofy.png")} alt="goofy" style={{height: '26px', width: '26px'}}/>
                                <p>Goofy</p>
                            </Col>
                            <Col span={18}>
                                <RadioGroup onChange={this.onChangeGoofy}>
                                    <Radio value={0}>N/A</Radio>
                                    <Radio value={1}>1</Radio>
                                    <Radio value={2}>2</Radio>
                                    <Radio value={3}>3</Radio>
                                </RadioGroup>
                            </Col>
                       </Row>
                    </Col>

                    <Col span={24}>
                        <Divider />
                    </Col>

                    <Col span={24}>
                        <Row type={'flex'} align={'center'}>
                            <Col span={6}>
                            <img src={require("../resources/motivated.png")} alt="motivated" style={{height: '26px', width: '26px'}}/>
                                <p>Motivated</p>
                            </Col>
                            <Col span={18}>
                                <RadioGroup onChange={this.onChangeMotivated}>
                                    <Radio value={0}>N/A</Radio>
                                    <Radio value={1}>1</Radio>
                                    <Radio value={2}>2</Radio>
                                    <Radio value={3}>3</Radio>
                                </RadioGroup>
                            </Col>
                       </Row>
                    </Col>

                    <Col span={24}>
                        <Divider />
                    </Col>

                    <Col span={24}>
                        <Row type={'flex'} align={'center'}>
                            <Col span={6}>
                            <img src={require("../resources/confused.png")} alt="confused" style={{height: '26px', width: '26px'}}/>
                                <p>Confused</p>
                            </Col>
                            <Col span={18}>
                                <RadioGroup onChange={this.onChangeConfused}>
                                    <Radio value={0}>N/A</Radio>
                                    <Radio value={1}>1</Radio>
                                    <Radio value={2}>2</Radio>
                                    <Radio value={3}>3</Radio>
                                </RadioGroup>
                            </Col>
                       </Row>
                    </Col>

                    <Col span={24}>
                        <Divider />
                    </Col>

                    <Col span={24}>
                        <Row type={'flex'} align={'center'}>
                            <Col span={6}>
                            <img src={require("../resources/relieved.png")} alt="relieved" style={{height: '26px', width: '26px'}}/>
                                <p>Relieved</p>
                            </Col>
                            <Col span={18}>
                                <RadioGroup onChange={this.onChangeRelieved}>
                                    <Radio value={0}>N/A</Radio>
                                    <Radio value={1}>1</Radio>
                                    <Radio value={2}>2</Radio>
                                    <Radio value={3}>3</Radio>
                                </RadioGroup>
                            </Col>
                       </Row>
                    </Col>

                    <Col span={24}>
                        <Divider />
                    </Col>

                    <Col span={24}>
                        <Row type={'flex'} align={'center'}>
                            <Col span={6}>
                            <img src={require("../resources/content.png")} alt="content" style={{height: '26px', width: '26px'}}/>
                                <p>Content</p>
                            </Col>
                            <Col span={18}>
                                <RadioGroup onChange={this.onChangeSad}>
                                    <Radio value={0}>N/A</Radio>
                                    <Radio value={1}>1</Radio>
                                    <Radio value={2}>2</Radio>
                                    <Radio value={3}>3</Radio>
                                </RadioGroup>
                            </Col>
                       </Row>
                    </Col>

                    <Col span={24}>
                        <Divider />
                    </Col>

                    <Col span={24}>
                        <Row type={'flex'} align={'center'}>
                            <Col span={6}>
                            <img src={require("../resources/hopeful.png")} alt="hopeful" style={{height: '26px', width: '26px'}}/>
                                <p>Hopeful</p>
                            </Col>
                            <Col span={18}>
                                <RadioGroup onChange={this.onChangeSad}>
                                    <Radio value={0}>N/A</Radio>
                                    <Radio value={1}>1</Radio>
                                    <Radio value={2}>2</Radio>
                                    <Radio value={3}>3</Radio>
                                </RadioGroup>
                            </Col>
                       </Row>
                    </Col>

                    <Col span={24}>
                        <Divider />
                    </Col>

                    <Col span={24}>
                        <Row type={'flex'} align={'center'}>
                            <Col span={6}>
                            <img src={require("../resources/anxious.png")} alt="anxious" style={{height: '26px', width: '26px'}}/>
                                <p>Anxious</p>
                            </Col>
                            <Col span={18}>
                                <RadioGroup onChange={this.onChangeSad}>
                                    <Radio value={0}>N/A</Radio>
                                    <Radio value={1}>1</Radio>
                                    <Radio value={2}>2</Radio>
                                    <Radio value={3}>3</Radio>
                                </RadioGroup>
                            </Col>
                       </Row>
                    </Col>
                    
                    <Col span={24}>
                        <Divider />
                    </Col>

                    <Col span={24}>
                        <Row type={'flex'} align={'center'}>
                            <Col span={6}>
                            <img src={require("../resources/blah.png")} alt="blah" style={{height: '26px', width: '26px'}}/>
                                <p>Blah</p>
                            </Col>
                            <Col span={18}>
                                <RadioGroup onChange={this.onChangeSad}>
                                    <Radio value={0}>N/A</Radio>
                                    <Radio value={1}>1</Radio>
                                    <Radio value={2}>2</Radio>
                                    <Radio value={3}>3</Radio>
                                </RadioGroup>
                            </Col>
                       </Row>
                    </Col>
                   
                    <Col span={24}>
                        <Divider />
                    </Col>

                    <Col span={24}>
                        <Row type={'flex'} align={'center'}>
                            <Col span={6}>
                            <img src={require("../resources/scared.png")} alt="scared" style={{height: '26px', width: '26px'}}/>
                                <p>Scared</p>
                            </Col>
                            <Col span={18}>
                                <RadioGroup onChange={this.onChangeSad}>
                                    <Radio value={0}>N/A</Radio>
                                    <Radio value={1}>1</Radio>
                                    <Radio value={2}>2</Radio>
                                    <Radio value={3}>3</Radio>
                                </RadioGroup>
                            </Col>
                       </Row>
                    </Col>
                    
                    <Col span={24}>
                        <Divider />
                    </Col>

                    <Col span={24}>
                        <Row type={'flex'} align={'center'}>
                            <Col span={6}>
                            <img src={require("../resources/tired.png")} alt="tired" style={{height: '26px', width: '26px'}}/>
                                <p>Tired</p>
                            </Col>
                            <Col span={18}>
                                <RadioGroup onChange={this.onChangeSad}>
                                    <Radio value={0}>N/A</Radio>
                                    <Radio value={1}>1</Radio>
                                    <Radio value={2}>2</Radio>
                                    <Radio value={3}>3</Radio>
                                </RadioGroup>
                            </Col>
                       </Row>
                    </Col>
                    
                    <Col span={24}>
                        <Divider />
                    </Col>

                    <Col span={24}>
                        <Row type={'flex'} align={'center'}>
                            <Col span={6}>
                            <img src={require("../resources/lonely.png")} alt="lonely" style={{height: '26px', width: '26px'}}/>
                                <p>Lonely</p>
                            </Col>
                            <Col span={18}>
                                <RadioGroup onChange={this.onChangeSad}>
                                    <Radio value={0}>N/A</Radio>
                                    <Radio value={1}>1</Radio>
                                    <Radio value={2}>2</Radio>
                                    <Radio value={3}>3</Radio>
                                </RadioGroup>
                            </Col>
                       </Row>
                    </Col>
                   
                    <Col span={24}>
                        <Divider />
                    </Col>

                    <Col span={24}>
                        <Row type={'flex'} align={'center'}>
                            <Col span={6}>
                            <img src={require("../resources/hurt.png")} alt="hurt" style={{height: '26px', width: '26px'}}/>
                                <p>Hurt</p>
                            </Col>
                            <Col span={18}>
                                <RadioGroup onChange={this.onChangeSad}>
                                    <Radio value={0}>N/A</Radio>
                                    <Radio value={1}>1</Radio>
                                    <Radio value={2}>2</Radio>
                                    <Radio value={3}>3</Radio>
                                </RadioGroup>
                            </Col>
                       </Row>
                    </Col>
                    
                    <Col span={24}>
                        <Divider />
                    </Col>

                    <Col span={24}>
                        <Row type={'flex'} align={'center'}>
                            <Col span={6}>
                            <img src={require("../resources/irritated.png")} alt="irritated" style={{height: '26px', width: '26px'}}/>
                                <p>Irritated</p>
                            </Col>
                            <Col span={18}>
                                <RadioGroup onChange={this.onChangeSad}>
                                    <Radio value={0}>N/A</Radio>
                                    <Radio value={1}>1</Radio>
                                    <Radio value={2}>2</Radio>
                                    <Radio value={3}>3</Radio>
                                </RadioGroup>
                            </Col>
                       </Row>
                    </Col>
                    
                    <Col span={24}>
                        <Divider />
                    </Col>

                    <Col span={24}>
                        <Row type={'flex'} align={'center'}>
                            <Col span={6}>
                            <img src={require("../resources/angry.png")} alt="happy" style={{height: '26px', width: '26px'}}/>
                                <p>Angry</p>
                            </Col>
                            <Col span={18}>
                                <RadioGroup onChange={this.onChangeSad}>
                                    <Radio value={0}>N/A</Radio>
                                    <Radio value={1}>1</Radio>
                                    <Radio value={2}>2</Radio>
                                    <Radio value={3}>3</Radio>
                                </RadioGroup>
                            </Col>
                       </Row>
                    </Col>

                    <Col span={24}>
                        <Divider />
                    </Col>

                </Row>
            </div>
        );
    }
}

export default MoodSelectComponent;
