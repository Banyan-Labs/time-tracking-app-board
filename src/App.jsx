import React from "react";
import { BrowserRouter as Router, Switch } from "react-router-dom";
import AppRoute from "./routes/AppRoute";
import routes from "./routes";
import { AuthProvider } from "./Context/AuthContext";

const App = () => {

  console.log(AuthProvider())
  return (

    <AuthProvider>
    <Router>
      <Switch>
        {routes.map((route, index) => (
          <AppRoute
            isProtected={route.isProtected}
            exact={true}
            key={index}
            path={route.path}
            component={route.component}
          />
        ))}
      </Switch>
    </Router>
    </AuthProvider>
  );
};

export default App;
