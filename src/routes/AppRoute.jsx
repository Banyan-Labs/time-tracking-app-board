import React from "react";
import { Route, Redirect } from "react-router-dom";
import Navbar from "../Components/Navbar";

const AppRoute = ({ isProtected, ...rest }) => {
  const isAuth = true;
  return (

    <>

<Navbar />
    <Route
      render={(props) =>
        isProtected && !isAuth ? (
          <Redirect
            to={{ pathname: "/sign-in", state: { from: props.location } }}
          />

     
        ) : (
          <Route {...rest} />
        )
      }
    />

    </>
  );
};

export default AppRoute;