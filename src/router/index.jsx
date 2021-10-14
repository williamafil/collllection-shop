import React from "react";
import { Switch, Route } from "react-router-dom";

import Home from "../pages/Home";
import Login from "../pages/Login";
import Signup from "../pages/Signup";
import PageNotFound from "../pages/PageNotFound";

const Routes = () => {
  return (
    <Switch>
      <Route path="/login" component={Login} />
      <Route path="/signup" component={Signup} />
      <Route path="/notfound" component={PageNotFound} />
      <Route exact path="/" component={Home} />
      <Route path="*" component={PageNotFound} />
    </Switch>
  );
};

export default Routes;
