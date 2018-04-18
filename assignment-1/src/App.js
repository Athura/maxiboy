import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Useroutput from './components/UserOutput/Useroutput';
import Userinput from './components/UserInput/Userinput';
import Validation from './components/Validation/Validation';
import Char from './components/Char/Char';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      usernames: [
        { username: 'Joshua' }
      ],
      count: ''
    }
  }

  _manipulateState = (event) => {
    this.setState({
      usernames: [
        { username: event.target.value }
      ]
    });
  }

  _countInputField = (event) => {
    this.setState({
      count: event.target.value
    });
  }

  //assignment 2
  _deleteCharHandler = (charIndex) => {
    const text = this.state.count.split('');
    text.splice(charIndex, 1);
    
    const updatedText = text.join('');
    this.setState({
      count: updatedText
    });
  }

  render() {
    const charList = this.state.count.split('').map((ch, index) => {
      return <Char character={ch} key={ index } onClick = {() => this._deleteCharHandler(index) } />;
    });

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
          <input type="text"  onChange={ this._countInputField } value={this.state.count} />
          <p>{this.state.count}</p>
          <Validation inputLength={ this.state.count.length } />
          { charList }
        </p>
      </div>
    );
  }
}

export default App;
