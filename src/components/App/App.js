import React, { Component } from 'react';
import Home from '../Home/Home'
import Header from '../Header/Header'
import Details from '../Details/Details'
import Edit from '../Edit/Edit'
import { connect } from 'react-redux'
import { HashRouter as Router, Route, Link } from 'react-router-dom';
import './App.css';

class App extends Component {
  // Renders the entire app on the DOM
  render() {
    return (
      <Router>
        <div className="App">
          <Header />
          <Route exact path="/" component={Home} />
          <Route path="/details/:id" component={Details} />
          <Route path="/edit" component={Edit} />
        </div>
      </Router>
    );
  }
}

export default connect()(App);
