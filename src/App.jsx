import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { GlobalStyle } from './styles/GlobalStyles';
import LandingPage from './Pages/LandingPage';
import DashboardPage from './Pages/DashboardPage';
import PrivateRoute from './routes/PrivateRoute';
import Timer from './Components/Timer';

const App = () => {
  return (
    <React.Fragment>
      <GlobalStyle />
      <Router>
        <Switch>
          <PrivateRoute path='/dashboard' exact component={DashboardPage} />
          <Route path='/' exact component={LandingPage} />
          <Route path='/dev' exact component={Timer} />
        </Switch>
      </Router>
    </React.Fragment>
  );
};

export default App;
