import React from 'react';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import DocsPage from './pages/DocsPage';
import 'bootstrap/dist/css/bootstrap.min.css';

import { HashRouter as Router, Route, Switch } from 'react-router-dom'

class App extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      activeUser: null
      // "id": "wwww",
      // "name": "Eli"
    }
  }

  render() {
  const {activeUser} = this.state;

    return (
      <Router>
        <Switch>
          <Route exact path="/">
            <HomePage activeUser={activeUser} />
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