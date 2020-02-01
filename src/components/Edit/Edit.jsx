import React, { Component } from 'react';

class Edit extends Component {
    // Renders the entire app on the DOM
    render() {
        return (
            <>
                <h2>Edit</h2>
                <button>Cancel</button>
                <button>Save</button>
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
