import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import numeral from "numeral";

class App extends Component {
  constructor(props) {
    super(props);
    //numeral.local = 'ja';
  }

  hoge = () => {
    let price = numeral(1000).format('0,0');
    let old = numeral(price)
    console.log(price)
    console.log(old.value())
  }

  render() {
    return (
      <div className="App">
        {this.hoge()}
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}

export default App;
