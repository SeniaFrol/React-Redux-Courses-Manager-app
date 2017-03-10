import React, { Component } from 'react';
import { Link } from 'react-router';

class HomePage extends Component {
  render() {
    return(
      <div className="jumbotron">
        <h1>App Administrator</h1>
        <p>React, Redux and Reacr Router is ES 6 for responsive web apps. </p>
        <Link to="about" className="btn btn-primary btn-lg">Learn more</Link>
      </div>
    );
  }
}

export default HomePage;
