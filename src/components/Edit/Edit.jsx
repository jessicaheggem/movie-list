import React, { Component } from 'react';

class Edit extends Component {
    // Renders the entire app on the DOM
state = {
    description: ''
}

    handleCancelClick = () => {
        console.log('clicked cancel');
        this.props.history.push('/details');
    }

    handleSaveClick = () => {
        console.log('clicked save');
        // this.props.dispatch({
        //     type: 'UPDATE_DESCRIPTION',
        //     payload: this.state.description
        // })
        this.props.history.push('/details');        
    }

    updateDescription = (event) => {
        this.setState({
            description: event.target.value
        })
    }

    render() {
        return (
            <>
                <h2>Edit</h2>
                <button onClick={this.handleCancelClick}>Cancel</button>
                <button onClick={this.handleSaveClick}>Save</button>
                <br />
                <br />
                <input type="text" />
                <br />
                <br />
                <textarea cols="30" placeholder="Update Description" onChange={(event) => this.updateDescription(event)}></textarea>

            </>
        );
    }
}

export default Edit;
