import React, { Component } from 'react';
import './App.css';
import { Switch, Route, Link } from 'react-router-dom'
import AboutPage from './components/AboutPage'
import UserPage from './components/UserPage'
import NotFoundPage from './components/NotFoundPage'

class App extends Component {
  render() {
    return (
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/user">User</Link>
            </li>
          </ul>
        </nav>
        <Switch>
          <Route path="/" exact component={() => <h1>Home</h1>} />
          <Route path="/about" component={AboutPage} />
          <Route path="/user/:userid" component={({ match }) => {
            return <h1>hello user {match.params.userid}</h1>
          }} />
          <Route path="/user" component={UserPage} />
          <Route component={NotFoundPage} />
        </Switch>
      </div >
    );
  }
}

export default App;
