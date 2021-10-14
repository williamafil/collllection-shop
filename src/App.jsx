import React, { useState, useEffect } from "react";
import { Switch, Route } from "react-router-dom";
import { auth, createUserProfileDoc } from "./firebase/firebase";
import { onAuthStateChanged } from "@firebase/auth";
import { onSnapshot } from "@firebase/firestore";

import { useDispatch } from "react-redux";
import { userActions } from "./store/user-slice";

import Alert from "./components/Alert";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import PageNotFound from "./pages/PageNotFound";

function App() {
  const dispatch = useDispatch();
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribeOnAuthState = onAuthStateChanged(
      auth,
      async (authUserResponse) => {
        // authorized user
        if (authUserResponse) {
          const userDoc = await createUserProfileDoc(authUserResponse);
          const userSnapshot = await onSnapshot(userDoc, (snapshot) => {
            const id = snapshot.id;
            const userProfile = { ...snapshot.data() };

            dispatch(
              userActions.setCurrentUser({
                ...userProfile,
                id,
              }),
            );
          });
        }

        // unauthorized user (authUserResponse is null)
        dispatch(userActions.setCurrentUser(authUserResponse));

        return () => unsubscribeOnAuthState();
      },
    );
  }, []);

  return (
    <>
      <Alert />
      {/* <Header user={user} /> */}
      <Header />
      <Switch>
        <Route path="/login" component={Login} />
        <Route path="/signup" component={Signup} />
        <Route path="/notfound" component={PageNotFound} />
        <Route exact path="/" component={Home} />
        <Route path="*" component={PageNotFound} />
      </Switch>
      <Footer />
    </>
  );
}

export default App;
