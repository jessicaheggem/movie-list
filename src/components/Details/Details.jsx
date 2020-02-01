import React, { Component } from 'react';

class Details extends Component {
    // Renders the entire app on the DOM
    handleBackClick = () => {
        console.log('clicked back to list');

    }

    handleEditClick = () => {
        console.log('clicked edit');

    }

    render() {
        return (
            <>
                <h2>Details</h2>
                <button onClick={this.handleBackClick}>Back to List</button>
                <button onClick={this.handleEditClick}>Edit</button>
            </>
        );
    }
}

export default Details;
