import React, { Component } from 'react';

class Edit extends Component {
    // Renders the entire app on the DOM
    // state will be used for updating movie descriptions
state = {
    description: ''
}

    handleCancelClick = () => {
        console.log('clicked cancel');
        // sends user back to selected movie details page without changing description
        this.props.history.push('/details');
    }

    handleSaveClick = () => {
        console.log('clicked save');
        // Likely needed to update/save new description input
        // this.props.dispatch({
        //     type: 'UPDATE_DESCRIPTION',
        //     payload: this.state.description
        // })
        this.props.history.push('/details');        
    }

    // this will eventually connect to be able to update individual movie descriptions
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
                {/* <input type="text" /> */}
                <br />
                <textarea cols="30" placeholder="Update Description" onChange={(event) => this.updateDescription(event)}></textarea>

            </>
        );
    }
}

export default Edit;
