import React from 'react'
import Button from '@material-ui/core/Button';
import { withRouter } from 'react-router-dom'
import './App.css';

class App extends React.Component {



  render() {
    return (
      <div className="appMainDiv">
        <h1>Welcome to WAT Improve</h1>
        <h4>Click create to get started!</h4>
        <CreateButton className="createButton"/>
      </div>
    )
  }
}

const CreateButton = withRouter(({ history }) => (
  <Button
    onClick={() => { history.push('/create') }}
  >
    Create
  </Button>
))

export default App