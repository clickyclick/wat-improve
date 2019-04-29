import React from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Checkbox from '@material-ui/core/Checkbox';

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
      message: ''
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }


  handleChange = name => event => {
    this.setState({ [name]: event.target.value });
  };

  handleSubmit(event) {
    alert('A name was submitted: ' + this.state.name + this.state.message);
    event.preventDefault();
  }

  render() {
    return (
      <div className="createMainDiv">
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
          <Button type="submit" className="submitButton" >Submit</Button>
        </form>
      </div>
    )
  }
}


export default Create;