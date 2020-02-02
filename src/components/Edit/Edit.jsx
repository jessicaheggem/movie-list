import React, { Component } from 'react';

class Edit extends Component {
    // Renders the entire app on the DOM
    handleCancelClick = () => {
        console.log('clicked cancel');
        this.props.history.push('/details');
        
    }

    handleSaveClick = () => {
        console.log('clicked save');
        
    }

    render() {
        return (
            <>
                <h2>Edit</h2>
                <button onClick={this.handleCancelClick}>Cancel</button>
                <button onClick={this.handleSaveClick}>Save</button>
                <br />
                <br />
                <input type="text"/>
                <br />
                <br />
                <textarea name="" id="" cols="30" rows=""></textarea>

            </>
        );
    }
}

export default Edit;
