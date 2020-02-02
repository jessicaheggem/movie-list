import React, { Component } from 'react';

class Details extends Component {
    // Renders the entire app on the DOM
    handleBackClick = () => {
        console.log('clicked back to list');
        this.props.history.push('/');

    }

    handleEditClick = () => {
        console.log('clicked edit');
        this.props.history.push('/edit');

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
