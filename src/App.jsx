import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { GlobalStyle } from './styles/GlobalStyles';
import LandingPage from './Pages/LandingPage';
import DashboardPage from './Pages/DashboardPage';

import PrivateRoute from './routes/PrivateRoute';

const App = () => {
  return (
    <React.Fragment>
      <GlobalStyle />
      <Router>
        <Switch>
          <Route path='/' exact component={LandingPage} />
          <PrivateRoute path='/dashboard' exact component={DashboardPage} />
        </Switch>
      </Router>
    </React.Fragment>
  );
};

export default App;
