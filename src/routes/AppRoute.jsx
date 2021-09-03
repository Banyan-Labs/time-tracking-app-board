import React, { useContext } from 'react';
import { Route, Redirect } from 'react-router-dom';
import { AuthContext } from '../Context/AuthContext';
import PropTypes from 'prop-types';

const AppRoute = ({ isProtected, ...rest }) => {
  const store = useContext(AuthContext);
  return (
    <Route
      render={({ location }) =>
        isProtected && !store.isAuth ? (
          <Redirect to={{ pathname: '/sign-in', state: { from: location } }} />
        ) : (
          <Route {...rest} />
        )
      }
    />
  );
};

export default AppRoute;

AppRoute.propTypes = {
  isProtected: PropTypes.bool,
  location: PropTypes.string,
};
