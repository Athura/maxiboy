import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Useroutput from './components/UserOutput/Useroutput';
import Userinput from './components/UserInput/Userinput';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      usernames: [
        { username: 'Joshua' }
      ]
    }
  }

  _manipulateState = (event) => {
    this.setState({
      usernames: [
        { username: event.target.value }
      ]
    });
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
          <Userinput username={ this.state.usernames[0].username } onChange={ this._manipulateState } />
          <Useroutput username={ this.state.usernames[0].username } />
        </p>
      </div>
    );
  }
}

export default App;
