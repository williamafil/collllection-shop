import React from "react";
import { Switch, Route } from "react-router-dom";
import { useSelector } from "react-redux";

import Home from "../pages/Home";
import Login from "../pages/Login";
import Signup from "../pages/Signup";
import Search from "../pages/Search";
import Account from "../pages/protected/Account";
import Product from "../pages/Product";
import Checkout from "../pages/Checkout";
import PageNotFound from "../pages/PageNotFound";
import CollectionProducts from "../pages/CollectionProducts";
import Payment from "../pages/Payment";
import ProtectedRoute from "./ProtectedRoute";

export const pathToHome = "/";
export const pathToLogin = "/login";
export const pathToSearch = "/search";
export const pathToSignup = "/signup";
export const pathToCheckout = "/checkout";
export const pathToAccount = "/account";

const Routes = () => {
  const currentUser = useSelector((state) => state.user.currentUser);

  return (
    <Switch>
      <ProtectedRoute
        isAuth={currentUser}
        path={pathToAccount}
        component={Account}
      />

      <Route path={pathToLogin} component={Login} />
      <Route path={pathToSignup} component={Signup} />
      <Route path={pathToCheckout} component={Checkout} />
      <Route path={pathToSearch} component={Search} />

      <Route path="/payment/:orderId" component={Payment} />
      <Route path="/notfound" component={PageNotFound} />
      <Route path="/collections/:pathName" component={CollectionProducts} />
      <Route path="/products/:slug" component={Product} />
      <Route exact path="/" component={Home} />
      <Route path="*" component={PageNotFound} />
    </Switch>
  );
};

export default Routes;
