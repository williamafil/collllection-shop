import React from "react";
import { Switch, Route } from "react-router-dom";
import { useSelector } from "react-redux";

import Home from "../pages/Home";
import Login from "../pages/Login";
import Signup from "../pages/Signup";
import PageNotFound from "../pages/PageNotFound";
import Account from "../pages/protected/Account";

import ProtectedRoute from "./ProtectedRoute";

const Routes = () => {
  const currentUser = useSelector((state) => state.user.currentUser);

  return (
    <Switch>
      <ProtectedRoute
        isAuth={currentUser}
        path="/account"
        component={Account}
      />

      <Route path="/login" component={Login} />
      <Route path="/signup" component={Signup} />
      <Route path="/notfound" component={PageNotFound} />
      <Route exact path="/" component={Home} />
      <Route path="*" component={PageNotFound} />
    </Switch>
  );
};

export default Routes;
