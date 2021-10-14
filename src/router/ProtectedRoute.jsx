import React from "react";
import { Route, Redirect } from "react-router-dom";

const ProtectedRoute = ({ isAuth, component: Component, ...restProps }) => {
  return (
    <Route
      {...restProps}
      render={(props) => {
        if (isAuth) {
          return <Component />;
        } else {
          return (
            <Redirect
              to={{ pathname: "/notfound", state: { from: props.location } }}
              isAuth={isAuth}
            />
          );
        }
      }}
    />
  );
};

export default ProtectedRoute;
