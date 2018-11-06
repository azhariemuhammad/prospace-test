import React, { Component } from 'react';
import { Provider } from 'react-redux'
import { Switch } from 'react-router'
import {Route, BrowserRouter as Router } from 'react-router-dom';




import store from './store/configureStore'

import './App.css';
import { Page } from './pages/page';
import { OverviewPage } from './pages/overview-page';
import { OfficePage } from './pages/office-page';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <div className="wrapper">
            <Router>
              <Switch>
                <Route exact path="/" component={OverviewPage}/>
                <Route path="/office" component={OfficePage}/>
              </Switch>
            </Router>
          </div>
        </div>
      </Provider>
    );
  }
}

export default App;
