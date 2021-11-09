import React, { useEffect } from "react";

import { auth, createUserProfileDoc } from "./firebase/firebase";
import { onAuthStateChanged } from "@firebase/auth";
import { onSnapshot } from "@firebase/firestore";

import { useDispatch, useSelector } from "react-redux";
import { userActions } from "./store/user-slice";

import Routes from "./router";

import Cart from "./components/Cart/Cart";

import Alert from "./components/Notification/Alert";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Overlay from "./components/UI/Overlay";

function App() {
  const dispatch = useDispatch();
  const isCartShown = useSelector((state) => state.cart.isCartShown);
  const isOverlayShown = useSelector((state) => state.ui.isOverlayShown);

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
      {isCartShown && <Cart />}
      {isOverlayShown && <Overlay />}
      <div className={isOverlayShown ? "hidden" : "block"}>
        {/* <Alert /> */}
        <Header />
        <Routes />
        <Footer />
      </div>
    </>
  );
}

export default App;
