import React, { Component } from 'react';
import MapComponent from './components/map-component/MapComponent';
import './App.css';
import List from './components/list/List';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="panel">
          <List />
        </div>
        <div className="map-container">
          <MapComponent />
        </div>
      </div>
    );
  }
}

export default App;
