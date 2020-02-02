import React, { Component } from 'react';
import { connect } from 'react-redux';


class Details extends Component {
    // Renders the entire app on the DOM
    handleBackClick = () => {
        console.log('clicked back to list');
        //directing to home page
        this.props.history.push('/');
    }

    handleEditClick = () => {
        console.log('clicked edit');
        //directing to /edit page
        this.props.history.push('/edit');
    }

    render() {
        return (
            <div className="movies">
                <h2>Details</h2>
                <button onClick={this.handleBackClick}>Back to List</button>
                <button onClick={this.handleEditClick}>Edit</button>
                <br />
                <br />
                {/* {JSON.stringify(this.props.reduxState.details)} */}
                <h2>{this.props.reduxState.details.title}</h2>
                <img src={this.props.reduxState.details.poster} />
                <div>{this.props.reduxState.details.description}</div>
                <h3>Genres:</h3>
                <p>{this.props.reduxState.genres.name}</p>

                {/* <div>{this.props.}</div> */}
            </div>

        );
    }
}

const mapStateToProps = reduxState => ({
    reduxState,
});

export default connect(mapStateToProps)(Details);
