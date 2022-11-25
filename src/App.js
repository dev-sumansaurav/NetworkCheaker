import React, { Component } from 'react';
import './App.css';
import NetworkConnection from './Network/NetworkConnection';

class App extends Component {
  renderImage() {
    return (
      <div className='image-list'>
        
      </div>
    )
  }
  render() {
    return (
      <div className="App">
        <NetworkConnection/>
      </div>
    );
  }
}

export default App;