import React from 'react';
import { BrowserRouter as Router, Switch } from 'react-router-dom';
import { v4 as uuid } from 'uuid';
import AppRoute from './routes/AppRoute';
import Footer from './Components/Footer';
import { AuthProvider } from './Context/AuthContext';
import routes from './routes';
import { GlobalStyle } from './styles/GlobalStyles';

const App = () => (
  <AuthProvider>
    <GlobalStyle />
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
      <Footer />
    </Router>
  </AuthProvider>
);

export default App;
