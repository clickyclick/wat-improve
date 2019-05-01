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

//import './Create.css';

const styles = theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: 200,
  },
  dense: {
    marginTop: 19,
  },
  menu: {
    width: 200,
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
    console.log(this.state.amountSelected)
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

    axios.post(config.envConfig.serverURL +"/api/review", {
      name: name,
      message: message,
      reviewAreas: reviewAreas
    }).then((res) => {
      console.log(res);
      if (res.data.id) {
        this.setState({ created: true, id: res.data.id })
      }
    });
  };

  render() {
    console.log(config.envConfig.serverURL);
    console.log(this.state.id);
    return ([
      <div key="form" className="createMainDiv">
        <h1>Fill in your information</h1>
        <form className="createForm" autoComplete="off" onSubmit={this.handleSubmit}>
          <TextField
            required
            label="Your Name"
            className="input"
            value={this.state.name}
            onChange={this.handleChange('name')}>
          </TextField>
          <TextField
            label="Message to reviewer"
            className="input"
            value={this.state.message}
            onChange={this.handleChange('message')}>
          </TextField>
          <FormLabel component="legend">Which areas do you want feedback?</FormLabel>
          <FormGroup required>
            <FormControlLabel
              control={
                <Switch
                  checked={this.state.reviewAreas.interest}
                  onChange={this.handleToggle('interest')}
                />
              }
              label="Interest in Work"
            />
            <FormControlLabel
              control={
                <Switch
                  checked={this.state.reviewAreas.learn}
                  onChange={this.handleToggle('learn')}
                />
              }
              label="Ability to Learn"
            />
            <FormControlLabel
              control={
                <Switch
                  checked={this.state.reviewAreas.quality}
                  onChange={this.handleToggle('quality')}
                />
              }
              label="Quality of Work"
            />
            <FormControlLabel
              control={
                <Switch
                  checked={this.state.reviewAreas.quantity}
                  onChange={this.handleToggle('quantity')}
                />
              }
              label="Quantity of Work"
            />
            <FormControlLabel
              control={
                <Switch
                  checked={this.state.reviewAreas.problem}
                  onChange={this.handleToggle('problem')}
                />
              }
              label="Problem Solving"
            />
            <FormControlLabel
              control={
                <Switch
                  checked={this.state.reviewAreas.teamwork}
                  onChange={this.handleToggle('teamwork')}
                />
              }
              label="Teamwork"
            />
            <FormControlLabel
              control={
                <Switch
                  checked={this.state.reviewAreas.dependability}
                  onChange={this.handleToggle('dependability')}
                />
              }
              label="Dependability"
            />
            <FormControlLabel
              control={
                <Switch
                  checked={this.state.reviewAreas.supervision}
                  onChange={this.handleToggle('supervision')}
                />
              }
              label="Response to Supervision"
            />
            <FormControlLabel
              control={
                <Switch
                  checked={this.state.reviewAreas.reflection}
                  onChange={this.handleToggle('reflection')}
                />
              }
              label="Reflection"
            />
            <FormControlLabel
              control={
                <Switch
                  checked={this.state.reviewAreas.resourcefulness}
                  onChange={this.handleToggle('resourcefulness')}
                />
              }
              label="Resourcefulness"
            />
            <FormControlLabel
              control={
                <Switch
                  checked={this.state.reviewAreas.ethical}
                  onChange={this.handleToggle('ethical')}
                />
              }
              label="Ethical Behaviour"
            />
            <FormControlLabel
              control={
                <Switch
                  checked={this.state.reviewAreas.diversity}
                  onChange={this.handleToggle('diversity')}
                />
              }
              label="Appreciation of Diversity"
            />
            <FormControlLabel
              control={
                <Switch
                  checked={this.state.reviewAreas.entres}
                  onChange={this.handleToggle('entre')}
                />
              }
              label="Entrepreneurial Orientation"
            />
            <FormControlLabel
              control={
                <Switch
                  checked={this.state.reviewAreas.written}
                  onChange={this.handleToggle('written')}
                />
              }
              label="Written Communication"
            />
            <FormControlLabel
              control={
                <Switch
                  checked={this.state.reviewAreas.oral}
                  onChange={this.handleToggle('oral')}
                />
              }
              label="Oral Communication"
            />
            <FormControlLabel
              control={
                <Switch
                  checked={this.state.reviewAreas.personal}
                  onChange={this.handleToggle('personal')}
                />
              }
              label="Interpersonal Communication"
            />

          </FormGroup>
          <FormHelperText>Pick atleast one</FormHelperText>
          <Button type="submit" className="submitButton" >Submit</Button>
        </form>
      </div>,
      <div key="link" className="linkDiv">
        <h1>Send this to your employer:</h1>
        <EmployerLinkGen id={this.state.id} />
        <h1>Check your results here:</h1>
        <YourLinkGen id={this.state.id} />
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