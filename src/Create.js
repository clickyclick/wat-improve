import React from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import FormLabel from '@material-ui/core/FormLabel';
import FormControl from '@material-ui/core/FormControl';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormHelperText from '@material-ui/core/FormHelperText';
import Switch from '@material-ui/core/Switch';
import axios from "axios";
import config from "./config.js"
import posed from 'react-pose';

import './Create.css';

const LinkBox = posed.div({
  visible: {
    opacity: 1,
    applyAtStart: { display: 'inline-block'}
  },
  hidden: {
    opacity: 0,
    applyAtEnd: { display: 'none'}
  }
});

const FormBox = posed.div({
  hidden: {
    applyAtEnd: { display: 'none'},
    opacity: 0,
  },
  visible: {
    applyAtStart: { display: 'block'},
    opacity: 1,
  },
});

class Create extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      message: '',
      created: false,
      id: '',
      amountSelected: 12,
      reviewAreas: {
        interest: true,
        learn: true,
        quality: true,
        quantity: true,
        problem: true,
        teamwork: true,
        dependability: true,
        supervision: true,
        reflection: true,
        resourcefulness: true,
        ethical: false,
        diversity: false,
        entre: false,
        written: true,
        oral: true,
        personal: true
      }
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleToggle = this.handleToggle.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }


  handleChange = name => event => {
    this.setState({ [name]: event.target.value });
  };

  handleToggle = name => event => {
    if (this.state.amountSelected === 1) {
      event.preventDefault();
    } else {
      let newAmount;
      if (event.target.checked) {
        newAmount = this.state.amountSelected + 1;
      } else {
        newAmount = this.state.amountSelected - 1;
      }
      let newReviewAreas = this.state.reviewAreas;
      newReviewAreas[name] = event.target.checked;
      this.setState({ reviewAreas: newReviewAreas, amountSelected: newAmount });
    }

  };

  handleSubmit(event) {
    alert('A name was submitted: ' + this.state.name + this.state.message);
    this.addReview();
    event.preventDefault();
  }

  addReview = () => {
    let name = this.state.name;
    let message = this.state.message
    let reviewAreas = this.state.reviewAreas;

    axios.post(config.envConfig.serverURL + "/api/review", {
      name: name,
      message: message,
      reviewAreas: reviewAreas
    }).then((res) => {
      if (res.data.id) {
        this.setState({ created: true, id: res.data.id })
      }
    });
  };

  render() {
    return ([
      <div className="backgroundDiv">
      <div key="form" className="createMainDiv">
        <FormBox pose={!this.state.created ? 'visible' : 'hidden'}>
          <h1 className="title">Fill in your information</h1>
          <form className="createForm" autoComplete="off" onSubmit={this.handleSubmit}>
            <TextField
              required
              label="Your Name"
              className="inputFields"
              value={this.state.name}
              onChange={this.handleChange('name')}>
            </TextField>
            <TextField
              label="Message to reviewer"
              className="inputFields"
              value={this.state.message}
              onChange={this.handleChange('message')}>
            </TextField>
            <FormLabel className="formTitle" component="legend">Which areas do you want feedback?</FormLabel>
            <FormGroup required>
              <div className="optionsDiv">
                <FormControlLabel
                  className="formOption"
                  control={
                    <Switch
                      checked={this.state.reviewAreas.interest}
                      onChange={this.handleToggle('interest')}
                    />
                  }
                  label="Interest in Work"
                />
                <FormControlLabel
                  className="formOption"
                  control={
                    <Switch
                      checked={this.state.reviewAreas.learn}
                      onChange={this.handleToggle('learn')}
                    />
                  }
                  label="Ability to Learn"
                />
                <br></br>
                <FormControlLabel
                  className="formOption"
                  control={
                    <Switch
                      checked={this.state.reviewAreas.quality}
                      onChange={this.handleToggle('quality')}
                    />
                  }
                  label="Quality of Work"
                />
                <FormControlLabel
                  className="formOption"
                  control={
                    <Switch
                      checked={this.state.reviewAreas.quantity}
                      onChange={this.handleToggle('quantity')}
                    />
                  }
                  label="Quantity of Work"
                />
                <br></br>
                <FormControlLabel
                  className="formOption"
                  control={
                    <Switch
                      checked={this.state.reviewAreas.problem}
                      onChange={this.handleToggle('problem')}
                    />
                  }
                  label="Problem Solving"
                />
                <FormControlLabel
                  className="formOption"
                  control={
                    <Switch
                      checked={this.state.reviewAreas.teamwork}
                      onChange={this.handleToggle('teamwork')}
                    />
                  }
                  label="Teamwork"
                />
                <br></br>
                <FormControlLabel
                  className="formOption"
                  control={
                    <Switch
                      checked={this.state.reviewAreas.dependability}
                      onChange={this.handleToggle('dependability')}
                    />
                  }
                  label="Dependability"
                />
                <FormControlLabel
                  className="formOption"
                  control={
                    <Switch
                      checked={this.state.reviewAreas.supervision}
                      onChange={this.handleToggle('supervision')}
                    />
                  }
                  label="Response to Supervision"
                />
                <br></br>
                <FormControlLabel
                  className="formOption"
                  control={
                    <Switch
                      checked={this.state.reviewAreas.reflection}
                      onChange={this.handleToggle('reflection')}
                    />
                  }
                  label="Reflection"
                />
                <FormControlLabel
                  className="formOption"
                  control={
                    <Switch
                      checked={this.state.reviewAreas.resourcefulness}
                      onChange={this.handleToggle('resourcefulness')}
                    />
                  }
                  label="Resourcefulness"
                />
                <br></br>
                <FormControlLabel
                  className="formOption"
                  control={
                    <Switch
                      checked={this.state.reviewAreas.ethical}
                      onChange={this.handleToggle('ethical')}
                    />
                  }
                  label="Ethical Behaviour"
                />
                <FormControlLabel
                  className="formOption"
                  control={
                    <Switch
                      checked={this.state.reviewAreas.diversity}
                      onChange={this.handleToggle('diversity')}
                    />
                  }
                  label="Appreciation of Diversity"
                />
                <br></br>
                <FormControlLabel
                  className="formOption"
                  control={
                    <Switch
                      checked={this.state.reviewAreas.entres}
                      onChange={this.handleToggle('entre')}
                    />
                  }
                  label="Entrepreneurial Orientation"
                />
                <FormControlLabel
                  className="formOption"
                  control={
                    <Switch
                      checked={this.state.reviewAreas.written}
                      onChange={this.handleToggle('written')}
                    />
                  }
                  label="Written Communication"
                />
                <br></br>
                <FormControlLabel
                  className="formOption"
                  control={
                    <Switch
                      checked={this.state.reviewAreas.oral}
                      onChange={this.handleToggle('oral')}
                    />
                  }
                  label="Oral Communication"
                />
                <FormControlLabel
                  className="formOption"
                  control={
                    <Switch
                      checked={this.state.reviewAreas.personal}
                      onChange={this.handleToggle('personal')}
                    />
                  }
                  label="Interpersonal Communication"
                />
                <br></br>
                 <Button type="submit" className="submitButton" >Submit</Button>
              </div>
              
            </FormGroup>
           
          </form>
        </FormBox>
      </div>
      <div key="link" className="linkDiv">
        <LinkBox className="LinkBox"
          pose={this.state.created ? 'visible' : 'hidden'}>
          <h1>Send this to your employer:</h1>
          <EmployerLinkGen id={this.state.id} />
          <h1>Check your results here:</h1>
          <YourLinkGen id={this.state.id} />
        </LinkBox>
      </div>
      </div>
    ])
  }
}

function EmployerLinkGen(props) {
  return (
    <a href={"/review/" + props.id}>
      {config.envConfig.webURL}/review/{props.id}
    </a>
  )
};

function YourLinkGen(props) {
  return (
    <a href={"/result/" + props.id}>
      {config.envConfig.webURL}/result/{props.id}
    </a>
  )
};


export default Create;