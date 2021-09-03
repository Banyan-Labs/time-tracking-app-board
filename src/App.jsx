import React from 'react';
import { BrowserRouter as Router, Switch } from 'react-router-dom';
import { v4 as uuid } from 'uuid';
import AppRoute from './routes/AppRoute';
import { AuthProvider } from './Context/AuthContext';
import routes from './routes';
import { GlobalStyle } from './styles/GlobalStyles';
import Navbar from './Components/Navbar';

const App = () => (
  <AuthProvider>
    <GlobalStyle />
    <Router>
      <Navbar />
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
  </AuthProvider>
);

export default App;
