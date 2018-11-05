import React, { Component } from 'react';
import { Provider } from 'react-redux'
import {Route, BrowserRouter as Router } from 'react-router-dom';




import store from './store/configureStore'

import './App.css';
import { Page } from './pages/page';
import { OverviewPage } from './pages/overview-page';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <div className="wrapper">
            <Router>
              <Route path="/" component={OverviewPage}>
              </Route>
            </Router>
          </div>
        </div>
      </Provider>
    );
  }
}

export default App;
