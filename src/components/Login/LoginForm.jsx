import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { auth, signInWithGoogle } from "../../firebase/firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
// import { useDispatch } from "react-redux";

// import { userActions } from "../../store/user-slice";
import { FormLabel, FormInput } from "../Form/FormLabelAndInput";
import FormButton from "../Form/FormButton";

// TODO: Show loading icon when submit
// TODO: Form validation
// TODO: Error message

const LoginForm = ({ onResetPasswordHandler }) => {
  const history = useHistory();
  // const dispatch = useDispatch();
  // const [isSubmit, setIsSubmit] = useState(false);
  const [isSubmit, setIsSubmit] = useState(false);
  const [emailInput, setEmailInput] = useState("");
  const [passwordInput, setPasswordInput] = useState("");

  const submitHandler = async (event) => {
    event.preventDefault();
    setIsSubmit(true);

    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        emailInput,
        passwordInput,
      );

      // const { displayName, email, photoURL, uid } = userCredential.user;

      // dispatch(
      //   userActions.setCurrentUser({
      //     displayName,
      //     email,
      //     photoURL,
      //     id: uid,
      //   }),
      // );
      setIsSubmit(false);
      setEmailInput("");
      setPasswordInput("");

      history.push("/");
    } catch (error) {
      console.error("LOG IN ERROR ", error);
    }
  };

  const onInputHandler = (event) => {
    const { name, value } = event.target;
    if (name === "email") setEmailInput(value);
    if (name === "password") setPasswordInput(value);
  };

  return (
    <form onSubmit={submitHandler}>
      <fieldset className="mt-5 lg:mt-0">
        <FormLabel label="Email" htmlFor="email" />
        <FormInput
          inputHandler={onInputHandler}
          id="email"
          type="email"
          value={emailInput}
          placeholder="Email"
          required
        />
      </fieldset>
      <fieldset className="mt-5">
        <FormLabel label="Password" htmlFor="password" />
        <FormInput
          inputHandler={onInputHandler}
          id="password"
          type="password"
          value={passwordInput}
          placeholder="Password"
          required
        />
      </fieldset>
      <fieldset className="mt-5">
        <FormButton disabled={isSubmit}>Sign In</FormButton>
        <FormButton onClickHandler={signInWithGoogle} isGoogle>
          Sign In with Google
        </FormButton>
      </fieldset>
      <div className="mt-10 flex space-x-5 text-sm tracking-wide">
        <Link to="/signup" className="hover:text-lightOrange-800">
          Create account
        </Link>
        <button type="button" onClick={onResetPasswordHandler}>
          Forgot your password?
        </button>
      </div>
    </form>
  );
};

export default LoginForm;
