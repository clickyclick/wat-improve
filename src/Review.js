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

class Review extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            finished: false,
            id: this.props.match.params.id,
            name: '',
            message: '',
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
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }



    componentDidMount() {
        console.log(this.state.id);
        axios.get(config.envConfig.serverURL+"/api/review/" + this.state.id).then((res) => {
            console.log(res.data.data.name);
            if (res.data.data.reviewAreas && res.data.data.name) {
                let completeReview = {};
                for (var key in res.data.data.reviewAreas) {
                    if (res.data.data.reviewAreas[key]) {
                        completeReview[key] = '3'
                    }
                }
                this.setState({ name: res.data.data.name, message: res.data.data.message, reviewAreas: res.data.data.reviewAreas, completeReview: completeReview, finished: res.data.data.finished })
            }
        });
    }

    handleSubmit(event) {
        alert('A review was completed: ');
        this.completeReview();
        event.preventDefault();
    }

    completeReview = () => {
        let id = this.state.id;
        let reviewAreas = this.state.reviewAreas;
        let completeReview = this.state.completeReview;
        axios.post(config.envConfig.serverURL+"/api/submission", {
            id: id,
            reviewAreas: reviewAreas,
            completeReview: completeReview
        }).then((res) => {
            console.log(res);
            this.setState({ finished: true })

        });
    };

    handleChange = name => event => {
        let newCompleteReview = this.state.completeReview;
        newCompleteReview[name] = event.target.value
        this.setState({ completeReview: newCompleteReview });
    };

    render() {
        console.log(this.state.reviewAreas);
        const id = this.state.id;
        const name = this.state.name
        return (
            <div className="appMainDiv">
                <h1>Give {name} some Feedback</h1>
                <p>{id} Areas that should be focused on should be given the "Can Be Improved" option</p>
                <div className="reviewArea">
                <fieldset disabled={this.state.finished}>
                    <form className="reviewForm" autoComplete="off" onSubmit={this.handleSubmit}>
                       
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
                            <Button type="submit" className="submitButton" >Submit</Button>
                       
                    </form>
                    </fieldset>
                </div>
            </div>
        )
    }

}



export default Review