import React from 'react'
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';
import { withRouter } from 'react-router-dom';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import axios from "axios";
import './Review.css';
import config from "./config.js"
import posed from 'react-pose';

const WaitingBox = posed.div({
    visible: {
      opacity: 1,
      applyAtStart: { display: 'inline-block'}
    },
    hidden: {
      opacity: 0,
      applyAtEnd: { display: 'none'}
    }
  });
  
  const FeedbackBox = posed.div({
    hidden: {
      applyAtEnd: { display: 'none'},
      opacity: 0,
    },
    visible: {
      applyAtStart: { display: 'block'},
      opacity: 1,
    },
  });

class Result extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            ready: false,
            id: this.props.match.params.id,
            reviewAreas: {},
            completeReview: {
                interest: '',
                learn: '',
                quality: '',
                quantity: '',
                problem: '',
                teamwork: '',
                dependability: '',
                supervision: '',
                reflection: '',
                resourcefulness: '',
                ethical: '',
                diversity: '',
                entre: '',
                written: '',
                oral: '',
                personal: ''
            }
        };
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange = name => event => {
        let newCompleteReview = this.state.completeReview;
        newCompleteReview[name] = event.target.value
        this.setState({ completeReview: newCompleteReview });
    };

    componentDidMount() {
        axios.get(config.envConfig.serverURL + "/api/submission/" + this.state.id).then((res) => {
            if (res.data.data){
                this.setState({ ready: true, reviewAreas: res.data.data.reviewAreas, completeReview: res.data.data.completeReview })
            } 
        });
    }

    render() {
        const id = this.state.id;
        return (
            <div className="backgroundDiv">
                <div className="MainDiv">
                <FeedbackBox pose={this.state.ready ? 'visible' : 'hidden'}>
                    <h1>Here is your feedback</h1>
                    <fieldset disabled={true}>
                        <div disabled className="reviewArea">
                            <FormLabel className={this.state.reviewAreas.interest ? '' : 'hidden'} component="legend">Interest in Work</FormLabel>
                            <RadioGroup
                                className={this.state.reviewAreas.interest ? '' : 'hidden'}
                                value={this.state.completeReview.interest}
                                onChange={this.handleChange('interest')}
                            >
                                <FormControlLabel value='1' control={<Radio />} label="Can Be Improved" />
                                <FormControlLabel value='2' control={<Radio />} label="Great Work" />
                                <FormControlLabel value='3' control={<Radio />} label="No Comment" />
                            </RadioGroup>
                            <FormLabel className={this.state.reviewAreas.learn ? '' : 'hidden'} component="legend">Ability to Learn</FormLabel>
                            <RadioGroup
                                className={this.state.reviewAreas.learn ? '' : 'hidden'}
                                value={this.state.completeReview.learn}
                                onChange={this.handleChange('learn')}
                            >
                                <FormControlLabel value='1' control={<Radio />} label="Can Be Improved" />
                                <FormControlLabel value='2' control={<Radio />} label="Great Work" />
                                <FormControlLabel value='3' control={<Radio />} label="No Comment" />
                            </RadioGroup>
                            <FormLabel className={this.state.reviewAreas.quality ? '' : 'hidden'} component="legend">Quality of Work</FormLabel>
                            <RadioGroup
                                className={this.state.reviewAreas.quality ? '' : 'hidden'}
                                value={this.state.completeReview.quality}
                                onChange={this.handleChange('quality')}
                            >
                                <FormControlLabel value='1' control={<Radio />} label="Can Be Improved" />
                                <FormControlLabel value='2' control={<Radio />} label="Great Work" />
                                <FormControlLabel value='3' control={<Radio />} label="No Comment" />
                            </RadioGroup>
                            <FormLabel className={this.state.reviewAreas.quantity ? '' : 'hidden'} component="legend">Quantity of Work</FormLabel>
                            <RadioGroup
                                className={this.state.reviewAreas.quantity ? '' : 'hidden'}
                                value={this.state.completeReview.quantity}
                                onChange={this.handleChange('quantity')}
                            >
                                <FormControlLabel value='1' control={<Radio />} label="Can Be Improved" />
                                <FormControlLabel value='2' control={<Radio />} label="Great Work" />
                                <FormControlLabel value='3' control={<Radio />} label="No Comment" />
                            </RadioGroup>
                            <FormLabel className={this.state.reviewAreas.problem ? '' : 'hidden'} component="legend">Problem Solving</FormLabel>
                            <RadioGroup
                                className={this.state.reviewAreas.problem ? '' : 'hidden'}
                                value={this.state.completeReview.problem}
                                onChange={this.handleChange('problem')}
                            >
                                <FormControlLabel value='1' control={<Radio />} label="Can Be Improved" />
                                <FormControlLabel value='2' control={<Radio />} label="Great Work" />
                                <FormControlLabel value='3' control={<Radio />} label="No Comment" />
                            </RadioGroup>
                            <FormLabel className={this.state.reviewAreas.teamwork ? '' : 'hidden'} component="legend">Teamwork</FormLabel>
                            <RadioGroup
                                className={this.state.reviewAreas.teamwork ? '' : 'hidden'}
                                value={this.state.completeReview.teamwork}
                                onChange={this.handleChange('teamwork')}
                            >
                                <FormControlLabel value='1' control={<Radio />} label="Can Be Improved" />
                                <FormControlLabel value='2' control={<Radio />} label="Great Work" />
                                <FormControlLabel value='3' control={<Radio />} label="No Comment" />
                            </RadioGroup>
                            <FormLabel className={this.state.reviewAreas.dependability ? '' : 'hidden'} component="legend">Dependability</FormLabel>
                            <RadioGroup
                                className={this.state.reviewAreas.dependability ? '' : 'hidden'}
                                value={this.state.completeReview.dependability}
                                onChange={this.handleChange('dependability')}
                            >
                                <FormControlLabel value='1' control={<Radio />} label="Can Be Improved" />
                                <FormControlLabel value='2' control={<Radio />} label="Great Work" />
                                <FormControlLabel value='3' control={<Radio />} label="No Comment" />
                            </RadioGroup>
                            <FormLabel className={this.state.reviewAreas.supervision ? '' : 'hidden'} component="legend">Response to Supervision</FormLabel>
                            <RadioGroup
                                className={this.state.reviewAreas.supervision ? '' : 'hidden'}
                                value={this.state.completeReview.supervision}
                                onChange={this.handleChange('supervision')}
                            >
                                <FormControlLabel value='1' control={<Radio />} label="Can Be Improved" />
                                <FormControlLabel value='2' control={<Radio />} label="Great Work" />
                                <FormControlLabel value='3' control={<Radio />} label="No Comment" />
                            </RadioGroup>
                            <FormLabel className={this.state.reviewAreas.reflection ? '' : 'hidden'} component="legend">Reflection</FormLabel>
                            <RadioGroup
                                className={this.state.reviewAreas.reflection ? '' : 'hidden'}
                                value={this.state.completeReview.reflection}
                                onChange={this.handleChange('reflection')}
                            >
                                <FormControlLabel value='1' control={<Radio />} label="Can Be Improved" />
                                <FormControlLabel value='2' control={<Radio />} label="Great Work" />
                                <FormControlLabel value='3' control={<Radio />} label="No Comment" />
                            </RadioGroup>
                            <FormLabel className={this.state.reviewAreas.resourcefulness ? '' : 'hidden'} component="legend">Resourcefulness</FormLabel>
                            <RadioGroup
                                className={this.state.reviewAreas.resourcefulness ? '' : 'hidden'}
                                value={this.state.completeReview.resourcefulness}
                                onChange={this.handleChange('resourcefulness')}
                            >
                                <FormControlLabel value='1' control={<Radio />} label="Can Be Improved" />
                                <FormControlLabel value='2' control={<Radio />} label="Great Work" />
                                <FormControlLabel value='3' control={<Radio />} label="No Comment" />
                            </RadioGroup>
                            <FormLabel className={this.state.reviewAreas.ethical ? '' : 'hidden'} component="legend">Ethical Behaviour</FormLabel>
                            <RadioGroup
                                className={this.state.reviewAreas.ethical ? '' : 'hidden'}
                                value={this.state.completeReview.ethical}
                                onChange={this.handleChange('ethical')}
                            >
                                <FormControlLabel value='1' control={<Radio />} label="Can Be Improved" />
                                <FormControlLabel value='2' control={<Radio />} label="Great Work" />
                                <FormControlLabel value='3' control={<Radio />} label="No Comment" />
                            </RadioGroup>
                            <FormLabel className={this.state.reviewAreas.diversity ? '' : 'hidden'} component="legend">Appreciation of Diversity</FormLabel>
                            <RadioGroup
                                className={this.state.reviewAreas.diversity ? '' : 'hidden'}
                                value={this.state.completeReview.diversity}
                                onChange={this.handleChange('diversity')}
                            >
                                <FormControlLabel value='1' control={<Radio />} label="Can Be Improved" />
                                <FormControlLabel value='2' control={<Radio />} label="Great Work" />
                                <FormControlLabel value='3' control={<Radio />} label="No Comment" />
                            </RadioGroup>
                            <FormLabel className={this.state.reviewAreas.entre ? '' : 'hidden'} component="legend">Entrepreneurial Orientation</FormLabel>
                            <RadioGroup
                                className={this.state.reviewAreas.entre ? '' : 'hidden'}
                                value={this.state.completeReview.entre}
                                onChange={this.handleChange('entre')}
                            >
                                <FormControlLabel value='1' control={<Radio />} label="Can Be Improved" />
                                <FormControlLabel value='2' control={<Radio />} label="Great Work" />
                                <FormControlLabel value='3' control={<Radio />} label="No Comment" />
                            </RadioGroup>
                            <FormLabel className={this.state.reviewAreas.written ? '' : 'hidden'} component="legend">Written Communication</FormLabel>
                            <RadioGroup
                                className={this.state.reviewAreas.written ? '' : 'hidden'}
                                value={this.state.completeReview.written}
                                onChange={this.handleChange('written')}
                            >
                                <FormControlLabel value='1' control={<Radio />} label="Can Be Improved" />
                                <FormControlLabel value='2' control={<Radio />} label="Great Work" />
                                <FormControlLabel value='3' control={<Radio />} label="No Comment" />
                            </RadioGroup>
                            <FormLabel className={this.state.reviewAreas.oral ? '' : 'hidden'} component="legend">Oral Communication</FormLabel>
                            <RadioGroup
                                className={this.state.reviewAreas.oral ? '' : 'hidden'}
                                value={this.state.completeReview.oral}
                                onChange={this.handleChange('oral')}
                            >
                                <FormControlLabel value='1' control={<Radio />} label="Can Be Improved" />
                                <FormControlLabel value='2' control={<Radio />} label="Great Work" />
                                <FormControlLabel value='3' control={<Radio />} label="No Comment" />
                            </RadioGroup>
                            <FormLabel className={this.state.reviewAreas.personal ? '' : 'hidden'} component="legend">Interpersonal Communication</FormLabel>
                            <RadioGroup
                                className={this.state.reviewAreas.personal ? '' : 'hidden'}
                                value={this.state.completeReview.personal}
                                onChange={this.handleChange('personal')}
                            >
                                <FormControlLabel value='1' control={<Radio />} label="Can Be Improved" />
                                <FormControlLabel value='2' control={<Radio />} label="Great Work" />
                                <FormControlLabel value='3' control={<Radio />} label="No Comment" />
                            </RadioGroup>

                        </div>
                    </fieldset>
                    </FeedbackBox>
                    <WaitingBox pose={!this.state.ready ? 'visible' : 'hidden'}>
                    <h1>Please comeback later</h1>
                    <p>Your employer has not completed the review.</p>
                    </WaitingBox>
                </div>
            </div>
        )
    }

}



export default Result;