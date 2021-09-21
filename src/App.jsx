import React, { useContext } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
// import { v4 as uuid } from 'uuid';
// import AppRoute from './routes/AppRoute';
import { AuthContext } from './Context/AuthContext';
// import routes from './routes';
import { GlobalStyle } from './styles/GlobalStyles';
import { useAuth0 } from '@auth0/auth0-react';
import LandingPage from './Pages/LandingPage';
import DashboardPage from './Pages/DashboardPage';

import PrivateRoute from './routes/PrivateRoute';

const App = () => {
  const store = useContext(AuthContext);
  const auth = useAuth0();

  return (
    <React.Fragment>
      <GlobalStyle />
      {console.log('auth0: ', auth)}
      {console.log('store: ', store)}
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
