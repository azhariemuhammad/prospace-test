import React, { Component } from 'react';
import {Route, BrowserRouter as Router } from 'react-router-dom';


import './App.css';
import { Page } from './pages/page';
import { OverviewPage } from './pages/overview-page';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="wrapper">
          <Router>
            <Route path="/" component={OverviewPage}>
            </Route>
          </Router>
        </div>
      </div>
    );
  }
}

export default App;
