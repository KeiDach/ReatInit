import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Quiz from './Quiz';
import CompositionApp from './compositionblog';
import ShowStateApp from './getinitstate';

class MainApp extends Component {
  render() {
    return (
      <Quiz books={['The Lord of The Rings', 'The Iliad']} />
    );
  }
}

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <ShowStateApp />
      </div>
    );
  }
}

/*
<MainApp />
<CompositionApp />
*/

export default App;
