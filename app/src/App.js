import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import Login from './components/Login/Login';
import Private from './components/Private/Private';
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <Route exact path='/' component={Login}/>
        <Route path='/private' component={Private}/>
      </div>
    );
  }
}

export default App;
