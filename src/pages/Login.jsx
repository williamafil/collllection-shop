import React from "react";
import { Link } from "react-router-dom";
import FormButton from "../components/Form/FormButton";
import { FormLabel, FormInput } from "../components/Form/FormLabelAndInput";
import LoginSignupWrapper from "../components/UI/LoginSignupWrapper";

const Login = () => {
  return (
    <section className="Login py-28">
      <LoginSignupWrapper sectionTitle="Create Account">
        <form>
          <fieldset className="mt-5 lg:mt-0">
            <FormLabel label="Email" />
            <FormInput id="email" type="email" placeholder="Email" />
          </fieldset>
          <fieldset className="mt-5">
            <FormLabel label="Password" />
            <FormInput id="password" type="password" placeholder="Password" />
          </fieldset>
          <fieldset className="mt-5">
            <FormButton value="Sign In" />
            <FormButton value="Sign In with Google" isGoogle />
          </fieldset>
          <div className="mt-10 flex space-x-5 text-sm tracking-wide">
            <Link to="/signup" className="hover:text-lightOrange-800">
              Create account
            </Link>
            <p>Forgot your password?</p>
          </div>
        </form>
      </LoginSignupWrapper>
    </section>
  );
};

export default Login;
