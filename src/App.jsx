import React from 'react';
import { BrowserRouter as Router, Switch } from 'react-router-dom';
import { v4 as uuid } from 'uuid';
import AppRoute from './routes/AppRoute';
import routes from './routes';

const App = () => (
  <Router>
    <Switch>
      {routes.map((route) => (
        <AppRoute
          isProtected={route.isProtected}
          exact
          key={uuid()}
          path={route.path}
          component={route.component}
        />
      ))}
    </Switch>
  </Router>
);

export default App;
