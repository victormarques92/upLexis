import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';

import Details from '../pages/Details';
import Home from '../pages/Home';

const Routes: React.FC = () => (
  <Router>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/:id" component={Details} />
    </Switch>
  </Router>
);

export default Routes;
