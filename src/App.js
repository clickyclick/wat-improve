import React from 'react'
import Button from '@material-ui/core/Button';
import { withRouter } from 'react-router-dom'
import './App.css';
import logo from './images/uwLogo.png'


import createMuiTheme from '@material-ui/core/styles/createMuiTheme';
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';
import blue from '@material-ui/core/colors/blue';
import indigo from '@material-ui/core/colors/indigo';

const theme = createMuiTheme({
  typography: {
    useNextVariants: true,
  },
  palette: {
    primary: blue,
    secondary: indigo
  },
  overrides: {
    MuiButton: {
      root: {
        color: 'black',
        '&:hover': {
          backgroundColor: '#93969b'
        }
      }
    }
  }
});

class App extends React.Component {




  render() {
    return (
      <div className="container">
        <MuiThemeProvider theme={theme}>
          <div className="appMainDiv">
            <div className="textDiv">
              <img src={logo} ></img>
              <h1>Welcome to Wat Improve</h1>
              <h4>Click create to get started!</h4>
              <CreateButton className="createButton" />
            </div>
          </div>
        </MuiThemeProvider>
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