import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Main from './pages/Main';
import Login from './pages/Login';

export default function Routes() {
  return (
    <Router>
      <Switch>
      <Route path="/login">
          <Login />
        </Route>
        
        <Route path="/">
          <Main />
        </Route>
        
      </Switch>
    </Router>
  );
}
