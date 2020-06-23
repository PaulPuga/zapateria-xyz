import React from "react";
import { Route, Redirect } from "react-router-dom";

const PrivateRoute = ({ component: RouteComponent, ...rest }) => {
  return (
    <Route
      {...rest}
      render={(routeProps) =>
        localStorage.getItem("token-valid") ? (
          <RouteComponent {...routeProps} />
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: routeProps.location },
            }}
          />
        )
      }
    ></Route>
  );
};

export default PrivateRoute;
