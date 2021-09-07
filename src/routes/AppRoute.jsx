import React, { useContext } from 'react';
import { Route, Redirect } from 'react-router-dom';
import { AuthContext } from '../Context/AuthContext';
import PropTypes from 'prop-types';

const AppRoute = ({ isProtected, ...rest }) => {
  const store = useContext(AuthContext);
  return (
    <Route
      render={(props) =>
        isProtected && !store.isAuth ? (
          <Redirect
            to={{ pathname: '/sign-in', state: { from: props.location } }}
          />
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
  location: PropTypes.object,
};
