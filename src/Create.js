import React from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Checkbox from '@material-ui/core/Checkbox';
import axios from "axios";

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
      id: ''
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }


  handleChange = name => event => {
    this.setState({ [name]: event.target.value });
  };

  handleSubmit(event) {
    alert('A name was submitted: ' + this.state.name + this.state.message);
    this.addReview();
    event.preventDefault();
  }

  addReview = () => {
    let name = this.state.name;
    let message = this.state.message
   
    axios.post("http://localhost:3001/api/review", {
      name: name,
      message: message
    }).then((res) =>{
      console.log(res);
        if (res.data.id){
          this.setState({created:true, id:res.data.id})
        }
    });
  };

  render() {
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
          <Button type="submit" className="submitButton" >Submit</Button>
        </form>
      </div>,
      <div key="link" className="linkDiv">
        <h1>Send this to your employer:</h1>
        <LinkGen id={this.state.id} />
      </div>
    ])
  }
}

function LinkGen(props) {
  return (
    <a href={"/review/" + props.id}>
      http://localhost:3000/review/{props.id}
    </a>
  )
};


export default Create;