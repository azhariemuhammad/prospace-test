import React, { Component } from 'react';

import { OverviewPage } from './pages/overview-page/index'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="wrapper">
          <OverviewPage />
        </div>
      </div>
    );
  }
}

export default App;
