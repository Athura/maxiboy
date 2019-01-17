import React, { Component } from 'react';
// To enable css modules you have to eject and then edit the webpack.config.dev.js file in config folder. Add below to it
// modules: true,
// localIdentName: '[name]__[local]__[hash:base64:5]'
import classes from './App.css';

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

    const style = {
      backgroundColor: 'green',
      color: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer',
    };

    const assignedClasses = [];
    if (this.state.count.length <=2) {
      assignedClasses.push(classes.red); // classes = ['red']
    }
    if(this.state.count.length <=1) {
      assignedClasses.push(classes.bold); // classes = ['red', 'bold']
    }

    return (
        <div className={ classes.App }>
            <button style={ style }>This is a button that does nothing</button>
            <Userinput username={ this.state.usernames[0].username } onChange={ this._manipulateState } />
            <Useroutput username={ this.state.usernames[0].username } />
            <input type="text"  onChange={ this._countInputField } value={this.state.count} />
            <p className={assignedClasses.join(' ')} >{this.state.count}</p>
            <Validation inputLength={ this.state.count.length } />
            { charList }
        </div>
    );
  }
}

export default App;
