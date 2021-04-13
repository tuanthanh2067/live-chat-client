import React from "react";
import { Route, Redirect } from "react-router-dom";

import { useSelector } from "react-redux";

const GuardedRoute = ({ component: Component, ...rest }) => {
  const auth = useSelector((state) => state.user.authenticated);

  return (
    <Route
      {...rest}
      render={(props) =>
        auth ? <Component {...props} /> : <Redirect to="/login" />
      }
    />
  );
};

export default GuardedRoute;
