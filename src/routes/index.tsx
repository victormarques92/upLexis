import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';

import Details from '../pages/Details';
import Home from '../pages/Home';
import Abaut from '../pages/About';

const Routes: React.FC = () => (
  <Router>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/Abaut" component={Abaut} />
      <Route path="/:id" component={Details} />
    </Switch>
  </Router>
);

export default Routes;
