import React from "react";
import { Link } from "react-router-dom";
import { signInWithGoogle } from "../../firebase/firebase";

import { FormLabel, FormInput } from "../Form/FormLabelAndInput";
import FormButton from "../Form/FormButton";

const LoginForm = ({ onResetPasswordHandler }) => {
  const submitHandler = (event) => {
    event.preventDefault();
  };

  return (
    <form onSubmit={submitHandler}>
      <fieldset className="mt-5 lg:mt-0">
        <FormLabel label="Email" />
        <FormInput id="email" type="email" placeholder="Email" required />
      </fieldset>
      <fieldset className="mt-5">
        <FormLabel label="Password" />
        <FormInput
          id="password"
          type="password"
          placeholder="Password"
          required
        />
      </fieldset>
      <fieldset className="mt-5">
        <FormButton value="Sign In" />
        <FormButton
          onClickHandler={signInWithGoogle}
          value="Sign In with Google"
          isGoogle
        />
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
