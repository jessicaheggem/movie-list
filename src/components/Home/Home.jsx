import React, { Component } from 'react';
import { connect } from 'react-redux'


class Home extends Component {
    // Renders the entire app on the DOM
    componentDidMount() {
        // use component did mount to dispatch an action to request the movies
        this.getMovies();
    }

    getMovies = () => {
        this.props.dispatch({
            type: 'GET_MOVIES'
        })
    }

    handleGenreClick = () => {
        console.log('clicked genre');

    }

    render() {
        return (
           
                <div>
                    {this.props.reduxState.movies.map(item =>
                        <div key={item.id}>
                        <h2>{item.title}</h2>
                        <img src={item.poster} />
                        <p>{item.description}</p>
                        <button onClick={this.handleGenreClick}>Genre</button>
                        </div>
                        )}
                </div>
          
        );
    }
}

const mapStateToProps = reduxState => ({
    reduxState,
});

export default connect(mapStateToProps)(Home);
