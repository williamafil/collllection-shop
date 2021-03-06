import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { auth, signInWithGoogle } from "../../firebase/firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import { pathToSignup } from "../../router";

import { FormLabel, FormInput } from "../Form/FormLabelAndInput";
import FormButton from "../Form/FormButton";

const LoginForm = ({ onResetPasswordHandler }) => {
  const history = useHistory();
  const [isSubmit, setIsSubmit] = useState(false);
  const [emailInput, setEmailInput] = useState("");
  const [passwordInput, setPasswordInput] = useState("");
  const [errorMsg, setErrorMsg] = useState("");

  const submitHandler = async (event) => {
    event.preventDefault();
    setIsSubmit(true);

    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        emailInput,
        passwordInput,
      );

      setIsSubmit(false);
      setEmailInput("");
      setPasswordInput("");

      history.push("/");
    } catch (error) {
      const { code, message } = error;
      setIsSubmit(false);

      switch (code) {
        case "auth/user-not-found":
        case "auth/wrong-password":
          setErrorMsg("Incorrect email or password.");
          break;
        default:
          setErrorMsg(message);
      }
    }
  };

  const onInputHandler = (event) => {
    const { name, value } = event.target;
    if (name === "email") setEmailInput(value);
    if (name === "password") setPasswordInput(value);
  };

  return (
    <>
      {errorMsg && <div className="p-2.5 bg-lightOrange-800">{errorMsg}</div>}

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
        <div className="mt-10 flex justify-between text-sm tracking-wide">
          <section className="flex space-x-5">
            <Link to={pathToSignup} className="hover:text-lightOrange-800">
              Create account
            </Link>
            <button type="button" onClick={onResetPasswordHandler}>
              Forgot your password?
            </button>
          </section>
          <section>
            <p>
              <span>account:a@a.com</span> / <span>password:123456</span>
            </p>
          </section>
        </div>
      </form>
    </>
  );
};

export default LoginForm;
