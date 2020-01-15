import React from 'react';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import DocsPage from './pages/DocsPage';
import 'bootstrap/dist/css/bootstrap.min.css';

import { HashRouter as Router, Route, Switch } from 'react-router-dom'

class App extends React.Component {

  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/">
            <HomePage />
          </Route>
          <Route exact path="/login">
            <LoginPage />
          </Route>
          <Route exact path="/docs">
            <DocsPage />
          </Route>
        </Switch>
      </Router>
    );
  }

}

export default App;