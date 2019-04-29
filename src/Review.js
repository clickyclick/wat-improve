import React from 'react'
import Button from '@material-ui/core/Button';
import { withRouter } from 'react-router-dom'

class Review extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            id: this.props.match.params.id
        };
    }



    //ComponentDidMount() {
        //get profile here
    //}

    render() {
        const id = this.state.id;
        return (
            <div className="appMainDiv">
                <h1>Give Name some Feedback</h1>
                <p>{id}</p>
            </div>
        )
    }
}


export default Review